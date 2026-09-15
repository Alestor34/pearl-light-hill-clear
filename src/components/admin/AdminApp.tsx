import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import {
  changePin,
  deleteCategory,
  deleteProduct,
  fetchAdminSite,
  loginAdmin,
  logoutAdmin,
  saveCategory,
  saveContent,
  saveProduct,
  saveSettings,
} from "@/lib/cms/api";
import { CONTENT_MODULES } from "@/lib/cms/defaults";
import { formatFaDate, formatToman } from "@/lib/cms/format";
import type { Category, Product, SiteData } from "@/lib/cms/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { BrandMark } from "@/components/site/BrandMark";
import { ImageField } from "./ImageField";

const TOKEN_KEY = "nazli-admin-token";

type Tab =
  | "modules"
  | "products"
  | "categories"
  | "contact"
  | "orders"
  | "pin";

const TABS: { id: Tab; label: string }[] = [
  { id: "modules", label: "متن و تصویر صفحات" },
  { id: "products", label: "محصولات" },
  { id: "categories", label: "دسته‌ها" },
  { id: "contact", label: "تماس و اینستاگرام" },
  { id: "orders", label: "وضعیت سفارش" },
  { id: "pin", label: "رمز ورود" },
];

function readToken(): string {
  try {
    return localStorage.getItem(TOKEN_KEY) ?? "";
  } catch {
    return "";
  }
}

function writeToken(token: string) {
  try {
    if (token) localStorage.setItem(TOKEN_KEY, token);
    else localStorage.removeItem(TOKEN_KEY);
  } catch {
    /* ignore */
  }
}

function errMsg(e: unknown): string {
  if (e instanceof Error && e.message) return e.message;
  return "خطایی رخ داد";
}

