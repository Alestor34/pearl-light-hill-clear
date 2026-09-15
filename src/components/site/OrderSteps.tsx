import { content } from "@/lib/cms/format";

export function OrderSteps({ map }: { map: Record<string, string> }) {
  const steps = [1, 2, 3].map((n) => ({
    n,
    title: content(map, `order.${n}.title`),
    body: content(map, `order.${n}.body`),
  }));

  return (
    <section className="bg-herb text-secondary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <p className="text-sm font-medium tracking-[0.22em] text-cream/80">
          {content(map, "order.kicker")}
        </p>
        <h2 className="mt-2 font-display text-4xl sm:text-5xl">{content(map, "order.title")}</h2>
        <ol className="mt-10 grid gap-6 sm:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n} className="rounded-xl bg-herb-dark/40 p-5">
              <span className="font-display text-3xl text-cream/50 tabular-nums">
                {String(s.n).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-cream/80">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
