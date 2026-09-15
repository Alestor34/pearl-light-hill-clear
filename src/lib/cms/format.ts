export function formatToman(n: number): string {
  return `${new Intl.NumberFormat("fa-IR").format(n)} تومان`;
}

export function formatFaDate(iso: string | null | undefined): string {
  if (!iso) return "";
  const raw = iso.length === 10 ? `${iso}T12:00:00` : iso;
  const d = new Date(raw);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function digitsOnly(phone: string): string {
  return phone.replace(/[^\d]/g, "");
}

export function waLink(phone: string, text?: string): string {
  const n = digitsOnly(phone);
  const q = text ? `?text=${encodeURIComponent(text)}` : "";
  return `https://wa.me/${n}${q}`;
}

export function igLink(handle: string): string {
  const h = handle.replace(/^@/, "").trim();
  return `https://www.instagram.com/${h}/`;
}

export function telLink(phone: string): string {
  const n = digitsOnly(phone);
  return n.startsWith("00") ? `tel:+${n.slice(2)}` : `tel:+${n}`;
}

export function content(
  map: Record<string, string>,
  key: string,
  fallback = "",
): string {
  const v = map[key];
  return v == null || v === "" ? fallback : v;
}

export function isOrdersClosed(
  closed: boolean,
  until: string | null,
): boolean {
  if (!closed) return false;
  if (!until) return true;
  const today = new Date();
  const y = today.getFullYear();
  const m = String(today.getMonth() + 1).padStart(2, "0");
  const d = String(today.getDate()).padStart(2, "0");
  return until >= `${y}-${m}-${d}`;
}
