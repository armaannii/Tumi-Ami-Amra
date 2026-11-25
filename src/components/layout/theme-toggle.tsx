"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

/**
 * Light/dark theme toggle. Flips the `dark` class on <html> and remembers
 * the choice in localStorage. DOM class state is read via useSyncExternalStore
 * so the button hydrates without a mismatch or extra render pass.
 */

function subscribe(onStoreChange: () => void) {
  const observer = new MutationObserver(onStoreChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  window.addEventListener("storage", onStoreChange);
  return () => {
    observer.disconnect();
    window.removeEventListener("storage", onStoreChange);
  };
}

function getSnapshot() {
  return document.documentElement.classList.contains("dark");
}

function getServerSnapshot() {
  return false;
}

function toggleTheme() {
  const next = !document.documentElement.classList.contains("dark");
  document.documentElement.classList.toggle("dark", next);
  localStorage.setItem("theme", next ? "dark" : "light");
}

export default function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex size-10 items-center justify-center border-2 border-forest/20 text-forest rounded-full transition-colors hover:border-brand hover:bg-brand hover:text-forest dark:border-white/25 dark:text-brand dark:hover:border-brand dark:hover:bg-brand dark:hover:text-forest"
    >
      {dark ? <Moon className="size-4.5" /> : <Sun className="size-4.5" />}
    </button>
  );
}