export function AdminApp() {
  const [token, setToken] = useState("");
  const [pin, setPin] = useState("");
  const [data, setData] = useState<SiteData | null>(null);
  const [tab, setTab] = useState<Tab>("modules");
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);

  async function boot(existing: string) {
    setLoading(true);
    try {
      const site = await fetchAdminSite({ data: { token: existing } });
      setToken(existing);
      setData(site);
    } catch {
      writeToken("");
      setToken("");
      setData(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void boot(readToken());
  }, []);

  async function refresh(nextToken = token) {
    const site = await fetchAdminSite({ data: { token: nextToken } });
    setData(site);
  }

  if (loading) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-cream text-muted">
        در حال بارگذاری پنل…
      </div>
    );
  }

  if (!token || !data) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-cream px-4">
        <form
          className="w-full max-w-sm rounded-xl bg-card p-6 shadow-[var(--shadow-card)]"
          onSubmit={async (e) => {
            e.preventDefault();
            setBusy(true);
            try {
              const res = await loginAdmin({ data: { pin } });
              writeToken(res.token);
              setToken(res.token);
              await boot(res.token);
              toast.success("خوش آمدید");
            } catch (err) {
              toast.error(errMsg(err));
            } finally {
              setBusy(false);
            }
          }}
        >
          <BrandMark map={{ "brand.name": "نازلی", "brand.tagline": "پنل مدیریت" }} />
          <h1 className="mt-5 text-xl font-semibold">ورود به پنل</h1>
          <p className="mt-1 text-sm text-muted">رمز ورود را وارد کنید.</p>
          <Label className="mt-5 block">رمز</Label>
          <Input
            className="mt-1.5"
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            autoFocus
          />
          <Button className="mt-5 w-full" disabled={busy} type="submit">
            ورود
          </Button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-dvh bg-cream">
      <div className="flex min-h-dvh flex-col lg:grid lg:grid-cols-[240px_1fr]">
        <aside className="border-b border-ink/10 bg-ink text-cream lg:border-b-0 lg:border-l">
          <div className="px-4 py-5">
            <BrandMark map={data.content} invert compact />
            <p className="mt-3 text-xs text-cream/60">پنل مدیریت سایت</p>
          </div>
          <nav className="flex gap-1 overflow-x-auto px-2 pb-3 lg:flex-col lg:overflow-visible">
            {TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={
                  tab === t.id
                    ? "h-11 shrink-0 rounded-md bg-paprika px-3 text-sm font-medium text-primary-foreground"
                    : "h-11 shrink-0 rounded-md px-3 text-sm text-cream/80 hover:bg-white/5"
                }
              >
                {t.label}
              </button>
            ))}
          </nav>
          <div className="hidden flex-col gap-2 px-3 pb-6 lg:flex">
            <Link
              to="/"
              className="rounded-md px-3 py-2 text-sm text-cream/70 hover:text-cream"
            >
              مشاهده سایت
            </Link>
            <button
              type="button"
              className="rounded-md px-3 py-2 text-right text-sm text-cream/70 hover:text-cream"
              onClick={async () => {
                await logoutAdmin({ data: { token } });
                writeToken("");
                setToken("");
                setData(null);
              }}
            >
              خروج
            </button>
          </div>
        </aside>
        <div className="min-w-0">
          <div className="flex items-center justify-between border-b border-line px-4 py-3 lg:hidden">
            <Link to="/" className="text-sm text-herb">
              مشاهده سایت
            </Link>
            <button
              type="button"
              className="text-sm text-muted"
              onClick={async () => {
                await logoutAdmin({ data: { token } });
                writeToken("");
                setToken("");
                setData(null);
              }}
            >
              خروج
            </button>
          </div>
          <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6">
            {tab === "modules" ? (
              <ModulesPanel
                data={data}
                token={token}
                busy={busy}
                setBusy={setBusy}
                onSaved={refresh}
              />
            ) : null}
            {tab === "products" ? (
              <ProductsPanel
                data={data}
                token={token}
                busy={busy}
                setBusy={setBusy}
                onSaved={refresh}
              />
            ) : null}
            {tab === "categories" ? (
              <CategoriesPanel
                data={data}
                token={token}
                busy={busy}
                setBusy={setBusy}
                onSaved={refresh}
              />
            ) : null}
            {tab === "contact" ? (
              <ContactPanel
                data={data}
                token={token}
                busy={busy}
                setBusy={setBusy}
                onSaved={refresh}
              />
            ) : null}
            {tab === "orders" ? (
              <OrdersPanel
                data={data}
                token={token}
                busy={busy}
                setBusy={setBusy}
                onSaved={refresh}
              />
            ) : null}
            {tab === "pin" ? (
              <PinPanel token={token} busy={busy} setBusy={setBusy} />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

function ModulesPanel({
  data,
  token,
  busy,
  setBusy,
  onSaved,
}: {
  data: SiteData;
  token: string;
  busy: boolean;
  setBusy: (v: boolean) => void;
  onSaved: () => Promise<void>;
}) {
  const [draft, setDraft] = useState<Record<string, string>>(data.content);
  const [openId, setOpenId] = useState(CONTENT_MODULES[0]?.id ?? "brand");

  useEffect(() => {
    setDraft(data.content);
  }, [data.content]);

  return (
    <div className="space-y-4">
      <header>
        <h1 className="text-2xl font-semibold">ماژول‌های سایت</h1>
        <p className="mt-1 text-sm text-muted">
          هر بخش صفحهٔ اصلی یک ماژول است. متن و تصویر را همین‌جا عوض کنید.
        </p>
      </header>
      {CONTENT_MODULES.map((mod) => (
        <section key={mod.id} className="overflow-hidden rounded-xl bg-card shadow-[var(--shadow-card)]">
          <button
            type="button"
            className="flex w-full items-center justify-between px-4 py-4 text-right"
            onClick={() => setOpenId((id) => (id === mod.id ? "" : mod.id))}
          >
            <span>
              <span className="block font-semibold">{mod.title}</span>
              <span className="text-xs text-muted">{mod.hint}</span>
            </span>
            <span className="text-muted">{openId === mod.id ? "—" : "+"}</span>
          </button>
          {openId === mod.id ? (
            <form
              className="space-y-4 border-t border-line px-4 py-4"
              onSubmit={async (e) => {
                e.preventDefault();
                const entries: Record<string, string> = {};
                for (const f of mod.fields) entries[f.key] = draft[f.key] ?? "";
                setBusy(true);
                try {
                  await saveContent({ data: { token, entries } });
                  await onSaved();
                  toast.success("ذخیره شد");
                } catch (err) {
                  toast.error(errMsg(err));
                } finally {
                  setBusy(false);
                }
              }}
            >
              {mod.fields.map((f) =>
                f.kind === "image" ? (
                  <ImageField
                    key={f.key}
                    label={f.label}
                    value={draft[f.key] ?? ""}
                    onChange={(v) => setDraft((d) => ({ ...d, [f.key]: v }))}
                  />
                ) : f.kind === "longtext" ? (
                  <div key={f.key} className="space-y-1.5">
                    <Label>{f.label}</Label>
                    <Textarea
                      value={draft[f.key] ?? ""}
                      onChange={(e) =>
                        setDraft((d) => ({ ...d, [f.key]: e.target.value }))
                      }
                    />
                  </div>
                ) : (
                  <div key={f.key} className="space-y-1.5">
                    <Label>{f.label}</Label>
                    <Input
                      value={draft[f.key] ?? ""}
                      onChange={(e) =>
                        setDraft((d) => ({ ...d, [f.key]: e.target.value }))
                      }
                    />
                  </div>
                ),
              )}
              <Button type="submit" disabled={busy}>
                ذخیرهٔ این بخش
              </Button>
            </form>
          ) : null}
        </section>
      ))}
    </div>
  );
}

function emptyProduct(categories: Category[]): Omit<Product, "id"> & { id?: number } {
  return {
    categoryId: categories[0]?.id ?? 0,
    name: "",
    description: "",
    price: 0,
    unit: "۱۰ عدد",
    image: "",
    badge: "",
    visible: true,
    sortOrder: 0,
  };
}

function ProductsPanel({
  data,
  token,
  busy,
  setBusy,
  onSaved,
}: {
  data: SiteData;
  token: string;
  busy: boolean;
  setBusy: (v: boolean) => void;
  onSaved: () => Promise<void>;
}) {
  const [editing, setEditing] = useState<(Omit<Product, "id"> & { id?: number }) | null>(
    null,
  );
  const catName = useMemo(
    () => Object.fromEntries(data.categories.map((c) => [c.id, c.name])),
    [data.categories],
  );

  return (
    <div className="space-y-4">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold">محصولات</h1>
          <p className="mt-1 text-sm text-muted">افزودن، ویرایش، مخفی کردن.</p>
        </div>
        <Button
          onClick={() => setEditing(emptyProduct(data.categories))}
          disabled={data.categories.length === 0}
        >
          محصول جدید
        </Button>
      </header>
      {data.categories.length === 0 ? (
        <p className="text-sm text-muted">اول یک دسته بسازید.</p>
      ) : null}
      <ul className="space-y-2">
        {data.products.map((p) => (
          <li
            key={p.id}
            className="flex items-center gap-3 rounded-lg bg-card p-3 shadow-[var(--shadow-card)]"
          >
            {p.image ? (
              <img src={p.image} alt="" className="size-14 rounded-sm object-cover" />
            ) : (
              <div className="size-14 rounded-sm bg-cream-2" />
            )}
            <div className="min-w-0 flex-1">
              <p className="truncate font-medium">
                {p.name}
                {!p.visible ? (
                  <span className="mr-2 text-xs text-chili">مخفی</span>
                ) : null}
              </p>
              <p className="text-xs text-muted">
                {catName[p.categoryId] ?? "—"} · {formatToman(p.price)} · {p.unit}
              </p>
            </div>
            <Button size="sm" variant="outline" onClick={() => setEditing(p)}>
              ویرایش
            </Button>
          </li>
        ))}
      </ul>
      {editing ? (
        <ProductForm
          categories={data.categories}
          value={editing}
          busy={busy}
          onCancel={() => setEditing(null)}
          onDelete={
            editing.id
              ? async () => {
                  if (!confirm("این محصول حذف شود؟")) return;
                  setBusy(true);
                  try {
                    await deleteProduct({ data: { token, id: editing.id! } });
                    setEditing(null);
                    await onSaved();
                    toast.success("حذف شد");
                  } catch (err) {
                    toast.error(errMsg(err));
                  } finally {
                    setBusy(false);
                  }
                }
              : undefined
          }
          onSave={async (val) => {
            setBusy(true);
            try {
              await saveProduct({
                data: {
                  token,
                  id: val.id,
                  categoryId: val.categoryId,
                  name: val.name,
                  description: val.description,
                  price: val.price,
                  unit: val.unit,
                  image: val.image,
                  badge: val.badge,
                  visible: val.visible,
                  sortOrder: val.sortOrder,
                },
              });
              setEditing(null);
              await onSaved();
              toast.success("ذخیره شد");
            } catch (err) {
              toast.error(errMsg(err));
            } finally {
              setBusy(false);
            }
          }}
        />
      ) : null}
    </div>
  );
}

function ProductForm({
  categories,
  value,
  busy,
  onSave,
  onCancel,
  onDelete,
}: {
  categories: Category[];
  value: Omit<Product, "id"> & { id?: number };
  busy: boolean;
  onSave: (v: Omit<Product, "id"> & { id?: number }) => Promise<void>;
  onCancel: () => void;
  onDelete?: () => Promise<void>;
}) {
  const [form, setForm] = useState(value);
  useEffect(() => setForm(value), [value]);

  return (
    <form
      className="space-y-4 rounded-xl bg-card p-4 shadow-[var(--shadow-card)]"
      onSubmit={(e) => {
        e.preventDefault();
        void onSave(form);
      }}
    >
      <h2 className="font-semibold">{form.id ? "ویرایش محصول" : "محصول جدید"}</h2>
      <div className="space-y-1.5">
        <Label>نام</Label>
        <Input
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </div>
      <div className="space-y-1.5">
        <Label>توضیح</Label>
        <Textarea
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label>قیمت (تومان)</Label>
          <Input
            type="number"
            min={0}
            required
            value={form.price}
            onChange={(e) => setForm({ ...form, price: Number(e.target.value) || 0 })}
          />
        </div>
        <div className="space-y-1.5">
          <Label>واحد</Label>
          <Input
            value={form.unit}
            onChange={(e) => setForm({ ...form, unit: e.target.value })}
          />
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label>دسته</Label>
          <select
            className="h-11 w-full rounded-md border border-line bg-card px-3 text-sm"
            value={form.categoryId}
            onChange={(e) => setForm({ ...form, categoryId: Number(e.target.value) })}
          >
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
                {c.visible ? "" : " (مخفی)"}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-1.5">
          <Label>برچسب (اختیاری)</Label>
          <Input
            value={form.badge}
            onChange={(e) => setForm({ ...form, badge: e.target.value })}
            placeholder="پرفروش"
          />
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label>ترتیب نمایش</Label>
          <Input
            type="number"
            value={form.sortOrder}
            onChange={(e) => setForm({ ...form, sortOrder: Number(e.target.value) || 0 })}
          />
        </div>
        <label className="flex items-center justify-between gap-3 rounded-md border border-line px-3">
          <span className="text-sm">نمایش در سایت</span>
          <Switch
            dir="ltr"
            checked={form.visible}
            onCheckedChange={(v) => setForm({ ...form, visible: v })}
          />
        </label>
      </div>
      <ImageField
        label="تصویر محصول"
        value={form.image}
        onChange={(image) => setForm({ ...form, image })}
      />
      <div className="flex flex-wrap gap-2">
        <Button type="submit" disabled={busy}>
          ذخیره
        </Button>
        <Button type="button" variant="outline" onClick={onCancel}>
          انصراف
        </Button>
        {onDelete ? (
          <Button type="button" variant="chili" disabled={busy} onClick={() => void onDelete()}>
            حذف
          </Button>
        ) : null}
      </div>
    </form>
  );
}

function CategoriesPanel({
  data,
  token,
  busy,
  setBusy,
  onSaved,
}: {
  data: SiteData;
  token: string;
  busy: boolean;
  setBusy: (v: boolean) => void;
  onSaved: () => Promise<void>;
}) {
  const [editing, setEditing] = useState<(Omit<Category, "id"> & { id?: number }) | null>(
    null,
  );

  return (
    <div className="space-y-4">
      <header className="flex items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold">دسته‌ها</h1>
          <p className="mt-1 text-sm text-muted">ساخت، مخفی کردن یا ویرایش دسته.</p>
        </div>
        <Button
          onClick={() =>
            setEditing({
              name: "",
              slug: `cat-${Date.now().toString(36)}`,
              description: "",
              image: "",
              visible: true,
              sortOrder: data.categories.length + 1,
            })
          }
        >
          دستهٔ جدید
        </Button>
      </header>
      <ul className="space-y-2">
        {data.categories.map((c) => (
          <li
            key={c.id}
            className="flex items-center gap-3 rounded-lg bg-card p-3 shadow-[var(--shadow-card)]"
          >
            <div className="min-w-0 flex-1">
              <p className="font-medium">
                {c.name}
                {!c.visible ? <span className="mr-2 text-xs text-chili">مخفی</span> : null}
              </p>
              <p className="truncate text-xs text-muted">{c.description}</p>
            </div>
            <Button size="sm" variant="outline" onClick={() => setEditing(c)}>
              ویرایش
            </Button>
          </li>
        ))}
      </ul>
      {editing ? (
        <CategoryForm
          value={editing}
          busy={busy}
          onCancel={() => setEditing(null)}
          onDelete={
            editing.id
              ? async () => {
                  if (!confirm("این دسته و محصولاتش حذف شوند؟")) return;
                  setBusy(true);
                  try {
                    await deleteCategory({ data: { token, id: editing.id! } });
                    setEditing(null);
                    await onSaved();
                    toast.success("حذف شد");
                  } catch (err) {
                    toast.error(errMsg(err));
                  } finally {
                    setBusy(false);
                  }
                }
              : undefined
          }
          onSave={async (val) => {
            setBusy(true);
            try {
              await saveCategory({
                data: {
                  token,
                  id: val.id,
                  name: val.name,
                  slug: val.slug,
                  description: val.description,
                  image: val.image,
                  visible: val.visible,
                  sortOrder: val.sortOrder,
                },
              });
              setEditing(null);
              await onSaved();
              toast.success("ذخیره شد");
            } catch (err) {
              toast.error(errMsg(err));
            } finally {
              setBusy(false);
            }
          }}
        />
      ) : null}
    </div>
  );
}

function CategoryForm({
  value,
  busy,
  onSave,
  onCancel,
  onDelete,
}: {
  value: Omit<Category, "id"> & { id?: number };
  busy: boolean;
  onSave: (v: Omit<Category, "id"> & { id?: number }) => Promise<void>;
  onCancel: () => void;
  onDelete?: () => Promise<void>;
}) {
  const [form, setForm] = useState(value);
  useEffect(() => setForm(value), [value]);

  return (
    <form
      className="space-y-4 rounded-xl bg-card p-4 shadow-[var(--shadow-card)]"
      onSubmit={(e) => {
        e.preventDefault();
        void onSave(form);
      }}
    >
      <h2 className="font-semibold">{form.id ? "ویرایش دسته" : "دستهٔ جدید"}</h2>
      <div className="space-y-1.5">
        <Label>نام</Label>
        <Input
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </div>
      <div className="space-y-1.5">
        <Label>شناسه لاتین (slug)</Label>
        <Input
          required
          dir="ltr"
          value={form.slug}
          onChange={(e) => setForm({ ...form, slug: e.target.value })}
        />
      </div>
      <div className="space-y-1.5">
        <Label>توضیح</Label>
        <Textarea
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label>ترتیب</Label>
          <Input
            type="number"
            value={form.sortOrder}
            onChange={(e) => setForm({ ...form, sortOrder: Number(e.target.value) || 0 })}
          />
        </div>
        <label className="flex items-center justify-between gap-3 rounded-md border border-line px-3">
          <span className="text-sm">نمایش در سایت</span>
          <Switch
            dir="ltr"
            checked={form.visible}
            onCheckedChange={(v) => setForm({ ...form, visible: v })}
          />
        </label>
      </div>
      <ImageField
        label="تصویر دسته"
        value={form.image}
        onChange={(image) => setForm({ ...form, image })}
      />
      <div className="flex flex-wrap gap-2">
        <Button type="submit" disabled={busy}>
          ذخیره
        </Button>
        <Button type="button" variant="outline" onClick={onCancel}>
          انصراف
        </Button>
        {onDelete ? (
          <Button type="button" variant="chili" disabled={busy} onClick={() => void onDelete()}>
            حذف
          </Button>
        ) : null}
      </div>
    </form>
  );
}

function ContactPanel({
  data,
  token,
  busy,
  setBusy,
  onSaved,
}: {
  data: SiteData;
  token: string;
  busy: boolean;
  setBusy: (v: boolean) => void;
  onSaved: () => Promise<void>;
}) {
  const [phone, setPhone] = useState(data.settings.phone);
  const [instagram, setInstagram] = useState(data.settings.instagram);

  useEffect(() => {
    setPhone(data.settings.phone);
    setInstagram(data.settings.instagram);
  }, [data.settings.phone, data.settings.instagram]);

  return (
    <form
      className="space-y-4"
      onSubmit={async (e) => {
        e.preventDefault();
        setBusy(true);
        try {
          await saveSettings({
            data: {
              token,
              phone,
              instagram: instagram.replace(/^@/, ""),
              ordersClosed: data.settings.ordersClosed,
              ordersClosedUntil: data.settings.ordersClosedUntil,
              ordersClosedMessage: data.settings.ordersClosedMessage,
            },
          });
          await onSaved();
          toast.success("ذخیره شد");
        } catch (err) {
          toast.error(errMsg(err));
        } finally {
          setBusy(false);
        }
      }}
    >
      <h1 className="text-2xl font-semibold">تماس و اینستاگرام</h1>
      <p className="text-sm text-muted">
        این دو مقدار روی دکمهٔ واتساپ، تماس و لینک اینستاگرام کل سایت اثر می‌گذارند.
      </p>
      <div className="space-y-1.5">
        <Label>شماره تلفن</Label>
        <Input dir="ltr" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div className="space-y-1.5">
        <Label>آی‌دی اینستاگرام (بدون @)</Label>
        <Input
          dir="ltr"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />
      </div>
      <Button type="submit" disabled={busy}>
        ذخیره
      </Button>
    </form>
  );
}

function OrdersPanel({
  data,
  token,
  busy,
  setBusy,
  onSaved,
}: {
  data: SiteData;
  token: string;
  busy: boolean;
  setBusy: (v: boolean) => void;
  onSaved: () => Promise<void>;
}) {
  const s = data.settings;
  const [closed, setClosed] = useState(s.ordersClosed);
  const [until, setUntil] = useState(s.ordersClosedUntil ?? "");
  const [message, setMessage] = useState(s.ordersClosedMessage);

  useEffect(() => {
    setClosed(s.ordersClosed);
    setUntil(s.ordersClosedUntil ?? "");
    setMessage(s.ordersClosedMessage);
  }, [s]);

  return (
    <form
      className="space-y-4"
      onSubmit={async (e) => {
        e.preventDefault();
        setBusy(true);
        try {
          await saveSettings({
            data: {
              token,
              phone: s.phone,
              instagram: s.instagram,
              ordersClosed: closed,
              ordersClosedUntil: until || null,
              ordersClosedMessage: message,
            },
          });
          await onSaved();
          toast.success("وضعیت سفارش ذخیره شد");
        } catch (err) {
          toast.error(errMsg(err));
        } finally {
          setBusy(false);
        }
      }}
    >
      <h1 className="text-2xl font-semibold">وضعیت سفارش</h1>
      <p className="text-sm text-muted">
        اگر سفارش‌ها بسته باشد، به مشتری یک پاپ‌آپ نشان داده می‌شود تا تاریخ مشخص.
      </p>
      <label className="flex items-center justify-between gap-3 rounded-xl bg-card px-4 py-4 shadow-[var(--shadow-card)]">
        <span>
          <span className="block font-medium">سفارش‌ها بسته است</span>
          <span className="text-xs text-muted">پاپ‌آپ برای بازدیدکننده‌ها</span>
        </span>
        <Switch dir="ltr" checked={closed} onCheckedChange={setClosed} />
      </label>
      <div className="space-y-1.5">
        <Label>باز شدن از تاریخ</Label>
        <Input type="date" dir="ltr" value={until} onChange={(e) => setUntil(e.target.value)} />
        {until ? (
          <p className="text-xs text-muted">تا {formatFaDate(until)} به مشتری نشان داده می‌شود.</p>
        ) : (
          <p className="text-xs text-muted">اگر تاریخ خالی باشد، تا اطلاع بعدی بسته می‌ماند.</p>
        )}
      </div>
      <div className="space-y-1.5">
        <Label>متن پاپ‌آپ</Label>
        <Textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      </div>
      <Button type="submit" disabled={busy}>
        ذخیره
      </Button>
    </form>
  );
}

function PinPanel({
  token,
  busy,
  setBusy,
}: {
  token: string;
  busy: boolean;
  setBusy: (v: boolean) => void;
}) {
  const [currentPin, setCurrent] = useState("");
  const [nextPin, setNext] = useState("");

  return (
    <form
      className="space-y-4"
      onSubmit={async (e) => {
        e.preventDefault();
        setBusy(true);
        try {
          await changePin({ data: { token, currentPin, nextPin } });
          setCurrent("");
          setNext("");
          toast.success("رمز عوض شد");
        } catch (err) {
          toast.error(errMsg(err));
        } finally {
          setBusy(false);
        }
      }}
    >
      <h1 className="text-2xl font-semibold">رمز ورود پنل</h1>
      <div className="space-y-1.5">
        <Label>رمز فعلی</Label>
        <Input
          type="password"
          value={currentPin}
          onChange={(e) => setCurrent(e.target.value)}
        />
      </div>
      <div className="space-y-1.5">
        <Label>رمز جدید (حداقل ۳ کاراکتر)</Label>
        <Input type="password" value={nextPin} onChange={(e) => setNext(e.target.value)} />
      </div>
      <Button type="submit" disabled={busy}>
        تغییر رمز
      </Button>
    </form>
  );
}
