import { Toaster as Sonner } from "sonner";

function Toaster() {
  return (
    <Sonner
      dir="rtl"
      toastOptions={{
        classNames: {
          toast: "font-[Vazirmatn] bg-card text-ink border-line",
        },
      }}
    />
  );
}

export { Toaster };
