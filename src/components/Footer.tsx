"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/context";

export default function Footer() {
  const { t } = useI18n();

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/events", label: t.nav.events },
    { href: "/sponsors", label: t.nav.sponsors },
    { href: "/about", label: t.nav.about },
  ];

  return (
    <footer className="bg-[#010810] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
        <div>
          <p className="font-bebas text-2xl tracking-wider text-white/50">
            CABO <span className="text-cv-gold/70">VERDE</span> 2026
          </p>
          <p className="mt-3 text-sm text-white/50 font-barlow max-w-xs leading-relaxed">
            info@smartcitycaboverde.com &middot; WhatsApp +238 926 73 50
          </p>
        </div>

        <div className="flex gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-barlow-cond font-bold text-xs uppercase tracking-widest text-white/50 hover:text-cv-gold transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/5 text-center text-xs text-white/40 font-barlow">
        &copy; 2026 Smart City Cabo Verde Foundation. {t.footer.rights}
      </div>
    </footer>
  );
}
