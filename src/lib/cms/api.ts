import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { DEFAULT_CATEGORIES, DEFAULT_CONTENT, DEFAULT_PRODUCTS } from "./defaults";
import type { Category, Product, Settings, SiteData } from "./types";

type Sql = {
  <T = Record<string, unknown>>(
    strings: TemplateStringsArray,
    ...values: unknown[]
  ): Promise<T[]>;
};

async function getDb(): Promise<Sql> {
  const { getSql } = await import("@/lib/db");
  return getSql();
}

type SettingsRow = {
  phone: string;
  instagram: string;
  orders_closed: boolean;
  orders_closed_until: string | null;
  orders_closed_message: string;
  seeded: boolean;
};

type CategoryRow = {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  visible: boolean;
  sort_order: number;
};

type ProductRow = {
  id: number;
  category_id: number;
  name: string;
  description: string;
  price: number;
  unit: string;
  image: string;
  badge: string;
  visible: boolean;
  sort_order: number;
};

function mapSettings(row: SettingsRow): Settings {
  return {
    phone: row.phone,
    instagram: row.instagram,
    ordersClosed: Boolean(row.orders_closed),
    ordersClosedUntil: row.orders_closed_until,
    ordersClosedMessage: row.orders_closed_message,
  };
}

function mapCategory(row: CategoryRow): Category {
  return {
    id: Number(row.id),
    name: row.name,
    slug: row.slug,
    description: row.description,
    image: row.image,
    visible: Boolean(row.visible),
    sortOrder: Number(row.sort_order),
  };
}

function mapProduct(row: ProductRow): Product {
  return {
    id: Number(row.id),
    categoryId: Number(row.category_id),
    name: row.name,
    description: row.description,
    price: Number(row.price),
    unit: row.unit,
    image: row.image,
    badge: row.badge ?? "",
    visible: Boolean(row.visible),
    sortOrder: Number(row.sort_order),
  };
}

async function ensureSeed(sql: Sql): Promise<void> {
  const settings = await sql<SettingsRow>`
    select phone, instagram, orders_closed, orders_closed_until, orders_closed_message, seeded
    from site_settings where id = 1
  `;
  if (settings.length === 0) {
    await sql`insert into site_settings (id) values (1) on conflict (id) do nothing`;
  }

  for (const item of DEFAULT_CONTENT) {
    await sql`
      insert into site_content (key, value, kind)
      values (${item.key}, ${item.value}, ${item.kind})
      on conflict (key) do nothing
    `;
  }

  const seededRow = await sql<{ seeded: boolean }>`select seeded from site_settings where id = 1`;
  if (seededRow[0]?.seeded) return;

  const existing = await sql<{ id: number }>`select id from categories limit 1`;
  if (existing.length === 0) {
    for (const c of DEFAULT_CATEGORIES) {
      await sql`
        insert into categories (name, slug, description, image, visible, sort_order)
        values (${c.name}, ${c.slug}, ${c.description}, ${c.image}, true, ${c.sortOrder})
      `;
    }
    const cats = await sql<{ id: number; slug: string }>`select id, slug from categories`;
    const bySlug = Object.fromEntries(cats.map((c) => [c.slug, Number(c.id)]));
    for (const p of DEFAULT_PRODUCTS) {
      const categoryId = bySlug[p.categorySlug];
      if (!categoryId) continue;
      await sql`
        insert into products
          (category_id, name, description, price, unit, image, badge, visible, sort_order)
        values
          (${categoryId}, ${p.name}, ${p.description}, ${p.price}, ${p.unit}, ${p.image}, ${p.badge}, true, ${p.sortOrder})
      `;
    }
  }

  await sql`update site_settings set seeded = true where id = 1`;
}

async function requireAdmin(sql: Sql, token: string): Promise<void> {
  if (!token) throw new Error("وارد پنل مدیریت شوید");
  const rows = await sql<{ token: string }>`
    select token from admin_sessions where token = ${token} limit 1
  `;
  if (rows.length === 0) throw new Error("نشست منقضی شده؛ دوباره وارد شوید");
}

