import { i as DEFAULT_PRODUCTS, n as DEFAULT_CATEGORIES, r as DEFAULT_CONTENT } from "./defaults-LosX1biD.mjs";
import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
import { a as record, i as object, o as string, r as number, t as boolean } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/api-CFx3Qses.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
async function getDb() {
	const { getSql } = await import("./db-BAeWU5Tc.mjs");
	return getSql();
}
function mapSettings(row) {
	return {
		phone: row.phone,
		instagram: row.instagram,
		ordersClosed: Boolean(row.orders_closed),
		ordersClosedUntil: row.orders_closed_until,
		ordersClosedMessage: row.orders_closed_message
	};
}
function mapCategory(row) {
	return {
		id: Number(row.id),
		name: row.name,
		slug: row.slug,
		description: row.description,
		image: row.image,
		visible: Boolean(row.visible),
		sortOrder: Number(row.sort_order)
	};
}
function mapProduct(row) {
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
		sortOrder: Number(row.sort_order)
	};
}
async function ensureSeed(sql) {
	if ((await sql`
    select phone, instagram, orders_closed, orders_closed_until, orders_closed_message, seeded
    from site_settings where id = 1
  `).length === 0) await sql`insert into site_settings (id) values (1) on conflict (id) do nothing`;
	for (const item of DEFAULT_CONTENT) await sql`
      insert into site_content (key, value, kind)
      values (${item.key}, ${item.value}, ${item.kind})
      on conflict (key) do nothing
    `;
	if ((await sql`select seeded from site_settings where id = 1`)[0]?.seeded) return;
	if ((await sql`select id from categories limit 1`).length === 0) {
		for (const c of DEFAULT_CATEGORIES) await sql`
        insert into categories (name, slug, description, image, visible, sort_order)
        values (${c.name}, ${c.slug}, ${c.description}, ${c.image}, true, ${c.sortOrder})
      `;
		const cats = await sql`select id, slug from categories`;
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
async function requireAdmin(sql, token) {
	if (!token) throw new Error("وارد پنل مدیریت شوید");
	if ((await sql`
    select token from admin_sessions where token = ${token} limit 1
  `).length === 0) throw new Error("نشست منقضی شده؛ دوباره وارد شوید");
}
async function loadSite(sql, includeHidden) {
	await ensureSeed(sql);
	const settingsRows = await sql`
    select phone, instagram, orders_closed, orders_closed_until, orders_closed_message, seeded
    from site_settings where id = 1
  `;
	const contentRows = await sql`
    select key, value from site_content
  `;
	const categoryRows = includeHidden ? await sql`
        select id, name, slug, description, image, visible, sort_order
        from categories order by sort_order asc, id asc
      ` : await sql`
        select id, name, slug, description, image, visible, sort_order
        from categories where visible = true order by sort_order asc, id asc
      `;
	const productRows = includeHidden ? await sql`
        select id, category_id, name, description, price, unit, image, badge, visible, sort_order
        from products order by sort_order asc, id asc
      ` : await sql`
        select id, category_id, name, description, price, unit, image, badge, visible, sort_order
        from products where visible = true order by sort_order asc, id asc
      `;
	const content = {};
	for (const row of contentRows) content[row.key] = row.value;
	return {
		settings: settingsRows[0] ? mapSettings(settingsRows[0]) : {
			phone: "+989129564648",
			instagram: "fingerfood.nazli",
			ordersClosed: false,
			ordersClosedUntil: null,
			ordersClosedMessage: ""
		},
		content,
		categories: categoryRows.map(mapCategory),
		products: productRows.map(mapProduct)
	};
}
var fetchPublicSite_createServerFn_handler = createServerRpc({
	id: "907cd7713e3f46fcb57e599e63c819799a1049b8e2f2760025d100fe707d7af8",
	name: "fetchPublicSite",
	filename: "src/lib/cms/api.ts"
}, (opts) => fetchPublicSite.__executeServer(opts));
var fetchPublicSite = createServerFn({ method: "GET" }).handler(fetchPublicSite_createServerFn_handler, async () => {
	return loadSite(await getDb(), false);
});
var fetchAdminSite_createServerFn_handler = createServerRpc({
	id: "951cc198528b91c3c528e2617a84be965e0283f50cbf56084cbce96fd1974286",
	name: "fetchAdminSite",
	filename: "src/lib/cms/api.ts"
}, (opts) => fetchAdminSite.__executeServer(opts));
var fetchAdminSite = createServerFn({ method: "POST" }).validator((d) => object({ token: string() }).parse(d)).handler(fetchAdminSite_createServerFn_handler, async ({ data }) => {
	const sql = await getDb();
	await requireAdmin(sql, data.token);
	return loadSite(sql, true);
});
var loginAdmin_createServerFn_handler = createServerRpc({
	id: "c3b725f2f99ee1aa5fd01c61f38425f6a2cf50faf61fc94bb242a2d6370dc102",
	name: "loginAdmin",
	filename: "src/lib/cms/api.ts"
}, (opts) => loginAdmin.__executeServer(opts));
var loginAdmin = createServerFn({ method: "POST" }).validator((d) => object({ pin: string().min(1) }).parse(d)).handler(loginAdmin_createServerFn_handler, async ({ data }) => {
	const sql = await getDb();
	await ensureSeed(sql);
	const rows = await sql`select admin_pin from site_settings where id = 1`;
	if (!rows[0] || data.pin !== rows[0].admin_pin) throw new Error("رمز ورود نادرست است");
	const { randomBytes } = await import("node:crypto");
	const token = randomBytes(24).toString("hex");
	await sql`insert into admin_sessions (token) values (${token})`;
	return { token };
});
var logoutAdmin_createServerFn_handler = createServerRpc({
	id: "4730c7d373e8f6dcccb6f2cb017607b33d1302030f10d2a2670eed8145088590",
	name: "logoutAdmin",
	filename: "src/lib/cms/api.ts"
}, (opts) => logoutAdmin.__executeServer(opts));
var logoutAdmin = createServerFn({ method: "POST" }).validator((d) => object({ token: string() }).parse(d)).handler(logoutAdmin_createServerFn_handler, async ({ data }) => {
	await (await getDb())`delete from admin_sessions where token = ${data.token}`;
	return { ok: true };
});
var saveContent_createServerFn_handler = createServerRpc({
	id: "f1eb09f35577ffe12110eb6dcfe991ab596c14ef4c310ebe017a0cc768a322a0",
	name: "saveContent",
	filename: "src/lib/cms/api.ts"
}, (opts) => saveContent.__executeServer(opts));
var saveContent = createServerFn({ method: "POST" }).validator((d) => object({
	token: string(),
	entries: record(string(), string())
}).parse(d)).handler(saveContent_createServerFn_handler, async ({ data }) => {
	const sql = await getDb();
	await requireAdmin(sql, data.token);
	for (const [key, value] of Object.entries(data.entries)) await sql`
        insert into site_content (key, value, kind)
        values (${key}, ${value}, 'text')
        on conflict (key) do update set value = excluded.value
      `;
	return { ok: true };
});
var saveSettings_createServerFn_handler = createServerRpc({
	id: "c404a16d9136556fbb8a5091533fa47f3101af1ae6af2aa7f329d5fde3d62eaa",
	name: "saveSettings",
	filename: "src/lib/cms/api.ts"
}, (opts) => saveSettings.__executeServer(opts));
var saveSettings = createServerFn({ method: "POST" }).validator((d) => object({
	token: string(),
	phone: string().min(4),
	instagram: string().min(1),
	ordersClosed: boolean(),
	ordersClosedUntil: string().nullable(),
	ordersClosedMessage: string()
}).parse(d)).handler(saveSettings_createServerFn_handler, async ({ data }) => {
	const sql = await getDb();
	await requireAdmin(sql, data.token);
	const until = data.ordersClosedUntil && data.ordersClosedUntil.length > 0 ? data.ordersClosedUntil : null;
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
var changePin_createServerFn_handler = createServerRpc({
	id: "f8379665f353f5210d9684c3142b66d18f5f44406db487827e56b1f6a48dc502",
	name: "changePin",
	filename: "src/lib/cms/api.ts"
}, (opts) => changePin.__executeServer(opts));
var changePin = createServerFn({ method: "POST" }).validator((d) => object({
	token: string(),
	currentPin: string().min(1),
	nextPin: string().min(3)
}).parse(d)).handler(changePin_createServerFn_handler, async ({ data }) => {
	const sql = await getDb();
	await requireAdmin(sql, data.token);
	const rows = await sql`select admin_pin from site_settings where id = 1`;
	if (!rows[0] || data.currentPin !== rows[0].admin_pin) throw new Error("رمز فعلی نادرست است");
	await sql`update site_settings set admin_pin = ${data.nextPin} where id = 1`;
	return { ok: true };
});
var categoryInput = object({
	token: string(),
	id: number().optional(),
	name: string().min(1),
	slug: string().min(1),
	description: string(),
	image: string(),
	visible: boolean(),
	sortOrder: number()
});
var saveCategory_createServerFn_handler = createServerRpc({
	id: "0a42fc408bf691bfef804d9ff2a3641a2ca173d251f765f6e896d3db959d48f5",
	name: "saveCategory",
	filename: "src/lib/cms/api.ts"
}, (opts) => saveCategory.__executeServer(opts));
var saveCategory = createServerFn({ method: "POST" }).validator((d) => categoryInput.parse(d)).handler(saveCategory_createServerFn_handler, async ({ data }) => {
	const sql = await getDb();
	await requireAdmin(sql, data.token);
	if (data.id) {
		const rows = await sql`
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
	return mapCategory((await sql`
      insert into categories (name, slug, description, image, visible, sort_order)
      values (${data.name}, ${data.slug}, ${data.description}, ${data.image}, ${data.visible}, ${data.sortOrder})
      returning id, name, slug, description, image, visible, sort_order
    `)[0]);
});
var deleteCategory_createServerFn_handler = createServerRpc({
	id: "f55eaa95289b8f1b330c83eb3e5932f109b2b16f990788889398d9018280894d",
	name: "deleteCategory",
	filename: "src/lib/cms/api.ts"
}, (opts) => deleteCategory.__executeServer(opts));
var deleteCategory = createServerFn({ method: "POST" }).validator((d) => object({
	token: string(),
	id: number()
}).parse(d)).handler(deleteCategory_createServerFn_handler, async ({ data }) => {
	const sql = await getDb();
	await requireAdmin(sql, data.token);
	await sql`delete from categories where id = ${data.id}`;
	return { ok: true };
});
var productInput = object({
	token: string(),
	id: number().optional(),
	categoryId: number(),
	name: string().min(1),
	description: string(),
	price: number().int().nonnegative(),
	unit: string().min(1),
	image: string(),
	badge: string(),
	visible: boolean(),
	sortOrder: number()
});
var saveProduct_createServerFn_handler = createServerRpc({
	id: "c379b68d60b7249485dc8aa2509312d8567ba94bb7e74177761b445bc10b1f77",
	name: "saveProduct",
	filename: "src/lib/cms/api.ts"
}, (opts) => saveProduct.__executeServer(opts));
var saveProduct = createServerFn({ method: "POST" }).validator((d) => productInput.parse(d)).handler(saveProduct_createServerFn_handler, async ({ data }) => {
	const sql = await getDb();
	await requireAdmin(sql, data.token);
	if (data.id) {
		const rows = await sql`
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
	return mapProduct((await sql`
      insert into products
        (category_id, name, description, price, unit, image, badge, visible, sort_order)
      values
        (${data.categoryId}, ${data.name}, ${data.description}, ${data.price}, ${data.unit}, ${data.image}, ${data.badge}, ${data.visible}, ${data.sortOrder})
      returning id, category_id, name, description, price, unit, image, badge, visible, sort_order
    `)[0]);
});
var deleteProduct_createServerFn_handler = createServerRpc({
	id: "9d0ed4aa0a41d4e37d5378e3c3892cfb1d23156d376093d3be2948c1a196cc8d",
	name: "deleteProduct",
	filename: "src/lib/cms/api.ts"
}, (opts) => deleteProduct.__executeServer(opts));
var deleteProduct = createServerFn({ method: "POST" }).validator((d) => object({
	token: string(),
	id: number()
}).parse(d)).handler(deleteProduct_createServerFn_handler, async ({ data }) => {
	const sql = await getDb();
	await requireAdmin(sql, data.token);
	await sql`delete from products where id = ${data.id}`;
	return { ok: true };
});
//#endregion
export { changePin_createServerFn_handler, deleteCategory_createServerFn_handler, deleteProduct_createServerFn_handler, fetchAdminSite_createServerFn_handler, fetchPublicSite_createServerFn_handler, loginAdmin_createServerFn_handler, logoutAdmin_createServerFn_handler, saveCategory_createServerFn_handler, saveContent_createServerFn_handler, saveProduct_createServerFn_handler, saveSettings_createServerFn_handler };
