import { Clock3, Flame, Users } from "lucide-react";
import { content } from "@/lib/cms/format";

const icons = [Flame, Clock3, Users];

export function Features({ map }: { map: Record<string, string> }) {
  const items = [1, 2, 3].map((n) => ({
    title: content(map, `feature.${n}.title`),
    body: content(map, `feature.${n}.body`),
    Icon: icons[n - 1]!,
  }));

  return (
    <section className="mx-auto grid max-w-6xl gap-4 px-4 py-10 sm:grid-cols-3 sm:px-6">
      {items.map((item) => (
        <article
          key={item.title}
          className="rounded-xl bg-card p-5 shadow-[var(--shadow-card)]"
        >
          <span className="inline-flex size-10 items-center justify-center rounded-md bg-herb/10 text-herb">
            <item.Icon className="size-5" />
          </span>
          <h2 className="mt-4 text-lg font-semibold text-ink">{item.title}</h2>
          <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
        </article>
      ))}
    </section>
  );
}
