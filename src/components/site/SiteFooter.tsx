import { content } from "@/lib/cms/format";
import type { SiteData } from "@/lib/cms/types";
import { BrandMark } from "./BrandMark";

export function SiteFooter({ data }: { data: SiteData }) {
  return (
    <footer className="border-t border-ink/10 bg-ink text-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-6">
        <div>
          <BrandMark map={data.content} invert />
          <p className="mt-4 max-w-sm text-sm leading-6 text-cream/70">
            {content(data.content, "footer.note")}
          </p>
        </div>
        <p className="text-xs text-cream/50">
          {content(data.content, "brand.name", "نازلی")} · فینگر فود
        </p>
      </div>
    </footer>
  );
}
