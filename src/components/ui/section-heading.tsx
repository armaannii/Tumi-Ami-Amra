import { cn } from "cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Consistent section heading: lime eyebrow chip, uppercase Rubik title,
 * optional muted subtitle — used by every section on the home page.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "light",
  className,
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-block border-2 px-3 py-1 font-display text-[11px] font-bold tracking-[0.18em] uppercase",
            dark
              ? "border-brand/40 bg-brand/10 text-brand"
              : "border-forest/20 bg-brand/25 text-forest dark:border-brand/40 dark:bg-brand/10 dark:text-brand",
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "heading-caps mt-4 text-3xl sm:text-4xl lg:text-[2.75rem]",
          dark ? "text-white" : "text-forest dark:text-brand",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            dark ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
