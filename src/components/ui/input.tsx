import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-11 w-full rounded-md border border-line bg-card px-3 text-sm text-ink",
        "placeholder:text-muted",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paprika/40",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
