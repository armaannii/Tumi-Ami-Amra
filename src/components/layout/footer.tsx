import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const COLUMNS = [
  {
    title: "Explore",
    links: [
      { label: "Upcoming Events", href: "/#recent-events" },
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Gallery", href: "/#gallery" },
      { label: "Testimonials", href: "/#testimonials" },
    ],
  },
  {
    title: "For Organisers",
    links: [
      { label: "Create Event", href: "/create-event" },
      { label: "Manage Events", href: "/manage-events" },
      { label: "Joined Events", href: "/joined-events" },
      { label: "Event Guidelines", href: "/#how-it-works" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Login", href: "/login" },
      { label: "Register", href: "/register" },
      { label: "Password Reset", href: "/forgot-password" },
    ],
  },
];

/* Simple inline brand glyphs — lucide has no social logos */
const SOCIALS: { label: string; href: string; path: string }[] = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    path: "M13.5 21v-7h2.4l.4-2.8h-2.8V9.4c0-.8.2-1.4 1.4-1.4h1.5V5.5c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.1H8v2.8h2.5v7h3z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    path: "M12 7.4a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm5.9-7.8a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0zM16.7 4.5H7.3A2.8 2.8 0 0 0 4.5 7.3v9.4a2.8 2.8 0 0 0 2.8 2.8h9.4a2.8 2.8 0 0 0 2.8-2.8V7.3a2.8 2.8 0 0 0-2.8-2.8zm1.2 12.2a1.2 1.2 0 0 1-1.2 1.2H7.3a1.2 1.2 0 0 1-1.2-1.2V7.3a1.2 1.2 0 0 1 1.2-1.2h9.4a1.2 1.2 0 0 1 1.2 1.2v9.4z",
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    path: "M21.6 8s-.2-1.4-.8-2c-.7-.8-1.6-.8-2-.9C16.9 4.9 12 4.9 12 4.9s-4.9 0-6.8.2c-.4 0-1.3.1-2 .9-.6.6-.8 2-.8 2S2.2 9.6 2.2 11.3v1.5c0 1.6.2 3.3.2 3.3s.2 1.4.8 2c.7.8 1.7.7 2.1.8 1.6.2 6.7.2 6.7.2s4.9 0 6.8-.2c.4-.1 1.3-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.3v-1.5c0-1.6-.2-3.2-.2-3.2zM9.9 14.6V9.1l5.2 2.8-5.2 2.7z",
  },
  {
    label: "X",
    href: "https://x.com",
    path: "M17.2 4.5h2.4l-5.3 6 6.2 8.2h-4.9l-3.8-5-4.4 5H5l5.7-6.5L4.7 4.5h5l3.5 4.6 4-4.6zm-.9 12.7h1.3L8.4 5.9H7l9.3 11.3z",
  },
];

const CONTACTS = [
  { icon: MapPin, text: "House 42, Road 11, Banani, Dhaka 1213" },
  { icon: Phone, text: "+880 1700-000000" },
  { icon: Mail, text: "hello@tumi-amiamra.org" },
];

/* Evaluated once at module load — stable across prerenders (cacheComponents
   forbids new Date() called during render). */
const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t-4 border-brand bg-night text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2.5">
              
              <span className="font-display text-lg font-black tracking-tight text-white uppercase">
                Tumi <span className="text-brand">Ami Amra</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              A citizen-powered platform where neighbours meet causes. Discover
              social development events near you, lend a hand, and track every
              hour you give back to your community.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex size-10 items-center justify-center border border-white/25 text-white/80 transition-colors hover:border-brand hover:bg-brand hover:text-forest"
                >
                  <svg viewBox="0 0 24 24" className="size-4.5" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <nav key={col.title} className="lg:col-span-2" aria-label={col.title}>
              <h3 className="font-display text-sm font-bold tracking-wider text-brand uppercase">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-brand"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Contact */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-bold tracking-wider text-brand uppercase">
              Reach Us
            </h3>
            <ul className="mt-4 space-y-3">
              {CONTACTS.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-2.5 text-sm text-white/70">
                  <Icon className="mt-0.5 size-4 shrink-0 text-brand" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/15 pt-6 sm:flex-row">
          <p className="text-xs text-white/55">
            © {YEAR} Tumi Ami Amra. All rights reserved.
          </p>
          <p className="text-xs text-white/55">
            Built for communities, by communities.
          </p>
        </div>
      </div>
    </footer>
  );
}
