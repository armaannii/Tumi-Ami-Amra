"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";
import { buttonStyles } from "@/lib/ui";

/**
 * Newsletter signup with inline validation (valid email, no duplicates in
 * one session) and a success state — no alert() used, per assignment rules.
 */
export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const value = email.trim();
    if (!value) {
      setError("Please enter your email address.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
      setError("That doesn't look like a valid email — try again.");
      return;
    }
    setError(null);
    setStatus("loading");
    // Simulated submit — replaced by the real API call in the backend phase.
    window.setTimeout(() => setStatus("done"), 900);
  }

  return (
    <section id="newsletter" className="border-t-2 border-forest/10 bg-white py-20 dark:border-white/10 dark:bg-background lg:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Newsletter"
            title="Never miss a chance to help"
            subtitle="One email a week: the best upcoming events in your district, plus volunteer tips from the community."
          />
        </Reveal>

        <Reveal delay={150} className="mt-9">
          {status === "done" ? (
            <div
              role="status"
              className="mx-auto flex w-fit items-center gap-3 border-2 border-forest bg-brand px-6 py-4 text-forest dark:border-brand"
            >
              <CheckCircle2 className="size-5 shrink-0" />
              <p className="text-left text-sm font-semibold">
                You&apos;re on the list!
                <span className="block text-xs font-normal">
                  Watch your inbox for next week&apos;s picks.
                </span>
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="mx-auto max-w-xl">
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="flex-1">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError(null);
                    }}
                    placeholder="you@example.com"
                    aria-invalid={!!error}
                    aria-describedby={error ? "newsletter-error" : undefined}
                    className={`h-13 w-full border-2 bg-transparent px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none ${
                      error
                        ? "border-destructive"
                        : "border-forest/30 focus:border-forest dark:border-white/25 dark:focus:border-brand"
                    }`}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={buttonStyles("primary") + " h-13 shrink-0 disabled:opacity-70"}
                >
                  {status === "loading" ? (
                    <Loader2 className="size-4 animate-spin" />
                  ) : (
                    <Send className="size-4" />
                  )}
                  Subscribe
                </button>
              </div>
              {error && (
                <p
                  id="newsletter-error"
                  role="alert"
                  className="mt-3 text-sm text-destructive"
                >
                  {error}
                </p>
              )}
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
