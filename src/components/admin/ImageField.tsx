import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

async function fileToJpeg(file: File): Promise<string> {
  const bitmap = await createImageBitmap(file);
  const max = 1400;
  const scale = Math.min(1, max / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(bitmap.width * scale));
  canvas.height = Math.max(1, Math.round(bitmap.height * scale));
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("canvas");
  ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL("image/jpeg", 0.78);
}

export function ImageField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (next: string) => void;
}) {
  const ref = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      {value ? (
        <img
          src={value}
          alt=""
          className="h-28 w-full rounded-md object-cover outline outline-1 -outline-offset-1 outline-ink/10"
        />
      ) : (
        <div className="flex h-28 items-center justify-center rounded-md bg-cream-2 text-xs text-muted">
          تصویری انتخاب نشده
        </div>
      )}
      <Input
        value={value.startsWith("data:") ? "" : value}
        placeholder="آدرس تصویر یا بارگذاری فایل"
        onChange={(e) => onChange(e.target.value)}
      />
      <div className="flex gap-2">
        <button
          type="button"
          className="h-10 rounded-md border border-line bg-card px-3 text-xs font-medium"
          onClick={() => ref.current?.click()}
          disabled={busy}
        >
          {busy ? "در حال آماده‌سازی…" : "بارگذاری از دستگاه"}
        </button>
        {value ? (
          <button
            type="button"
            className="h-10 rounded-md px-3 text-xs text-chili"
            onClick={() => onChange("")}
          >
            حذف تصویر
          </button>
        ) : null}
      </div>
      <input
        ref={ref}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={async (e) => {
          const file = e.target.files?.[0];
          e.target.value = "";
          if (!file) return;
          setBusy(true);
          try {
            onChange(await fileToJpeg(file));
          } finally {
            setBusy(false);
          }
        }}
      />
    </div>
  );
}
