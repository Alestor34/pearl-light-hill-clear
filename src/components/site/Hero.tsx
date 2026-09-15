import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { content, waLink } from "@/lib/cms/format";
import type { SiteData } from "@/lib/cms/types";

export function Hero({ data }: { data: SiteData }) {
  const { settings, content: c } = data;
  const img = content(c, "hero.image", "/food/hero.jpg");
  const prefill = content(c, "wa.prefill");

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:py-16">
        <div className="lg:col-span-5">
          <p className="reveal text-sm font-medium tracking-[0.22em] text-herb">
            {content(c, "hero.kicker")}
          </p>
          <h1 className="reveal reveal-2 mt-3 font-display text-[2.7rem] leading-[1.05] text-ink sm:text-6xl">
            {content(c, "hero.title")}
          </h1>
          <p className="reveal reveal-3 mt-5 max-w-md text-base leading-7 text-muted">
            {content(c, "hero.subtitle")}
          </p>
          <div className="reveal reveal-4 mt-7 flex flex-wrap items-center gap-3">
            <Button size="lg" variant="herb" asChild>
              <a href={waLink(settings.phone, prefill)} target="_blank" rel="noreferrer">
                {content(c, "hero.cta")}
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#menu">
                {content(c, "hero.cta2")}
                <ArrowDown />
              </a>
            </Button>
          </div>
        </div>
        <div className="relative lg:col-span-7">
          <div
            aria-hidden
            className="absolute -top-4 -left-4 hidden h-full w-[70%] rounded-xl bg-paprika sm:block"
          />
          <div
            aria-hidden
            className="absolute -right-3 -bottom-3 hidden size-24 rounded-md bg-herb sm:block"
          />
          <div className="relative overflow-hidden rounded-tr-[2.4rem] rounded-bl-[2.4rem] rounded-tl-md rounded-br-md shadow-[var(--shadow-lift)]">
            <img
              src={img}
              alt={content(c, "hero.title")}
              className="aspect-[16/10] w-full object-cover outline outline-1 -outline-offset-1 outline-ink/10"
            />
            <span className="absolute right-4 bottom-4 rounded-full bg-chili px-3 py-1.5 text-xs font-medium text-primary-foreground">
              {content(c, "hero.badge")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