async function loadSite(sql: Sql, includeHidden: boolean): Promise<SiteData> {
  await ensureSeed(sql);
  const settingsRows = await sql<SettingsRow>`
    select phone, instagram, orders_closed, orders_closed_until, orders_closed_message, seeded
    from site_settings where id = 1
  `;
  const contentRows = await sql<{ key: string; value: string }>`
    select key, value from site_content
  `;
  const categoryRows = includeHidden
    ? await sql<CategoryRow>`
        select id, name, slug, description, image, visible, sort_order
        from categories order by sort_order asc, id asc
      `
    : await sql<CategoryRow>`
        select id, name, slug, description, image, visible, sort_order
        from categories where visible = true order by sort_order asc, id asc
      `;
  const productRows = includeHidden
    ? await sql<ProductRow>`
        select id, category_id, name, description, price, unit, image, badge, visible, sort_order
        from products order by sort_order asc, id asc
      `
    : await sql<ProductRow>`
        select id, category_id, name, description, price, unit, image, badge, visible, sort_order
        from products where visible = true order by sort_order asc, id asc
      `;

  const content: Record<string, string> = {};
  for (const row of contentRows) content[row.key] = row.value;

  const settings = settingsRows[0]
    ? mapSettings(settingsRows[0])
    : {
        phone: "+989129564648",
        instagram: "fingerfood.nazli",
        ordersClosed: false,
        ordersClosedUntil: null,
        ordersClosedMessage: "",
      };

  return {
    settings,
    content,
    categories: categoryRows.map(mapCategory),
    products: productRows.map(mapProduct),
  };
}

export const fetchPublicSite = createServerFn({ method: "GET" }).handler(
  async (): Promise<SiteData> => {
    const sql = await getDb();
    return loadSite(sql, false);
  },
);

export const fetchAdminSite = createServerFn({ method: "POST" })
  .validator((d: unknown) => z.object({ token: z.string() }).parse(d))
  .handler(async ({ data }): Promise<SiteData> => {
    const sql = await getDb();
    await requireAdmin(sql, data.token);
    return loadSite(sql, true);
  });

export const loginAdmin = createServerFn({ method: "POST" })
  .validator((d: unknown) => z.object({ pin: z.string().min(1) }).parse(d))
  .handler(async ({ data }): Promise<{ token: string }> => {
    const sql = await getDb();
    await ensureSeed(sql);
    const rows = await sql<{ admin_pin: string }>`select admin_pin from site_settings where id = 1`;
    if (!rows[0] || data.pin !== rows[0].admin_pin) {
      throw new Error("رمز ورود نادرست است");
    }
    const { randomBytes } = await import("node:crypto");
    const token = randomBytes(24).toString("hex");
    await sql`insert into admin_sessions (token) values (${token})`;
    return { token };
  });

export const logoutAdmin = createServerFn({ method: "POST" })
  .validator((d: unknown) => z.object({ token: z.string() }).parse(d))
  .handler(async ({ data }): Promise<{ ok: true }> => {
    const sql = await getDb();
    await sql`delete from admin_sessions where token = ${data.token}`;
    return { ok: true };
  });

export const saveContent = createServerFn({ method: "POST" })
  .validator((d: unknown) =>
    z
      .object({
        token: z.string(),
        entries: z.record(z.string(), z.string()),
      })
      .parse(d),
  )
  .handler(async ({ data }): Promise<{ ok: true }> => {
    const sql = await getDb();
    await requireAdmin(sql, data.token);
    for (const [key, value] of Object.entries(data.entries)) {
      await sql`
        insert into site_content (key, value, kind)
        values (${key}, ${value}, 'text')
        on conflict (key) do update set value = excluded.value
      `;
    }
    return { ok: true };
  });

export const saveSettings = createServerFn({ method: "POST" })
  .validator((d: unknown) =>
    z
      .object({
        token: z.string(),
        phone: z.string().min(4),
        instagram: z.string().min(1),
        ordersClosed: z.boolean(),
        ordersClosedUntil: z.string().nullable(),
        ordersClosedMessage: z.string(),
      })
      .parse(d),
  )
  .handler(async ({ data }): Promise<{ ok: true }> => {
    const sql = await getDb();
    await requireAdmin(sql, data.token);
    const until =
      data.ordersClosedUntil && data.ordersClosedUntil.length > 0
        ? data.ordersClosedUntil
        : null;
    await sql`
      update site_settings
      set phone = ${data.phone},
          instagram = ${data.instagram},
          orders_closed = ${data.ordersClosed},
          orders_closed_until = ${until},
          orders_closed_message = ${data.ordersClosedMessage}
      where id = 1
    `;
    return { ok: true };
  });

