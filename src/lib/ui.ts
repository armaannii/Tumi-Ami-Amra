import { cn } from "cn";

/**
 * Shared button styles used across every section so all CTAs match
 * (assignment requirement: "Use the same button style as on the home page").
 */
export function buttonStyles(
  variant: "primary" | "outline" | "light" = "primary",
): string {
  return cn(
    "inline-flex items-center justify-center gap-2 border-2 px-6 py-3 font-display text-sm font-semibold uppercase tracking-wide transition-colors duration-200",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest dark:focus-visible:outline-brand",
    variant === "primary" &&
      "border-brand bg-brand text-forest hover:border-forest hover:bg-forest hover:text-brand",
    variant === "outline" &&
      "border-forest bg-transparent text-forest hover:bg-forest hover:text-white dark:border-brand dark:text-brand dark:hover:bg-brand dark:hover:text-forest",
    variant === "light" &&
      "border-white bg-transparent text-white hover:border-brand hover:bg-brand hover:text-forest",
  );
}
