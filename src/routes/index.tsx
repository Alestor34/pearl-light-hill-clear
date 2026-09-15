import { createFileRoute } from "@tanstack/react-router";
import { Storefront } from "@/components/site/Storefront";
import { fetchPublicSite } from "@/lib/cms/api";

export const Route = createFileRoute("/")({
  loader: () => fetchPublicSite(),
  component: Home,
  pendingComponent: Pending,
});

function Home() {
  const data = Route.useLoaderData();
  return <Storefront data={data} />;
}

function Pending() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-cream text-muted">
      در حال چیدن سینی…
    </div>
  );
}
