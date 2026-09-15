import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { content, telLink, waLink } from "@/lib/cms/format";
import type { SiteData } from "@/lib/cms/types";
import { BrandMark } from "./BrandMark";

export function SiteHeader({ data }: { data: SiteData }) {
  const [open, setOpen] = useState(false);
  const { settings, content: c } = data;
  const prefill = content(c, "wa.prefill");

  const links = [
    { href: "#menu", label: content(c, "nav.menu", "منو") },
    { href: "#about", label: content(c, "nav.about", "قصهٔ ما") },
    { href: "#contact", label: content(c, "nav.contact", "تماس") },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-ink/8 bg-cream/90 backdrop-blur-md">
      <div className="h-1.5 bg-paprika" />
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <a href="#top" className="shrink-0" onClick={() => setOpen(false)}>
          <BrandMark map={c} />
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-ink md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-paprika">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="outline" size="sm" asChild>
            <a href={telLink(settings.phone)}>
              <Phone />
              تماس
            </a>
          </Button>
          <Button size="sm" variant="herb" asChild>
            <a href={waLink(settings.phone, prefill)} target="_blank" rel="noreferrer">
              {content(c, "nav.order", "سفارش")}
            </a>
          </Button>
        </div>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md text-ink md:hidden"
          aria-label={open ? "بستن منو" : "باز کردن منو"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-line px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-md px-3 py-3 text-base font-medium hover:bg-cream-2"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href={waLink(settings.phone, prefill)}
              className="mt-2 rounded-md bg-herb px-3 py-3 text-center text-secondary-foreground"
              onClick={() => setOpen(false)}
            >
              {content(c, "nav.order", "سفارش")}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
