import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/**
 * Shared layout + class hooks for the log-in and sign-up pages so both forms
 * use the same look as the rest of the site: mist background with a dot grid,
 * lime eyebrow chip, uppercase Rubik heading, and a hard-shadowed card.
 */

export const authFieldLabel =
  "font-display text-[11px] font-bold tracking-[0.16em] text-forest uppercase dark:text-brand";

export const authFieldInput =
  "h-12 w-full rounded-none border-2 border-forest/25 bg-white px-4 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-forest dark:border-white/20 dark:bg-transparent dark:focus:border-brand";

export const authSubmitButton = "h-12 w-full rounded-none disabled:opacity-70";

export const authSocialButton = "h-12 w-full rounded-none";

/** Multi-colour Google "G" mark (lucide-brands has no Google icon). */
export function GoogleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className="size-4 shrink-0"
    >
      <path
        fill="#4285F4"
        d="M23.06 12.25c0-.85-.08-1.67-.22-2.45H12v4.63h6.2a5.3 5.3 0 0 1-2.3 3.48v2.9h3.72c2.18-2 3.44-4.96 3.44-8.56z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.11 0 5.72-1.03 7.62-2.79l-3.72-2.9c-1.03.69-2.35 1.1-3.9 1.1-3 0-5.54-2.02-6.45-4.75H1.71v2.98A11.5 11.5 0 0 0 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.55 14.66a6.9 6.9 0 0 1 0-4.42V7.26H1.71a11.5 11.5 0 0 0 0 10.34l3.84-2.94z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.69 0 3.21.58 4.4 1.72l3.3-3.3C17.72 1.2 15.11 0 12 0 7.36 0 3.36 2.68 1.71 6.64l3.84 2.98C6.46 6.87 9 4.75 12 4.75z"
      />
    </svg>
  );
}

type AuthShellProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  children: ReactNode;
  backLabel?: string;
};

export default function AuthShell({
  eyebrow,
  title,
  subtitle,
  children,
  backLabel = "Back to home",
}: AuthShellProps) {
  return (
    <div className="relative isolate flex min-h-screen flex-col overflow-hidden bg-mist px-4 pt-28 pb-14 sm:px-6 dark:bg-night">
      {/* Decorative dot grid + bleeding brand blocks */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-30 dark:opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(var(--forest) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -top-16 -left-16 -z-10 size-56 rotate-12 border-2 border-forest/15 bg-brand/25 dark:border-white/10 dark:bg-brand/10"
      />
      <div
        aria-hidden="true"
        className="absolute -right-20 -bottom-24 -z-10 size-72 -rotate-12 border-2 border-forest/15 bg-secondary/30 dark:border-white/10 dark:bg-secondary/10"
      />

      <div className="relative m-auto flex w-full max-w-md flex-col items-center py-4">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-block border-2 border-forest/20 bg-brand/25 px-3 py-1 font-display text-[11px] font-bold tracking-[0.18em] text-forest uppercase dark:border-brand/40 dark:bg-brand/10 dark:text-brand">
            {eyebrow}
          </span>
          <h1 className="heading-caps mt-4 text-3xl text-forest sm:text-4xl dark:text-brand">
            {title}
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {subtitle}
          </p>
        </div>

        {/* Form card */}
        <div className="mt-8 w-full border-2 border-forest bg-white p-5 shadow-[8px_8px_0_0_var(--brand)] sm:p-7 dark:border-brand dark:bg-card">
          {children}
        </div>

        {/* Back to home */}
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 font-display text-xs font-semibold tracking-wide text-muted-foreground uppercase transition-colors hover:text-forest dark:hover:text-brand"
        >
          <ArrowLeft className="size-3.5" />
          {backLabel}
        </Link>
      </div>
    </div>
  );
}
