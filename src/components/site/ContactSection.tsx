import { Instagram, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { content, igLink, telLink, waLink } from "@/lib/cms/format";
import type { SiteData } from "@/lib/cms/types";

export function ContactSection({ data }: { data: SiteData }) {
  const { settings, content: c } = data;
  const prefill = content(c, "wa.prefill");
  const handle = settings.instagram.replace(/^@/, "");

  return (
    <section id="contact" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-xl bg-paprika text-primary-foreground shadow-[var(--shadow-lift)]">
          <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-4xl sm:text-5xl">
                {content(c, "contact.title")}
              </h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-cream/90">
                {content(c, "contact.body")}
              </p>
              <p className="mt-6 text-sm text-cream/80">{content(c, "contact.hours")}</p>
              <p className="text-sm text-cream/80">{content(c, "contact.city")}</p>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <a
                href={telLink(settings.phone)}
                className="flex items-center gap-3 rounded-lg bg-paprika-dark/50 px-4 py-4 hover:bg-paprika-dark"
              >
                <Phone className="size-5" />
                <span className="text-xl font-semibold tracking-wide" dir="ltr">
                  {settings.phone}
                </span>
              </a>
              <a
                href={igLink(settings.instagram)}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-lg bg-paprika-dark/50 px-4 py-4 hover:bg-paprika-dark"
              >
                <Instagram className="size-5" />
                <span dir="ltr">@{handle}</span>
              </a>
              <Button
                size="lg"
                className="bg-cream text-ink hover:bg-cream-2"
                asChild
              >
                <a href={waLink(settings.phone, prefill)} target="_blank" rel="noreferrer">
                  پیام در واتساپ
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