export const changePin = createServerFn({ method: "POST" })
  .validator((d: unknown) =>
    z
      .object({
        token: z.string(),
        currentPin: z.string().min(1),
        nextPin: z.string().min(3),
      })
      .parse(d),
  )
  .handler(async ({ data }): Promise<{ ok: true }> => {
    const sql = await getDb();
    await requireAdmin(sql, data.token);
    const rows = await sql<{ admin_pin: string }>`select admin_pin from site_settings where id = 1`;
    if (!rows[0] || data.currentPin !== rows[0].admin_pin) {
      throw new Error("رمز فعلی نادرست است");
    }
    await sql`update site_settings set admin_pin = ${data.nextPin} where id = 1`;
    return { ok: true };
  });

const categoryInput = z.object({
  token: z.string(),
  id: z.number().optional(),
  name: z.string().min(1),
  slug: z.string().min(1),
  description: z.string(),
  image: z.string(),
  visible: z.boolean(),
  sortOrder: z.number(),
});

export const saveCategory = createServerFn({ method: "POST" })
  .validator((d: unknown) => categoryInput.parse(d))
  .handler(async ({ data }): Promise<Category> => {
    const sql = await getDb();
    await requireAdmin(sql, data.token);
    if (data.id) {
      const rows = await sql<CategoryRow>`
        update categories
        set name = ${data.name},
            slug = ${data.slug},
            description = ${data.description},
            image = ${data.image},
            visible = ${data.visible},
            sort_order = ${data.sortOrder}
        where id = ${data.id}
        returning id, name, slug, description, image, visible, sort_order
      `;
      if (!rows[0]) throw new Error("دسته پیدا نشد");
      return mapCategory(rows[0]);
    }
    const rows = await sql<CategoryRow>`
      insert into categories (name, slug, description, image, visible, sort_order)
      values (${data.name}, ${data.slug}, ${data.description}, ${data.image}, ${data.visible}, ${data.sortOrder})
      returning id, name, slug, description, image, visible, sort_order
    `;
    return mapCategory(rows[0]!);
  });

export const deleteCategory = createServerFn({ method: "POST" })
  .validator((d: unknown) => z.object({ token: z.string(), id: z.number() }).parse(d))
  .handler(async ({ data }): Promise<{ ok: true }> => {
    const sql = await getDb();
    await requireAdmin(sql, data.token);
    await sql`delete from categories where id = ${data.id}`;
    return { ok: true };
  });

const productInput = z.object({
  token: z.string(),
  id: z.number().optional(),
  categoryId: z.number(),
  name: z.string().min(1),
  description: z.string(),
  price: z.number().int().nonnegative(),
  unit: z.string().min(1),
  image: z.string(),
  badge: z.string(),
  visible: z.boolean(),
  sortOrder: z.number(),
});

export const saveProduct = createServerFn({ method: "POST" })
  .validator((d: unknown) => productInput.parse(d))
  .handler(async ({ data }): Promise<Product> => {
    const sql = await getDb();
    await requireAdmin(sql, data.token);
    if (data.id) {
      const rows = await sql<ProductRow>`
        update products
        set category_id = ${data.categoryId},
            name = ${data.name},
            description = ${data.description},
            price = ${data.price},
            unit = ${data.unit},
            image = ${data.image},
            badge = ${data.badge},
            visible = ${data.visible},
            sort_order = ${data.sortOrder}
        where id = ${data.id}
        returning id, category_id, name, description, price, unit, image, badge, visible, sort_order
      `;
      if (!rows[0]) throw new Error("محصول پیدا نشد");
      return mapProduct(rows[0]);
    }
    const rows = await sql<ProductRow>`
      insert into products
        (category_id, name, description, price, unit, image, badge, visible, sort_order)
      values
        (${data.categoryId}, ${data.name}, ${data.description}, ${data.price}, ${data.unit}, ${data.image}, ${data.badge}, ${data.visible}, ${data.sortOrder})
      returning id, category_id, name, description, price, unit, image, badge, visible, sort_order
    `;
    return mapProduct(rows[0]!);
  });

export const deleteProduct = createServerFn({ method: "POST" })
  .validator((d: unknown) => z.object({ token: z.string(), id: z.number() }).parse(d))
  .handler(async ({ data }): Promise<{ ok: true }> => {
    const sql = await getDb();
    await requireAdmin(sql, data.token);
    await sql`delete from products where id = ${data.id}`;
    return { ok: true };
  });
