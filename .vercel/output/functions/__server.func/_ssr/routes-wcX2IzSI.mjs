import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { a as formatFaDate, c as isOrdersClosed, i as content, l as telLink, n as Button, o as formatToman, r as cn, s as igLink, t as BrandMark, u as waLink } from "./BrandMark-DrmocjKI.mjs";
import { a as Menu, c as Clock3, i as Phone, l as ArrowDown, n as Users, o as Instagram, s as Flame, t as X } from "../_libs/lucide-react.mjs";
import { n as Route$1 } from "./router-BpL8n9Ca.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-wcX2IzSI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AboutSection({ data }) {
	const c = data.content;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "scroll-mt-24 py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "absolute top-4 right-4 -z-10 hidden h-[calc(100%-1rem)] w-[calc(100%-1rem)] rounded-xl bg-herb sm:block"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: content(c, "about.image", "/food/about.jpg"),
					alt: content(c, "about.title"),
					loading: "lazy",
					className: "relative aspect-[4/3] w-full rounded-tr-[2rem] rounded-bl-[2rem] rounded-tl-md rounded-br-md object-cover outline outline-1 -outline-offset-1 outline-ink/10"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium tracking-[0.22em] text-herb",
					children: content(c, "about.kicker")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-4xl text-ink sm:text-5xl",
					children: content(c, "about.title")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-base leading-8 text-muted",
					children: content(c, "about.body")
				})
			] })]
		})
	});
}
function ContactSection({ data }) {
	const { settings, content: c } = data;
	const prefill = content(c, "wa.prefill");
	const handle = settings.instagram.replace(/^@/, "");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "scroll-mt-24 py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-xl bg-paprika text-primary-foreground shadow-[var(--shadow-lift)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 p-6 sm:p-10 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-4xl sm:text-5xl",
							children: content(c, "contact.title")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-md text-sm leading-7 text-cream/90",
							children: content(c, "contact.body")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm text-cream/80",
							children: content(c, "contact.hours")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-cream/80",
							children: content(c, "contact.city")
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-center gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: telLink(settings.phone),
								className: "flex items-center gap-3 rounded-lg bg-paprika-dark/50 px-4 py-4 hover:bg-paprika-dark",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xl font-semibold tracking-wide",
									dir: "ltr",
									children: settings.phone
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: igLink(settings.instagram),
								target: "_blank",
								rel: "noreferrer",
								className: "flex items-center gap-3 rounded-lg bg-paprika-dark/50 px-4 py-4 hover:bg-paprika-dark",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									dir: "ltr",
									children: ["@", handle]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								className: "bg-cream text-ink hover:bg-cream-2",
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: waLink(settings.phone, prefill),
									target: "_blank",
									rel: "noreferrer",
									children: "پیام در واتساپ"
								})
							})
						]
					})]
				})
			})
		})
	});
}
var icons = [
	Flame,
	Clock3,
	Users
];
function Features({ map }) {
	const items = [
		1,
		2,
		3
	].map((n) => ({
		title: content(map, `feature.${n}.title`),
		body: content(map, `feature.${n}.body`),
		Icon: icons[n - 1]
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto grid max-w-6xl gap-4 px-4 py-10 sm:grid-cols-3 sm:px-6",
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "rounded-xl bg-card p-5 shadow-[var(--shadow-card)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-flex size-10 items-center justify-center rounded-md bg-herb/10 text-herb",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.Icon, { className: "size-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-lg font-semibold text-ink",
					children: item.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-6 text-muted",
					children: item.body
				})
			]
		}, item.title))
	});
}
function Hero({ data }) {
	const { settings, content: c } = data;
	const img = content(c, "hero.image", "/food/hero.jpg");
	const prefill = content(c, "wa.prefill");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "reveal text-sm font-medium tracking-[0.22em] text-herb",
						children: content(c, "hero.kicker")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "reveal reveal-2 mt-3 font-display text-[2.7rem] leading-[1.05] text-ink sm:text-6xl",
						children: content(c, "hero.title")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "reveal reveal-3 mt-5 max-w-md text-base leading-7 text-muted",
						children: content(c, "hero.subtitle")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal reveal-4 mt-7 flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "lg",
							variant: "herb",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: waLink(settings.phone, prefill),
								target: "_blank",
								rel: "noreferrer",
								children: content(c, "hero.cta")
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "lg",
							variant: "outline",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#menu",
								children: [content(c, "hero.cta2"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, {})]
							})
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative lg:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "absolute -top-4 -left-4 hidden h-full w-[70%] rounded-xl bg-paprika sm:block"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "absolute -right-3 -bottom-3 hidden size-24 rounded-md bg-herb sm:block"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative overflow-hidden rounded-tr-[2.4rem] rounded-bl-[2.4rem] rounded-tl-md rounded-br-md shadow-[var(--shadow-lift)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: img,
							alt: content(c, "hero.title"),
							className: "aspect-[16/10] w-full object-cover outline outline-1 -outline-offset-1 outline-ink/10"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute right-4 bottom-4 rounded-full bg-chili px-3 py-1.5 text-xs font-medium text-primary-foreground",
							children: content(c, "hero.badge")
						})]
					})
				]
			})]
		})
	});
}
function Marquee({ map }) {
	const chunk = `${content(map, "marquee.text", "مینی برگر · مینی پیتزا · بورک · سمبوسه")}  ·  `;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "max-w-full overflow-hidden border-y border-ink/10 bg-paprika text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "marquee-track flex w-max whitespace-nowrap py-3 text-sm font-medium tracking-wide",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "px-4",
				children: chunk.repeat(4)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "px-4",
				"aria-hidden": true,
				children: chunk.repeat(4)
			})]
		})
	});
}
var badgeVariants = cva("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium", {
	variants: { variant: {
		default: "bg-paprika text-primary-foreground",
		herb: "bg-herb text-secondary-foreground",
		chili: "bg-chili text-primary-foreground",
		cream: "bg-cream-2 text-ink"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
function MenuSection({ data }) {
	const visibleCats = data.categories.filter((c) => c.visible);
	const [active, setActive] = (0, import_react.useState)("all");
	const catIds = (0, import_react.useMemo)(() => new Set(visibleCats.map((c) => c.id)), [visibleCats]);
	const products = data.products.filter((p) => {
		if (!p.visible || !catIds.has(p.categoryId)) return false;
		if (active === "all") return true;
		return p.categoryId === active;
	});
	const prefill = content(data.content, "wa.prefill");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "menu",
		className: "scroll-mt-24 bg-cream-2/50 py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium tracking-[0.22em] text-herb",
					children: content(data.content, "menu.kicker")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-4xl text-ink sm:text-5xl",
					children: content(data.content, "menu.title")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-sm leading-7 text-muted",
					children: content(data.content, "menu.subtitle")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex max-w-full gap-2 overflow-x-auto pb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
						active: active === "all",
						onClick: () => setActive("all"),
						label: "همه"
					}), visibleCats.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
						active: active === c.id,
						onClick: () => setActive(c.id),
						label: c.name
					}, c.id))]
				}),
				products.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-10 text-sm text-muted",
					children: "فعلاً آیتمی در این دسته نیست."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
						product: p,
						category: visibleCats.find((c) => c.id === p.categoryId),
						wa: waLink(data.settings.phone, `${prefill}\n${p.name}`)
					}) }, p.id))
				})
			]
		})
	});
}
function FilterChip({ active, onClick, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: active ? "h-11 shrink-0 rounded-full bg-paprika px-4 text-sm font-medium text-primary-foreground" : "h-11 shrink-0 rounded-full border border-ink/12 bg-card px-4 text-sm font-medium text-ink hover:border-herb hover:text-herb",
		children: label
	});
}
function ProductCard({ product, category, wa }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group flex h-full flex-col overflow-hidden rounded-xl bg-card shadow-[var(--shadow-card)] transition-[box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden rounded-tr-[1.8rem] rounded-bl-sm",
			children: [product.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: product.image,
				alt: product.name,
				loading: "lazy",
				className: "aspect-[4/3] w-full object-cover outline outline-1 -outline-offset-1 outline-ink/10 transition-transform duration-300 group-hover:scale-[1.03]"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "aspect-[4/3] bg-cream-2" }), product.badge ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				variant: "chili",
				className: "absolute top-3 right-3",
				children: product.badge
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-semibold text-ink",
						children: product.name
					}), category ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "shrink-0 text-[0.7rem] text-herb",
						children: category.name
					}) : null]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 line-clamp-3 flex-1 text-sm leading-6 text-muted",
					children: product.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex items-end justify-between gap-3 border-t border-line pt-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base font-semibold text-chili tabular-nums",
						children: formatToman(product.price)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: product.unit
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: wa,
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex h-10 items-center rounded-md bg-herb px-3 text-xs font-medium text-secondary-foreground hover:bg-herb-dark",
						children: "سفارش"
					})]
				})
			]
		})]
	});
}
var DISMISS_KEY = "nazli-closed-dismissed";
function OrderClosedDialog({ data }) {
	const { settings, content: c } = data;
	const closed = isOrdersClosed(settings.ordersClosed, settings.ordersClosedUntil);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!closed) return;
		const stamp = `${settings.ordersClosedUntil ?? "open-ended"}`;
		try {
			if (sessionStorage.getItem(DISMISS_KEY) === stamp) return;
		} catch {}
		setOpen(true);
	}, [closed, settings.ordersClosedUntil]);
	if (!closed || !open) return null;
	const until = formatFaDate(settings.ordersClosedUntil);
	const dismiss = () => {
		setOpen(false);
		try {
			sessionStorage.setItem(DISMISS_KEY, settings.ordersClosedUntil ?? "open-ended");
		} catch {}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-end justify-center bg-ink/50 p-4 sm:items-center",
		role: "dialog",
		"aria-modal": "true",
		"aria-labelledby": "closed-title",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-md overflow-hidden rounded-xl bg-cream p-6 shadow-[var(--shadow-lift)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-0 h-1.5 bg-chili" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-[0.2em] text-chili",
					children: "اطلاعیه"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "closed-title",
					className: "mt-2 font-display text-3xl text-ink",
					children: content(c, "popup.title", "سفارش‌ها فعلاً بسته است")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-7 text-muted",
					children: settings.ordersClosedMessage
				}),
				until ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 rounded-md bg-cream-2 px-3 py-2 text-sm font-medium text-ink",
					children: ["تا ", until]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: dismiss,
					className: "mt-6 h-11 w-full rounded-md bg-paprika text-sm font-medium text-primary-foreground hover:bg-paprika-dark",
					children: "متوجه شدم"
				})
			]
		})
	});
}
function OrderSteps({ map }) {
	const steps = [
		1,
		2,
		3
	].map((n) => ({
		n,
		title: content(map, `order.${n}.title`),
		body: content(map, `order.${n}.body`)
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-herb text-secondary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-14 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium tracking-[0.22em] text-cream/80",
					children: content(map, "order.kicker")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-4xl sm:text-5xl",
					children: content(map, "order.title")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-10 grid gap-6 sm:grid-cols-3",
					children: steps.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-xl bg-herb-dark/40 p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-3xl text-cream/50 tabular-nums",
								children: String(s.n).padStart(2, "0")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 text-lg font-semibold",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-6 text-cream/80",
								children: s.body
							})
						]
					}, s.n))
				})
			]
		})
	});
}
function SiteFooter({ data }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-ink/10 bg-ink text-cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, {
				map: data.content,
				invert: true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-sm text-sm leading-6 text-cream/70",
				children: content(data.content, "footer.note")
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-cream/50",
				children: [content(data.content, "brand.name", "نازلی"), " · فینگر فود"]
			})]
		})
	});
}
function SiteHeader({ data }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const { settings, content: c } = data;
	const prefill = content(c, "wa.prefill");
	const links = [
		{
			href: "#menu",
			label: content(c, "nav.menu", "منو")
		},
		{
			href: "#about",
			label: content(c, "nav.about", "قصهٔ ما")
		},
		{
			href: "#contact",
			label: content(c, "nav.contact", "تماس")
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-ink/8 bg-cream/90 backdrop-blur-md",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 bg-paprika" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#top",
						className: "shrink-0",
						onClick: () => setOpen(false),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, { map: c })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-7 text-sm font-medium text-ink md:flex",
						children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.href,
							className: "hover:text-paprika",
							children: l.label
						}, l.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden items-center gap-2 md:flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: telLink(settings.phone),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {}), "تماس"]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "herb",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: waLink(settings.phone, prefill),
								target: "_blank",
								rel: "noreferrer",
								children: content(c, "nav.order", "سفارش")
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "inline-flex size-11 items-center justify-center rounded-md text-ink md:hidden",
						"aria-label": open ? "بستن منو" : "باز کردن منو",
						onClick: () => setOpen((v) => !v),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-6" })
					})
				]
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-line px-4 py-4 md:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex flex-col gap-1",
					children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "rounded-md px-3 py-3 text-base font-medium hover:bg-cream-2",
						onClick: () => setOpen(false),
						children: l.label
					}, l.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: waLink(settings.phone, prefill),
						className: "mt-2 rounded-md bg-herb px-3 py-3 text-center text-secondary-foreground",
						onClick: () => setOpen(false),
						children: content(c, "nav.order", "سفارش")
					})]
				})
			}) : null
		]
	});
}
function WhatsAppFab({ data }) {
	const href = waLink(data.settings.phone, content(data.content, "wa.prefill"));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		target: "_blank",
		rel: "noreferrer",
		className: "fixed bottom-5 left-5 z-40 inline-flex size-14 items-center justify-center rounded-full bg-herb text-secondary-foreground shadow-[var(--shadow-lift)] transition-transform duration-150 hover:bg-herb-dark active:scale-[0.96]",
		"aria-label": "واتساپ",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			className: "size-7 fill-current",
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7zM12.05 20.15h-.01a8.18 8.18 0 0 1-4.17-1.14l-.3-.18-3.15.82.84-3.07-.2-.32a8.16 8.16 0 0 1-1.26-4.35c0-4.52 3.68-8.2 8.21-8.2 2.19 0 4.25.85 5.8 2.4a8.16 8.16 0 0 1 2.4 5.8c0 4.53-3.68 8.24-8.16 8.24zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.09-.39-.12-.56.12-.16.25-.64.8-.79.97-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.55c.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.2-.58.2-1.08.14-1.18-.06-.1-.23-.16-.48-.28z" })
		})
	});
}
function Storefront({ data }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		className: "relative min-h-dvh overflow-x-hidden bg-cream text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "paper-grain pointer-events-none fixed inset-0 z-50 opacity-[0.04]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, { data }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, { data }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, { map: data.content }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Features, { map: data.content }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuSection, { data }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutSection, { data }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderSteps, { map: data.content }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, { data })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, { data }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFab, { data }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderClosedDialog, { data })
		]
	});
}
function Home() {
	const data = Route$1.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Storefront, { data });
}
//#endregion
export { Home as component };
