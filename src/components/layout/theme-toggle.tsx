"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

/**
 * Light/dark theme toggle. Flips the `dark` class on <html> and remembers
 * the choice in localStorage (matches the preference on first load via an
 * inline script in the navbar's server-rendered shell — see layout script).
 */
export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex size-10 items-center justify-center border-2 border-forest/20 text-forest transition-colors hover:border-brand hover:bg-brand hover:text-forest dark:border-white/25 dark:text-brand dark:hover:border-brand dark:hover:bg-brand dark:hover:text-forest"
    >
      {mounted ? (
        dark ? (
          <Moon className="size-4.5" />
        ) : (
          <Sun className="size-4.5" />
        )
      ) : (
        <Sun className="size-4.5" />
      )}
    </button>
  );
}
