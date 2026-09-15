import { useEffect, useState } from "react";
import { content, formatFaDate, isOrdersClosed } from "@/lib/cms/format";
import type { SiteData } from "@/lib/cms/types";

const DISMISS_KEY = "nazli-closed-dismissed";

export function OrderClosedDialog({ data }: { data: SiteData }) {
  const { settings, content: c } = data;
  const closed = isOrdersClosed(settings.ordersClosed, settings.ordersClosedUntil);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!closed) return;
    const stamp = `${settings.ordersClosedUntil ?? "open-ended"}`;
    try {
      if (sessionStorage.getItem(DISMISS_KEY) === stamp) return;
    } catch {
      /* ignore */
    }
    setOpen(true);
  }, [closed, settings.ordersClosedUntil]);

  if (!closed || !open) return null;

  const until = formatFaDate(settings.ordersClosedUntil);
  const dismiss = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(DISMISS_KEY, settings.ordersClosedUntil ?? "open-ended");
    } catch {
      /* ignore */
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/50 p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="closed-title"
    >
      <div className="relative w-full max-w-md overflow-hidden rounded-xl bg-cream p-6 shadow-[var(--shadow-lift)]">
        <div className="absolute inset-x-0 top-0 h-1.5 bg-chili" />
        <p className="text-xs font-medium tracking-[0.2em] text-chili">اطلاعیه</p>
        <h2 id="closed-title" className="mt-2 font-display text-3xl text-ink">
          {content(c, "popup.title", "سفارش‌ها فعلاً بسته است")}
        </h2>
        <p className="mt-4 text-sm leading-7 text-muted">{settings.ordersClosedMessage}</p>
        {until ? (
          <p className="mt-4 rounded-md bg-cream-2 px-3 py-2 text-sm font-medium text-ink">
            تا {until}
          </p>
        ) : null}
        <button
          type="button"
          onClick={dismiss}
          className="mt-6 h-11 w-full rounded-md bg-paprika text-sm font-medium text-primary-foreground hover:bg-paprika-dark"
        >
          متوجه شدم
        </button>
      </div>
    </div>
  );
}
