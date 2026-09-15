import { content, waLink } from "@/lib/cms/format";
import type { SiteData } from "@/lib/cms/types";

export function WhatsAppFab({ data }: { data: SiteData }) {
  const href = waLink(data.settings.phone, content(data.content, "wa.prefill"));
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 left-5 z-40 inline-flex size-14 items-center justify-center rounded-full bg-herb text-secondary-foreground shadow-[var(--shadow-lift)] transition-transform duration-150 hover:bg-herb-dark active:scale-[0.96]"
      aria-label="واتساپ"
    >
      <svg viewBox="0 0 24 24" className="size-7 fill-current" aria-hidden>
        <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7zM12.05 20.15h-.01a8.18 8.18 0 0 1-4.17-1.14l-.3-.18-3.15.82.84-3.07-.2-.32a8.16 8.16 0 0 1-1.26-4.35c0-4.52 3.68-8.2 8.21-8.2 2.19 0 4.25.85 5.8 2.4a8.16 8.16 0 0 1 2.4 5.8c0 4.53-3.68 8.24-8.16 8.24zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.09-.39-.12-.56.12-.16.25-.64.8-.79.97-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.55c.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.2-.58.2-1.08.14-1.18-.06-.1-.23-.16-.48-.28z" />
      </svg>
    </a>
  );
}
