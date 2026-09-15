import "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as Slot } from "../_libs/@radix-ui/react-primitive+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
function formatToman(n) {
	return `${new Intl.NumberFormat("fa-IR").format(n)} تومان`;
}
function formatFaDate(iso) {
	if (!iso) return "";
	const raw = iso.length === 10 ? `${iso}T12:00:00` : iso;
	const d = new Date(raw);
	if (Number.isNaN(d.getTime())) return iso;
	return d.toLocaleDateString("fa-IR", {
		year: "numeric",
		month: "long",
		day: "numeric"
	});
}
function digitsOnly(phone) {
	return phone.replace(/[^\d]/g, "");
}
function waLink(phone, text) {
	return `https://wa.me/${digitsOnly(phone)}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
}
function igLink(handle) {
	return `https://www.instagram.com/${handle.replace(/^@/, "").trim()}/`;
}
function telLink(phone) {
	const n = digitsOnly(phone);
	return n.startsWith("00") ? `tel:+${n.slice(2)}` : `tel:+${n}`;
}
function content(map, key, fallback = "") {
	const v = map[key];
	return v == null || v === "" ? fallback : v;
}
function isOrdersClosed(closed, until) {
	if (!closed) return false;
	if (!until) return true;
	const today = /* @__PURE__ */ new Date();
	return until >= `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-[color,background-color,box-shadow,transform] duration-150 ease-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			default: "bg-paprika text-primary-foreground shadow-[0_1px_0_rgba(31,20,14,0.12)] hover:bg-paprika-dark",
			herb: "bg-herb text-secondary-foreground hover:bg-herb-dark",
			chili: "bg-chili text-primary-foreground hover:bg-chili/90",
			outline: "border border-ink/15 bg-cream text-ink hover:bg-cream-2",
			ghost: "text-ink hover:bg-cream-2",
			link: "text-paprika underline-offset-4 hover:underline"
		},
		size: {
			default: "h-11 rounded-md px-4",
			sm: "h-9 rounded-sm px-3 text-xs",
			lg: "h-12 rounded-lg px-6 text-base",
			icon: "size-11 rounded-md"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		"data-slot": "button",
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
function BrandMark({ map, compact = false, invert = false }) {
	const name = content(map, "brand.name", "نازلی");
	const tag = content(map, "brand.tagline", "فینگر فود");
	const logo = content(map, "brand.logo");
	const nameCls = invert ? "text-cream" : "text-ink";
	const tagCls = invert ? "text-cream/80" : "text-paprika";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-2.5",
		children: [logo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: logo,
			alt: "",
			className: compact ? "h-9 w-9 rounded-sm object-cover" : "h-11 w-11 rounded-md object-cover"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			"aria-hidden": true,
			className: compact ? "grid size-9 grid-rows-3 gap-0.5 rounded-sm bg-cream p-1.5" : "grid size-11 grid-rows-3 gap-1 rounded-md bg-cream p-2",
			style: { boxShadow: "inset 0 0 0 1px rgba(31,20,14,0.08)" },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rounded-[2px] bg-chili" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rounded-[2px] bg-herb" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rounded-[2px] bg-paprika" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex flex-col leading-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `font-display text-[1.65rem] tracking-tight ${nameCls}`,
				children: name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `mt-0.5 text-[0.7rem] font-medium tracking-[0.18em] ${tagCls}`,
				children: tag
			})]
		})]
	});
}
//#endregion
export { formatFaDate as a, isOrdersClosed as c, content as i, telLink as l, Button as n, formatToman as o, cn as r, igLink as s, BrandMark as t, waLink as u };
