"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, LogOut, Menu, X } from "lucide-react";
import { cn } from "cn";
import ThemeToggle from "./theme-toggle";
import { signOut, useSession } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";


const navLinks = [
  { label: "Home", href: "/#hero" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Events", href: "/#recent-events" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/#newsletter" },
];

const userMenu = [
  { label: "Create Event", href: "/create-event" },
  { label: "Manage Events", href: "/manage-events" },
  { label: "Joined Events", href: "/joined-events" },
];

/**
 * Sticky top navigation: logo, section links, theme toggle, and either a
 * Login button or (while `demoUser` is set) an avatar dropdown with the
 * signed-in user's name shown on hover — per the assignment's navbar spec.
 */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { data: session, isPending } = useSession();
  const router = useRouter();


  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/pages/log-in");
        },
      },
    });
    toast.success("Sign Out successfull!")
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300 border-b-2 border-forest/10 bg-white/95 backdrop-blur dark:border-white/10 dark:bg-night/95"
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-22 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label="Tumi Ami Amra home"
        >

          <span className="font-display text-base leading-none font-black tracking-tight text-forest uppercase dark:text-brand lg:text-lg">
            Tumi<span className="text-brand dark:text-white"> Ami </span>Amra
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative py-1 font-display text-[13px] font-semibold tracking-wide text-forest uppercase transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-brand after:transition-transform hover:after:scale-x-100 dark:text-white dark:hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2.5">
          <ThemeToggle />

          {session?.user ? (
            <div ref={menuRef} className="relative hidden sm:block">
              <div className="flex gap-4 items-center">
                <button
                  type="button"
                  onClick={() => setMenuOpen((v) => !v)}
                  aria-expanded={menuOpen}
                  aria-haspopup="menu"
                  className="group flex items-center gap-3 py-1.5 pr-2 pl-1.5 transition-colors rounded-2xl border-2 hover:bg-brand dark:border-brand dark:hover:bg-forest"
                >
                  {/* Hover display name (assignment: avatar hover → user name) */}
                  <span className="max-w-0 overflow-hidden font-display text-xs font-semibold whitespace-nowrap text-forest uppercase opacity-0 transition-all duration-300 group-hover:max-w-40 group-hover:opacity-100 dark:text-brand">
                    {session.user.name}
                  </span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={session.user.image || " "}
                    alt={session.user.name}
                    width={34}
                    height={34}
                    className="size-8.5 rounded-full object-cover"
                  />
                  <ChevronDown
                    className={cn(
                      "size-4 text-forest transition-transform dark:text-brand",
                      menuOpen && "rotate-180",
                    )}
                  />
                </button>
                <Button
                  onClick={() => handleSignOut()}
                  className="font-bold py-6 hover:text-red-700 hover:bg-red-100"
                >
                  <LogOut size={17} />
                  Log Out
                </Button>
              </div>

              {menuOpen && (
                <div
                  role="menu"
                  className="absolute right-0 mt-2 w-52 border-2 border-forest bg-white shadow-[6px_6px_0_0_var(--brand)] dark:border-brand dark:bg-forest"
                >
                  <div className="border-b-2 border-forest/10 px-4 py-3 dark:border-white/10">
                    <p className="font-display text-sm font-bold text-forest uppercase dark:text-brand">
                      {session.user.name}
                    </p>
                    <p className="truncate text-xs text-muted-foreground">
                      {session.user.email}
                    </p>
                  </div>
                  {userMenu.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      role="menuitem"
                      onClick={() => setMenuOpen(false)}
                      className="block px-4 py-2.5 font-display text-xs font-semibold tracking-wide text-forest uppercase transition-colors hover:bg-brand hover:text-forest dark:text-white dark:hover:text-forest"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="border-t-2 border-forest/10 dark:border-white/10">
                    <Button
                      onClick={() => handleSignOut()}
                      className="font-bold text-red-600 bg-white dark:bg-forest"
                    >
                      <LogOut size={17} />
                      Log Out
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/pages/log-in"
              className="hidden border-2 border-gray bg-brand px-5 py-2.5 font-display text-xs font-bold tracking-wide text-forest uppercase transition-colors hover:bg-forest hover:text-brand sm:inline-flex dark:border-brand dark:hover:bg-brand dark:hover:text-forest rounded-2xl"
            >
              Log In
            </Link>
          )}

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="flex size-10 items-center justify-center border-2 border-forest/20 text-forest dark:border-white/25 dark:text-brand lg:hidden"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      {mobileOpen && (
        <nav
          aria-label="Mobile"
          className="border-t-2 border-forest/10 bg-white px-4 pb-6 pt-3 dark:border-white/10 dark:bg-night lg:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block border-b border-forest/10 py-3 font-display text-sm font-semibold tracking-wide text-forest uppercase dark:border-white/10 dark:text-white"
            >
              {link.label}
            </Link>
          ))}
          {session?.user ? (
            userMenu.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 font-display text-sm font-semibold tracking-wide text-brand uppercase dark:text-brand"
              >
                {item.label}
              </Link>
            ))
          ) : (
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="mt-4 inline-flex border-2 border-forest bg-brand px-6 py-3 font-display text-sm font-bold text-forest uppercase"
            >
              Login
            </Link>
          )}
        </nav>
      )}
    </header>
  );
}
