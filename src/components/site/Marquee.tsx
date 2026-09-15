import { content } from "@/lib/cms/format";

export function Marquee({ map }: { map: Record<string, string> }) {
  const text = content(
    map,
    "marquee.text",
    "مینی برگر · مینی پیتزا · بورک · سمبوسه",
  );
  const chunk = `${text}  ·  `;
  return (
    <div className="max-w-full overflow-hidden border-y border-ink/10 bg-paprika text-primary-foreground">
      <div className="marquee-track flex w-max whitespace-nowrap py-3 text-sm font-medium tracking-wide">
        <span className="px-4">{chunk.repeat(4)}</span>
        <span className="px-4" aria-hidden>
          {chunk.repeat(4)}
        </span>
      </div>
    </div>
  );
}
