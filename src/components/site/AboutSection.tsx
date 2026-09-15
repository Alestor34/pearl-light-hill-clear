import { content } from "@/lib/cms/format";
import type { SiteData } from "@/lib/cms/types";

export function AboutSection({ data }: { data: SiteData }) {
  const c = data.content;
  return (
    <section id="about" className="scroll-mt-24 py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative">
          <div
            aria-hidden
            className="absolute top-4 right-4 -z-10 hidden h-[calc(100%-1rem)] w-[calc(100%-1rem)] rounded-xl bg-herb sm:block"
          />
          <img
            src={content(c, "about.image", "/food/about.jpg")}
            alt={content(c, "about.title")}
            loading="lazy"
            className="relative aspect-[4/3] w-full rounded-tr-[2rem] rounded-bl-[2rem] rounded-tl-md rounded-br-md object-cover outline outline-1 -outline-offset-1 outline-ink/10"
          />
        </div>
        <div>
          <p className="text-sm font-medium tracking-[0.22em] text-herb">
            {content(c, "about.kicker")}
          </p>
          <h2 className="mt-2 font-display text-4xl text-ink sm:text-5xl">
            {content(c, "about.title")}
          </h2>
          <p className="mt-5 text-base leading-8 text-muted">{content(c, "about.body")}</p>
        </div>
      </div>
    </section>
  );
}
