import type { SiteData } from "@/lib/cms/types";
import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection";
import { Features } from "./Features";
import { Hero } from "./Hero";
import { Marquee } from "./Marquee";
import { MenuSection } from "./MenuSection";
import { OrderClosedDialog } from "./OrderClosedDialog";
import { OrderSteps } from "./OrderSteps";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { WhatsAppFab } from "./WhatsAppFab";

export function Storefront({ data }: { data: SiteData }) {
  return (
    <div id="top" className="relative min-h-dvh overflow-x-hidden bg-cream text-ink">
      <div className="paper-grain pointer-events-none fixed inset-0 z-50 opacity-[0.04]" />
      <SiteHeader data={data} />
      <main>
        <Hero data={data} />
        <Marquee map={data.content} />
        <Features map={data.content} />
        <MenuSection data={data} />
        <AboutSection data={data} />
        <OrderSteps map={data.content} />
        <ContactSection data={data} />
      </main>
      <SiteFooter data={data} />
      <WhatsAppFab data={data} />
      <OrderClosedDialog data={data} />
    </div>
  );
}
