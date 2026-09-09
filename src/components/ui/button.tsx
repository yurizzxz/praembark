import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        brand:
          "min-h-12 rounded-none bg-primary px-6 text-sm font-semibold text-white transition-colors hover:bg-sky-700 focus-visible:border-transparent focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700",
        accent:
          "min-h-12 rounded-none bg-sky-300 px-6 text-sm font-semibold text-primary transition-colors duration-300 hover:bg-white focus-visible:border-transparent focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-200",
        accentLarge:
          "min-h-12 rounded-none bg-sky-300 px-5 text-base font-semibold text-primary transition-colors hover:bg-white focus-visible:border-transparent focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-200",
        outlineLight:
          "min-h-10 rounded-none border border-sky-300 px-5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-sky-300 hover:text-primary focus-visible:ring-0",
        navigation:
          "h-auto rounded-none bg-transparent px-0 py-0 text-xs font-semibold uppercase tracking-[0.13em] text-white/80 transition-colors hover:text-white focus-visible:border-transparent focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-200",
        navigationMobile:
          "min-h-16 w-full justify-start rounded-none border-b border-white/15 px-0 py-0 text-left text-lg text-white transition-none focus-visible:ring-0",
        navigationIcon:
          "size-11 rounded-none bg-transparent p-0 text-white transition-none focus-visible:ring-0",
        textAction:
          "h-auto min-h-11 rounded-none border-b border-primary px-0 py-0 pb-1 text-sm font-semibold text-primary transition-none focus-visible:border-primary focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-600",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const variantsWithOwnSize = [
  "brand",
  "accent",
  "accentLarge",
  "outlineLight",
  "navigation",
  "navigationMobile",
  "navigationIcon",
  "textAction",
]

function Button({
  className,
  variant = "default",
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"
  const resolvedSize =
    size ?? (variantsWithOwnSize.includes(variant ?? "default") ? null : "default")

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={resolvedSize ?? undefined}
      className={cn(
        buttonVariants({ variant, size: resolvedSize, className })
      )}
      {...props}
    />
  )
}

export { Button }
