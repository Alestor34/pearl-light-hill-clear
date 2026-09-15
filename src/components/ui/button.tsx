import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-[color,background-color,box-shadow,transform] duration-150 ease-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 active:not-disabled:scale-[0.96]",
  {
    variants: {
      variant: {
        default:
          "bg-paprika text-primary-foreground shadow-[0_1px_0_rgba(31,20,14,0.12)] hover:bg-paprika-dark",
        herb: "bg-herb text-secondary-foreground hover:bg-herb-dark",
        chili: "bg-chili text-primary-foreground hover:bg-chili/90",
        outline:
          "border border-ink/15 bg-cream text-ink hover:bg-cream-2",
        ghost: "text-ink hover:bg-cream-2",
        link: "text-paprika underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 rounded-md px-4",
        sm: "h-9 rounded-sm px-3 text-xs",
        lg: "h-12 rounded-lg px-6 text-base",
        icon: "size-11 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
