"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n, Locale } from "@/i18n/context";

export default function Navbar() {
  const pathname = usePathname();
  const { t, locale, setLocale } = useI18n();

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/events", label: t.nav.events },
    { href: "/sponsors", label: t.nav.sponsors },
    { href: "/about", label: t.nav.about },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 md:px-12 bg-dark/80 backdrop-blur-md border-b border-white/5">
      <Link href="/" className="font-bebas text-2xl tracking-wider">
        CABO <span className="text-cv-gold">VERDE</span>{" "}
        <span className="text-cv-white">2026</span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={`font-barlow-cond font-bold text-sm uppercase tracking-widest transition-colors ${
              pathname === l.href ? "text-cv-gold" : "text-cv-white/60 hover:text-cv-white"
            }`}
          >
            {l.label}
          </Link>
        ))}

        {/* Language switcher */}
        <div className="flex items-center border border-white/15 overflow-hidden">
          {(["en", "pt"] as Locale[]).map((l) => (
            <button
              key={l}
              onClick={() => setLocale(l)}
              className={`px-3 py-1.5 font-barlow-cond font-bold text-xs uppercase tracking-wider transition-colors ${
                locale === l
                  ? "bg-cv-gold text-navy"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {l === "en" ? "EN" : "PT"}
            </button>
          ))}
        </div>

        <Link href="/events" className="btn-primary text-sm">
          {t.nav.bookNow} &rarr;
        </Link>
      </div>

      <MobileMenu pathname={pathname} />
    </nav>
  );
}

function MobileMenu({ pathname }: { pathname: string }) {
  const { t, locale, setLocale } = useI18n();

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/events", label: t.nav.events },
    { href: "/sponsors", label: t.nav.sponsors },
    { href: "/about", label: t.nav.about },
  ];

  return (
    <div className="md:hidden flex items-center gap-3">
      {/* Mobile lang switcher */}
      <div className="flex items-center border border-white/15 overflow-hidden">
        {(["en", "pt"] as Locale[]).map((l) => (
          <button
            key={l}
            onClick={() => setLocale(l)}
            className={`px-2 py-1 font-barlow-cond font-bold text-xs uppercase tracking-wider transition-colors ${
              locale === l
                ? "bg-cv-gold text-navy"
                : "text-white/60 hover:text-white"
            }`}
          >
            {l === "en" ? "EN" : "PT"}
          </button>
        ))}
      </div>

      <details className="relative">
        <summary className="list-none cursor-pointer text-cv-white">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </summary>
        <div className="absolute right-0 top-10 bg-dark border border-white/10 p-4 flex flex-col gap-4 min-w-[200px]">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-barlow-cond font-bold text-sm uppercase tracking-widest ${
                pathname === l.href ? "text-cv-gold" : "text-cv-white/60"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/events" className="btn-primary text-sm text-center">
            {t.nav.bookNow} &rarr;
          </Link>
        </div>
      </details>
    </div>
  );
}
