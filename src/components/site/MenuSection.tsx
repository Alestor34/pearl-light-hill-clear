import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { content, formatToman, waLink } from "@/lib/cms/format";
import type { Category, Product, SiteData } from "@/lib/cms/types";

export function MenuSection({ data }: { data: SiteData }) {
  const visibleCats = data.categories.filter((c) => c.visible);
  const [active, setActive] = useState<number | "all">("all");
  const catIds = useMemo(() => new Set(visibleCats.map((c) => c.id)), [visibleCats]);

  const products = data.products.filter((p) => {
    if (!p.visible || !catIds.has(p.categoryId)) return false;
    if (active === "all") return true;
    return p.categoryId === active;
  });

  const prefill = content(data.content, "wa.prefill");

  return (
    <section id="menu" className="scroll-mt-24 bg-cream-2/50 py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-medium tracking-[0.22em] text-herb">
          {content(data.content, "menu.kicker")}
        </p>
        <h2 className="mt-2 font-display text-4xl text-ink sm:text-5xl">
          {content(data.content, "menu.title")}
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
          {content(data.content, "menu.subtitle")}
        </p>

        <div className="mt-8 flex max-w-full gap-2 overflow-x-auto pb-2">
          <FilterChip
            active={active === "all"}
            onClick={() => setActive("all")}
            label="همه"
          />
          {visibleCats.map((c) => (
            <FilterChip
              key={c.id}
              active={active === c.id}
              onClick={() => setActive(c.id)}
              label={c.name}
            />
          ))}
        </div>

        {products.length === 0 ? (
          <p className="mt-10 text-sm text-muted">فعلاً آیتمی در این دسته نیست.</p>
        ) : (
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <li key={p.id}>
                <ProductCard
                  product={p}
                  category={visibleCats.find((c) => c.id === p.categoryId)}
                  wa={waLink(data.settings.phone, `${prefill}\n${p.name}`)}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

function FilterChip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        active
          ? "h-11 shrink-0 rounded-full bg-paprika px-4 text-sm font-medium text-primary-foreground"
          : "h-11 shrink-0 rounded-full border border-ink/12 bg-card px-4 text-sm font-medium text-ink hover:border-herb hover:text-herb"
      }
    >
      {label}
    </button>
  );
}

function ProductCard({
  product,
  category,
  wa,
}: {
  product: Product;
  category?: Category;
  wa: string;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl bg-card shadow-[var(--shadow-card)] transition-[box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]">
      <div className="relative overflow-hidden rounded-tr-[1.8rem] rounded-bl-sm">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover outline outline-1 -outline-offset-1 outline-ink/10 transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="aspect-[4/3] bg-cream-2" />
        )}
        {product.badge ? (
          <Badge variant="chili" className="absolute top-3 right-3">
            {product.badge}
          </Badge>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-ink">{product.name}</h3>
          {category ? (
            <span className="shrink-0 text-[0.7rem] text-herb">{category.name}</span>
          ) : null}
        </div>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-6 text-muted">
          {product.description}
        </p>
        <div className="mt-4 flex items-end justify-between gap-3 border-t border-line pt-3">
          <div>
            <p className="text-base font-semibold text-chili tabular-nums">
              {formatToman(product.price)}
            </p>
            <p className="text-xs text-muted">{product.unit}</p>
          </div>
          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center rounded-md bg-herb px-3 text-xs font-medium text-secondary-foreground hover:bg-herb-dark"
          >
            سفارش
          </a>
        </div>
      </div>
    </article>
  );
}
