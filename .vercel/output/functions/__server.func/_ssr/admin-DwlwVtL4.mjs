import { o as __toESM } from "../_runtime.mjs";
import { t as CONTENT_MODULES } from "./defaults-LosX1biD.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { c as saveCategory, d as saveSettings, i as fetchAdminSite, l as saveContent, n as deleteCategory, o as loginAdmin, r as deleteProduct, s as logoutAdmin, t as changePin, u as saveProduct } from "./api-DVDfD253.mjs";
import { a as formatFaDate, n as Button, o as formatToman, r as cn, t as BrandMark } from "./BrandMark-DrmocjKI.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/@radix-ui/react-switch+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-DwlwVtL4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		"data-slot": "input",
		className: cn("flex h-11 w-full rounded-md border border-line bg-card px-3 text-sm text-ink", "placeholder:text-muted", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paprika/40", "disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		"data-slot": "label",
		className: cn("text-sm font-medium text-ink", className),
		...props
	});
}
function Switch({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
		dir: "ltr",
		"data-slot": "switch",
		className: cn("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border border-ink/10 transition-colors", "data-[state=checked]:bg-herb data-[state=unchecked]:bg-cream-3", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paprika/40", "disabled:cursor-not-allowed disabled:opacity-50", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, { className: cn("pointer-events-none block size-5 rounded-full bg-card shadow-sm transition-transform", "data-[state=checked]:translate-x-[22px] data-[state=unchecked]:translate-x-0.5") })
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		"data-slot": "textarea",
		className: cn("flex min-h-28 w-full rounded-md border border-line bg-card px-3 py-2 text-sm text-ink", "placeholder:text-muted", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paprika/40", "disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
async function fileToJpeg(file) {
	const bitmap = await createImageBitmap(file);
	const scale = Math.min(1, 1400 / Math.max(bitmap.width, bitmap.height));
	const canvas = document.createElement("canvas");
	canvas.width = Math.max(1, Math.round(bitmap.width * scale));
	canvas.height = Math.max(1, Math.round(bitmap.height * scale));
	const ctx = canvas.getContext("2d");
	if (!ctx) throw new Error("canvas");
	ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
	return canvas.toDataURL("image/jpeg", .78);
}
function ImageField({ label, value, onChange }) {
	const ref = (0, import_react.useRef)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }),
			value ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: value,
				alt: "",
				className: "h-28 w-full rounded-md object-cover outline outline-1 -outline-offset-1 outline-ink/10"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-28 items-center justify-center rounded-md bg-cream-2 text-xs text-muted",
				children: "تصویری انتخاب نشده"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value: value.startsWith("data:") ? "" : value,
				placeholder: "آدرس تصویر یا بارگذاری فایل",
				onChange: (e) => onChange(e.target.value)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "h-10 rounded-md border border-line bg-card px-3 text-xs font-medium",
					onClick: () => ref.current?.click(),
					disabled: busy,
					children: busy ? "در حال آماده‌سازی…" : "بارگذاری از دستگاه"
				}), value ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "h-10 rounded-md px-3 text-xs text-chili",
					onClick: () => onChange(""),
					children: "حذف تصویر"
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref,
				type: "file",
				accept: "image/*",
				className: "hidden",
				onChange: async (e) => {
					const file = e.target.files?.[0];
					e.target.value = "";
					if (!file) return;
					setBusy(true);
					try {
						onChange(await fileToJpeg(file));
					} finally {
						setBusy(false);
					}
				}
			})
		]
	});
}
var TOKEN_KEY = "nazli-admin-token";
var TABS = [
	{
		id: "modules",
		label: "متن و تصویر صفحات"
	},
	{
		id: "products",
		label: "محصولات"
	},
	{
		id: "categories",
		label: "دسته‌ها"
	},
	{
		id: "contact",
		label: "تماس و اینستاگرام"
	},
	{
		id: "orders",
		label: "وضعیت سفارش"
	},
	{
		id: "pin",
		label: "رمز ورود"
	}
];
function readToken() {
	try {
		return localStorage.getItem(TOKEN_KEY) ?? "";
	} catch {
		return "";
	}
}
function writeToken(token) {
	try {
		if (token) localStorage.setItem(TOKEN_KEY, token);
		else localStorage.removeItem(TOKEN_KEY);
	} catch {}
}
function errMsg(e) {
	if (e instanceof Error && e.message) return e.message;
	return "خطایی رخ داد";
}
function AdminApp() {
	const [token, setToken] = (0, import_react.useState)("");
	const [pin, setPin] = (0, import_react.useState)("");
	const [data, setData] = (0, import_react.useState)(null);
	const [tab, setTab] = (0, import_react.useState)("modules");
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [busy, setBusy] = (0, import_react.useState)(false);
	async function boot(existing) {
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
	(0, import_react.useEffect)(() => {
		boot(readToken());
	}, []);
	async function refresh(nextToken = token) {
		const site = await fetchAdminSite({ data: { token: nextToken } });
		setData(site);
	}
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-dvh items-center justify-center bg-cream text-muted",
		children: "در حال بارگذاری پنل…"
	});
	if (!token || !data) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-dvh items-center justify-center bg-cream px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "w-full max-w-sm rounded-xl bg-card p-6 shadow-[var(--shadow-card)]",
			onSubmit: async (e) => {
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
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, { map: {
					"brand.name": "نازلی",
					"brand.tagline": "پنل مدیریت"
				} }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-5 text-xl font-semibold",
					children: "ورود به پنل"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "رمز ورود را وارد کنید."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					className: "mt-5 block",
					children: "رمز"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					className: "mt-1.5",
					type: "password",
					value: pin,
					onChange: (e) => setPin(e.target.value),
					autoFocus: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-5 w-full",
					disabled: busy,
					type: "submit",
					children: "ورود"
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-dvh bg-cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-dvh flex-col lg:grid lg:grid-cols-[240px_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "border-b border-ink/10 bg-ink text-cream lg:border-b-0 lg:border-l",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-4 py-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, {
							map: data.content,
							invert: true,
							compact: true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs text-cream/60",
							children: "پنل مدیریت سایت"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex gap-1 overflow-x-auto px-2 pb-3 lg:flex-col lg:overflow-visible",
						children: TABS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setTab(t.id),
							className: tab === t.id ? "h-11 shrink-0 rounded-md bg-paprika px-3 text-sm font-medium text-primary-foreground" : "h-11 shrink-0 rounded-md px-3 text-sm text-cream/80 hover:bg-white/5",
							children: t.label
						}, t.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden flex-col gap-2 px-3 pb-6 lg:flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "rounded-md px-3 py-2 text-sm text-cream/70 hover:text-cream",
							children: "مشاهده سایت"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "rounded-md px-3 py-2 text-right text-sm text-cream/70 hover:text-cream",
							onClick: async () => {
								await logoutAdmin({ data: { token } });
								writeToken("");
								setToken("");
								setData(null);
							},
							children: "خروج"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-line px-4 py-3 lg:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "text-sm text-herb",
						children: "مشاهده سایت"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "text-sm text-muted",
						onClick: async () => {
							await logoutAdmin({ data: { token } });
							writeToken("");
							setToken("");
							setData(null);
						},
						children: "خروج"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-4xl px-4 py-6 sm:px-6",
					children: [
						tab === "modules" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModulesPanel, {
							data,
							token,
							busy,
							setBusy,
							onSaved: refresh
						}) : null,
						tab === "products" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductsPanel, {
							data,
							token,
							busy,
							setBusy,
							onSaved: refresh
						}) : null,
						tab === "categories" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoriesPanel, {
							data,
							token,
							busy,
							setBusy,
							onSaved: refresh
						}) : null,
						tab === "contact" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactPanel, {
							data,
							token,
							busy,
							setBusy,
							onSaved: refresh
						}) : null,
						tab === "orders" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrdersPanel, {
							data,
							token,
							busy,
							setBusy,
							onSaved: refresh
						}) : null,
						tab === "pin" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PinPanel, {
							token,
							busy,
							setBusy
						}) : null
					]
				})]
			})]
		})
	});
}
function ModulesPanel({ data, token, busy, setBusy, onSaved }) {
	const [draft, setDraft] = (0, import_react.useState)(data.content);
	const [openId, setOpenId] = (0, import_react.useState)(CONTENT_MODULES[0]?.id ?? "brand");
	(0, import_react.useEffect)(() => {
		setDraft(data.content);
	}, [data.content]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-2xl font-semibold",
			children: "ماژول‌های سایت"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-muted",
			children: "هر بخش صفحهٔ اصلی یک ماژول است. متن و تصویر را همین‌جا عوض کنید."
		})] }), CONTENT_MODULES.map((mod) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "overflow-hidden rounded-xl bg-card shadow-[var(--shadow-card)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "flex w-full items-center justify-between px-4 py-4 text-right",
				onClick: () => setOpenId((id) => id === mod.id ? "" : mod.id),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block font-semibold",
					children: mod.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-muted",
					children: mod.hint
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted",
					children: openId === mod.id ? "—" : "+"
				})]
			}), openId === mod.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "space-y-4 border-t border-line px-4 py-4",
				onSubmit: async (e) => {
					e.preventDefault();
					const entries = {};
					for (const f of mod.fields) entries[f.key] = draft[f.key] ?? "";
					setBusy(true);
					try {
						await saveContent({ data: {
							token,
							entries
						} });
						await onSaved();
						toast.success("ذخیره شد");
					} catch (err) {
						toast.error(errMsg(err));
					} finally {
						setBusy(false);
					}
				},
				children: [mod.fields.map((f) => f.kind === "image" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageField, {
					label: f.label,
					value: draft[f.key] ?? "",
					onChange: (v) => setDraft((d) => ({
						...d,
						[f.key]: v
					}))
				}, f.key) : f.kind === "longtext" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: f.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						value: draft[f.key] ?? "",
						onChange: (e) => setDraft((d) => ({
							...d,
							[f.key]: e.target.value
						}))
					})]
				}, f.key) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: f.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: draft[f.key] ?? "",
						onChange: (e) => setDraft((d) => ({
							...d,
							[f.key]: e.target.value
						}))
					})]
				}, f.key)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					disabled: busy,
					children: "ذخیرهٔ این بخش"
				})]
			}) : null]
		}, mod.id))]
	});
}
function emptyProduct(categories) {
	return {
		categoryId: categories[0]?.id ?? 0,
		name: "",
		description: "",
		price: 0,
		unit: "۱۰ عدد",
		image: "",
		badge: "",
		visible: true,
		sortOrder: 0
	};
}
function ProductsPanel({ data, token, busy, setBusy, onSaved }) {
	const [editing, setEditing] = (0, import_react.useState)(null);
	const catName = (0, import_react.useMemo)(() => Object.fromEntries(data.categories.map((c) => [c.id, c.name])), [data.categories]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex flex-wrap items-end justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-semibold",
					children: "محصولات"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "افزودن، ویرایش، مخفی کردن."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => setEditing(emptyProduct(data.categories)),
					disabled: data.categories.length === 0,
					children: "محصول جدید"
				})]
			}),
			data.categories.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "اول یک دسته بسازید."
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-2",
				children: data.products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-3 rounded-lg bg-card p-3 shadow-[var(--shadow-card)]",
					children: [
						p.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: p.image,
							alt: "",
							className: "size-14 rounded-sm object-cover"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-14 rounded-sm bg-cream-2" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "truncate font-medium",
								children: [p.name, !p.visible ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mr-2 text-xs text-chili",
									children: "مخفی"
								}) : null]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted",
								children: [
									catName[p.categoryId] ?? "—",
									" · ",
									formatToman(p.price),
									" · ",
									p.unit
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "outline",
							onClick: () => setEditing(p),
							children: "ویرایش"
						})
					]
				}, p.id))
			}),
			editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductForm, {
				categories: data.categories,
				value: editing,
				busy,
				onCancel: () => setEditing(null),
				onDelete: editing.id ? async () => {
					if (!confirm("این محصول حذف شود؟")) return;
					setBusy(true);
					try {
						await deleteProduct({ data: {
							token,
							id: editing.id
						} });
						setEditing(null);
						await onSaved();
						toast.success("حذف شد");
					} catch (err) {
						toast.error(errMsg(err));
					} finally {
						setBusy(false);
					}
				} : void 0,
				onSave: async (val) => {
					setBusy(true);
					try {
						await saveProduct({ data: {
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
							sortOrder: val.sortOrder
						} });
						setEditing(null);
						await onSaved();
						toast.success("ذخیره شد");
					} catch (err) {
						toast.error(errMsg(err));
					} finally {
						setBusy(false);
					}
				}
			}) : null
		]
	});
}
function ProductForm({ categories, value, busy, onSave, onCancel, onDelete }) {
	const [form, setForm] = (0, import_react.useState)(value);
	(0, import_react.useEffect)(() => setForm(value), [value]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "space-y-4 rounded-xl bg-card p-4 shadow-[var(--shadow-card)]",
		onSubmit: (e) => {
			e.preventDefault();
			onSave(form);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-semibold",
				children: form.id ? "ویرایش محصول" : "محصول جدید"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "نام" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					required: true,
					value: form.name,
					onChange: (e) => setForm({
						...form,
						name: e.target.value
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "توضیح" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					value: form.description,
					onChange: (e) => setForm({
						...form,
						description: e.target.value
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "قیمت (تومان)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "number",
						min: 0,
						required: true,
						value: form.price,
						onChange: (e) => setForm({
							...form,
							price: Number(e.target.value) || 0
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "واحد" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: form.unit,
						onChange: (e) => setForm({
							...form,
							unit: e.target.value
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "دسته" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						className: "h-11 w-full rounded-md border border-line bg-card px-3 text-sm",
						value: form.categoryId,
						onChange: (e) => setForm({
							...form,
							categoryId: Number(e.target.value)
						}),
						children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
							value: c.id,
							children: [c.name, c.visible ? "" : " (مخفی)"]
						}, c.id))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "برچسب (اختیاری)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: form.badge,
						onChange: (e) => setForm({
							...form,
							badge: e.target.value
						}),
						placeholder: "پرفروش"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "ترتیب نمایش" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "number",
						value: form.sortOrder,
						onChange: (e) => setForm({
							...form,
							sortOrder: Number(e.target.value) || 0
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center justify-between gap-3 rounded-md border border-line px-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm",
						children: "نمایش در سایت"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
						dir: "ltr",
						checked: form.visible,
						onCheckedChange: (v) => setForm({
							...form,
							visible: v
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageField, {
				label: "تصویر محصول",
				value: form.image,
				onChange: (image) => setForm({
					...form,
					image
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						disabled: busy,
						children: "ذخیره"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "outline",
						onClick: onCancel,
						children: "انصراف"
					}),
					onDelete ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "chili",
						disabled: busy,
						onClick: () => void onDelete(),
						children: "حذف"
					}) : null
				]
			})
		]
	});
}
function CategoriesPanel({ data, token, busy, setBusy, onSaved }) {
	const [editing, setEditing] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-end justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-semibold",
					children: "دسته‌ها"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "ساخت، مخفی کردن یا ویرایش دسته."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => setEditing({
						name: "",
						slug: `cat-${Date.now().toString(36)}`,
						description: "",
						image: "",
						visible: true,
						sortOrder: data.categories.length + 1
					}),
					children: "دستهٔ جدید"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-2",
				children: data.categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-3 rounded-lg bg-card p-3 shadow-[var(--shadow-card)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-medium",
							children: [c.name, !c.visible ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mr-2 text-xs text-chili",
								children: "مخفی"
							}) : null]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate text-xs text-muted",
							children: c.description
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "outline",
						onClick: () => setEditing(c),
						children: "ویرایش"
					})]
				}, c.id))
			}),
			editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryForm, {
				value: editing,
				busy,
				onCancel: () => setEditing(null),
				onDelete: editing.id ? async () => {
					if (!confirm("این دسته و محصولاتش حذف شوند؟")) return;
					setBusy(true);
					try {
						await deleteCategory({ data: {
							token,
							id: editing.id
						} });
						setEditing(null);
						await onSaved();
						toast.success("حذف شد");
					} catch (err) {
						toast.error(errMsg(err));
					} finally {
						setBusy(false);
					}
				} : void 0,
				onSave: async (val) => {
					setBusy(true);
					try {
						await saveCategory({ data: {
							token,
							id: val.id,
							name: val.name,
							slug: val.slug,
							description: val.description,
							image: val.image,
							visible: val.visible,
							sortOrder: val.sortOrder
						} });
						setEditing(null);
						await onSaved();
						toast.success("ذخیره شد");
					} catch (err) {
						toast.error(errMsg(err));
					} finally {
						setBusy(false);
					}
				}
			}) : null
		]
	});
}
function CategoryForm({ value, busy, onSave, onCancel, onDelete }) {
	const [form, setForm] = (0, import_react.useState)(value);
	(0, import_react.useEffect)(() => setForm(value), [value]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "space-y-4 rounded-xl bg-card p-4 shadow-[var(--shadow-card)]",
		onSubmit: (e) => {
			e.preventDefault();
			onSave(form);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-semibold",
				children: form.id ? "ویرایش دسته" : "دستهٔ جدید"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "نام" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					required: true,
					value: form.name,
					onChange: (e) => setForm({
						...form,
						name: e.target.value
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "شناسه لاتین (slug)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					required: true,
					dir: "ltr",
					value: form.slug,
					onChange: (e) => setForm({
						...form,
						slug: e.target.value
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "توضیح" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					value: form.description,
					onChange: (e) => setForm({
						...form,
						description: e.target.value
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "ترتیب" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "number",
						value: form.sortOrder,
						onChange: (e) => setForm({
							...form,
							sortOrder: Number(e.target.value) || 0
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center justify-between gap-3 rounded-md border border-line px-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm",
						children: "نمایش در سایت"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
						dir: "ltr",
						checked: form.visible,
						onCheckedChange: (v) => setForm({
							...form,
							visible: v
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageField, {
				label: "تصویر دسته",
				value: form.image,
				onChange: (image) => setForm({
					...form,
					image
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						disabled: busy,
						children: "ذخیره"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "outline",
						onClick: onCancel,
						children: "انصراف"
					}),
					onDelete ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "chili",
						disabled: busy,
						onClick: () => void onDelete(),
						children: "حذف"
					}) : null
				]
			})
		]
	});
}
function ContactPanel({ data, token, busy, setBusy, onSaved }) {
	const [phone, setPhone] = (0, import_react.useState)(data.settings.phone);
	const [instagram, setInstagram] = (0, import_react.useState)(data.settings.instagram);
	(0, import_react.useEffect)(() => {
		setPhone(data.settings.phone);
		setInstagram(data.settings.instagram);
	}, [data.settings.phone, data.settings.instagram]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "space-y-4",
		onSubmit: async (e) => {
			e.preventDefault();
			setBusy(true);
			try {
				await saveSettings({ data: {
					token,
					phone,
					instagram: instagram.replace(/^@/, ""),
					ordersClosed: data.settings.ordersClosed,
					ordersClosedUntil: data.settings.ordersClosedUntil,
					ordersClosedMessage: data.settings.ordersClosedMessage
				} });
				await onSaved();
				toast.success("ذخیره شد");
			} catch (err) {
				toast.error(errMsg(err));
			} finally {
				setBusy(false);
			}
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-semibold",
				children: "تماس و اینستاگرام"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "این دو مقدار روی دکمهٔ واتساپ، تماس و لینک اینستاگرام کل سایت اثر می‌گذارند."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "شماره تلفن" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					dir: "ltr",
					value: phone,
					onChange: (e) => setPhone(e.target.value)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "آی‌دی اینستاگرام (بدون @)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					dir: "ltr",
					value: instagram,
					onChange: (e) => setInstagram(e.target.value)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				disabled: busy,
				children: "ذخیره"
			})
		]
	});
}
function OrdersPanel({ data, token, busy, setBusy, onSaved }) {
	const s = data.settings;
	const [closed, setClosed] = (0, import_react.useState)(s.ordersClosed);
	const [until, setUntil] = (0, import_react.useState)(s.ordersClosedUntil ?? "");
	const [message, setMessage] = (0, import_react.useState)(s.ordersClosedMessage);
	(0, import_react.useEffect)(() => {
		setClosed(s.ordersClosed);
		setUntil(s.ordersClosedUntil ?? "");
		setMessage(s.ordersClosedMessage);
	}, [s]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "space-y-4",
		onSubmit: async (e) => {
			e.preventDefault();
			setBusy(true);
			try {
				await saveSettings({ data: {
					token,
					phone: s.phone,
					instagram: s.instagram,
					ordersClosed: closed,
					ordersClosedUntil: until || null,
					ordersClosedMessage: message
				} });
				await onSaved();
				toast.success("وضعیت سفارش ذخیره شد");
			} catch (err) {
				toast.error(errMsg(err));
			} finally {
				setBusy(false);
			}
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-semibold",
				children: "وضعیت سفارش"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "اگر سفارش‌ها بسته باشد، به مشتری یک پاپ‌آپ نشان داده می‌شود تا تاریخ مشخص."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex items-center justify-between gap-3 rounded-xl bg-card px-4 py-4 shadow-[var(--shadow-card)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block font-medium",
					children: "سفارش‌ها بسته است"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-muted",
					children: "پاپ‌آپ برای بازدیدکننده‌ها"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
					dir: "ltr",
					checked: closed,
					onCheckedChange: setClosed
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "باز شدن از تاریخ" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "date",
						dir: "ltr",
						value: until,
						onChange: (e) => setUntil(e.target.value)
					}),
					until ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted",
						children: [
							"تا ",
							formatFaDate(until),
							" به مشتری نشان داده می‌شود."
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: "اگر تاریخ خالی باشد، تا اطلاع بعدی بسته می‌ماند."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "متن پاپ‌آپ" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					value: message,
					onChange: (e) => setMessage(e.target.value)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				disabled: busy,
				children: "ذخیره"
			})
		]
	});
}
function PinPanel({ token, busy, setBusy }) {
	const [currentPin, setCurrent] = (0, import_react.useState)("");
	const [nextPin, setNext] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "space-y-4",
		onSubmit: async (e) => {
			e.preventDefault();
			setBusy(true);
			try {
				await changePin({ data: {
					token,
					currentPin,
					nextPin
				} });
				setCurrent("");
				setNext("");
				toast.success("رمز عوض شد");
			} catch (err) {
				toast.error(errMsg(err));
			} finally {
				setBusy(false);
			}
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-semibold",
				children: "رمز ورود پنل"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "رمز فعلی" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "password",
					value: currentPin,
					onChange: (e) => setCurrent(e.target.value)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "رمز جدید (حداقل ۳ کاراکتر)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "password",
					value: nextPin,
					onChange: (e) => setNext(e.target.value)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				disabled: busy,
				children: "تغییر رمز"
			})
		]
	});
}
function AdminPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminApp, {});
}
//#endregion
export { AdminPage as component };
