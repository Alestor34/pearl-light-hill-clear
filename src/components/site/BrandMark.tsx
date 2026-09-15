import { content } from "@/lib/cms/format";

export function BrandMark({
  map,
  compact = false,
  invert = false,
}: {
  map: Record<string, string>;
  compact?: boolean;
  invert?: boolean;
}) {
  const name = content(map, "brand.name", "نازلی");
  const tag = content(map, "brand.tagline", "فینگر فود");
  const logo = content(map, "brand.logo");
  const nameCls = invert ? "text-cream" : "text-ink";
  const tagCls = invert ? "text-cream/80" : "text-paprika";

  return (
    <span className="inline-flex items-center gap-2.5">
      {logo ? (
        <img
          src={logo}
          alt=""
          className={compact ? "h-9 w-9 rounded-sm object-cover" : "h-11 w-11 rounded-md object-cover"}
        />
      ) : (
        <span
          aria-hidden
          className={
            compact
              ? "grid size-9 grid-rows-3 gap-0.5 rounded-sm bg-cream p-1.5"
              : "grid size-11 grid-rows-3 gap-1 rounded-md bg-cream p-2"
          }
          style={{ boxShadow: "inset 0 0 0 1px rgba(31,20,14,0.08)" }}
        >
          <span className="rounded-[2px] bg-chili" />
          <span className="rounded-[2px] bg-herb" />
          <span className="rounded-[2px] bg-paprika" />
        </span>
      )}
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.65rem] tracking-tight ${nameCls}`}>{name}</span>
        <span className={`mt-0.5 text-[0.7rem] font-medium tracking-[0.18em] ${tagCls}`}>
          {tag}
        </span>
      </span>
    </span>
  );
}
