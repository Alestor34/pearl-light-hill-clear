import { createFileRoute } from "@tanstack/react-router";
import { AdminApp } from "@/components/admin/AdminApp";

export const Route = createFileRoute("/admin")({
  component: AdminPage,
});

function AdminPage() {
  return <AdminApp />;
}
