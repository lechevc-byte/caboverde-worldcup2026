"use client";

import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import { useI18n } from "@/i18n/context";

export default function SponsorsPage() {
  const { t } = useI18n();

  const whySponsor = [
    { icon: "\u{1F30D}", title: t.sponsors.why1Title, desc: t.sponsors.why1Desc },
    { icon: "\u{1F91D}", title: t.sponsors.why2Title, desc: t.sponsors.why2Desc },
    { icon: "\u{1F4E1}", title: t.sponsors.why3Title, desc: t.sponsors.why3Desc },
    { icon: "\u{1F3C6}", title: t.sponsors.why4Title, desc: t.sponsors.why4Desc },
  ];

  const packages = [
    { name: t.sponsors.platinum, price: t.sponsors.platPrice, slots: t.sponsors.platSlots, color: "#B0C0D0", features: [t.sponsors.platF1, t.sponsors.platF2, t.sponsors.platF3, t.sponsors.platF4, t.sponsors.platF5, t.sponsors.platF6, t.sponsors.platF7, t.sponsors.platF8] },
    { name: t.sponsors.gold, price: t.sponsors.goldPrice, slots: t.sponsors.goldSlots, color: "#F5A623", features: [t.sponsors.goldF1, t.sponsors.goldF2, t.sponsors.goldF3, t.sponsors.goldF4, t.sponsors.goldF5, t.sponsors.goldF6, t.sponsors.goldF7] },
    { name: t.sponsors.silver, price: t.sponsors.silverPrice, slots: t.sponsors.silverSlots, color: "#98aab8", features: [t.sponsors.silverF1, t.sponsors.silverF2, t.sponsors.silverF3, t.sponsors.silverF4, t.sponsors.silverF5] },
    { name: t.sponsors.bronze, price: t.sponsors.bronzePrice, slots: t.sponsors.bronzeSlots, color: "#c0783a", features: [t.sponsors.bronzeF1, t.sponsors.bronzeF2, t.sponsors.bronzeF3, t.sponsors.bronzeF4] },
  ];

  const compareRows = [
    { label: t.sponsors.cNaming, plat: true, gold: true, silver: false, bronze: false },
    { label: t.sponsors.cLogo, plat: true, gold: false, silver: false, bronze: false },
    { label: t.sponsors.cScreens, plat: true, gold: true, silver: false, bronze: false },
    { label: t.sponsors.cDigital, plat: true, gold: true, silver: true, bronze: true },
    { label: t.sponsors.cStage, plat: true, gold: false, silver: false, bronze: false },
    { label: t.sponsors.cVip, plat: true, gold: true, silver: false, bronze: false },
    { label: t.sponsors.cInvitations, plat: true, gold: true, silver: true, bronze: true },
    { label: t.sponsors.cDelegation, plat: true, gold: true, silver: false, bronze: false },
    { label: t.sponsors.cDealRoom, plat: true, gold: true, silver: true, bronze: true },
    { label: t.sponsors.cLegacy, plat: true, gold: true, silver: false, bronze: false },
  ];

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="hero-bg min-h-[55vh] flex items-center pt-16 overflow-hidden"
        style={{ backgroundImage: "url('/img/players-celebrate.png')" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
          <p className="section-label mb-4">{t.sponsors.heroLabel}</p>
          <h1 className="font-bebas leading-[0.92]" style={{ fontSize: "clamp(4rem, 10vw, 8rem)" }}>
            <span className="text-cv-white">{t.sponsors.heroTitle1}</span><br />
            <span className="text-cv-gold">{t.sponsors.heroTitle2}</span>
          </h1>
          <p className="mt-6 max-w-lg text-cv-white/80 text-[0.95rem] leading-[1.72]">{t.sponsors.heroText}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="#packages" className="btn-primary">{t.sponsors.viewPackages}</Link>
            <Link href="#contact-sponsor" className="btn-secondary">{t.sponsors.contactUs}</Link>
          </div>
        </div>
      </section>

      {/* ── WHY SPONSOR ── */}
      <section className="bg-navy py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <p className="section-label mb-4">{t.sponsors.whyLabel}</p>
            <h2 className="section-title">{t.sponsors.whyTitle}</h2>
          </FadeUp>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px">
            {whySponsor.map((c, i) => (
              <FadeUp key={c.title} delay={i * 0.1}>
                <div className="border border-cv-gold/25 p-8 h-full hover:bg-cv-blue/15 transition-colors">
                  <span className="text-3xl">{c.icon}</span>
                  <h3 className="font-barlow-cond font-bold uppercase tracking-wider text-cv-white mt-4">{c.title}</h3>
                  <p className="text-white/70 text-sm mt-2 leading-relaxed">{c.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── PACKAGES ── */}
      <section id="packages" className="bg-dark py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <p className="section-label mb-4">{t.sponsors.packagesLabel}</p>
            <h2 className="section-title">{t.sponsors.packagesTitle}</h2>
          </FadeUp>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px">
            {packages.map((p, i) => (
              <FadeUp key={p.name} delay={i * 0.1}>
                <div className="border border-cv-gold/25 p-6 h-full flex flex-col relative">
                  <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: p.color }} />
                  <h3 className="font-bebas text-2xl mt-2">{p.name}</h3>
                  <p className="font-bebas text-xl text-cv-gold mt-1">{p.price}</p>
                  <p className="font-barlow-cond text-xs uppercase tracking-wider text-white/60 mt-1">{p.slots}</p>
                  <ul className="mt-6 space-y-2 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="text-white/75 text-sm flex items-start gap-2">
                        <span className="text-cv-gold mt-0.5">&#10022;</span> {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="#contact-sponsor" className="btn-secondary mt-6 text-center text-sm">{t.sponsors.apply}</Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACTIVATION SPONSORS ── */}
      <section className="bg-dark py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <div className="border border-cv-gold/25 p-8 md:p-10 relative">
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: "#F5A623" }} />
              <h3 className="font-bebas text-3xl mt-2">ACTIVATION SPONSORS — ~5K$</h3>
              <p className="font-barlow-cond font-bold text-sm uppercase tracking-wider text-cv-gold mt-1">Experience Partners</p>
              <p className="text-white/70 text-sm mt-2">Special category for interactive sponsor activations</p>
              <p className="font-bebas text-xl text-cv-gold mt-4">€5,000 <span className="text-white/60 text-sm font-barlow">depending on activation</span></p>

              <div className="mt-8">
                <p className="font-barlow-cond font-bold text-xs uppercase tracking-wider text-white/60 mb-3">Examples</p>
                <div className="flex flex-wrap gap-2">
                  {["Technology Booth", "Media Booth", "Photo Booth", "Food Pavilion", "Beverage Partner", "Merchandise Partner"].map((a) => (
                    <span key={a} className="border border-white/15 px-4 py-2 text-white/80 text-sm">{a}</span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <p className="font-barlow-cond font-bold text-xs uppercase tracking-wider text-white/60 mb-3">Benefits</p>
                <ul className="space-y-2">
                  {[
                    "Exclusive category branding",
                    "Interactive brand activation with attendees",
                    "Product sampling / demonstrations",
                    "Logo on booth signage and event map",
                    "Inclusion in event promotions",
                  ].map((b) => (
                    <li key={b} className="text-white/75 text-sm flex items-start gap-2">
                      <span className="text-cv-gold mt-0.5">&#10022;</span> {b}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-8 text-white/50 text-xs leading-relaxed italic">
                These activations support the fan-zone style experience, including raffles, merchandise, storytelling booths, and interactive sponsor rows.
              </p>

              <Link href="#contact-sponsor" className="btn-secondary mt-6 text-center text-sm inline-block">Apply Now</Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="bg-dark py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <p className="section-label mb-4">{t.sponsors.compareLabel}</p>
            <h2 className="section-title mb-10">{t.sponsors.compareTitle}</h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-cv-gold/30">
                    <th className="text-left py-3 pr-4" />
                    {[t.sponsors.platinum, t.sponsors.gold, t.sponsors.silver, t.sponsors.bronze].map((h) => (
                      <th key={h} className="py-3 px-4 font-barlow-cond font-bold uppercase tracking-wider text-cv-gold text-xs text-center">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((r) => (
                    <tr key={r.label} className="border-b border-white/8">
                      <td className="py-3 pr-4 text-white/75">{r.label}</td>
                      {[r.plat, r.gold, r.silver, r.bronze].map((v, j) => (
                        <td key={j} className="py-3 px-4 text-center">
                          {v ? <span className="text-cv-gold">&#10022;</span> : <span className="text-white/25">&ndash;</span>}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── SPONSOR FORM ── */}
      <section id="contact-sponsor" className="bg-navy py-20 px-6 md:px-12">
        <div className="max-w-2xl mx-auto">
          <FadeUp>
            <p className="section-label mb-4">{t.sponsors.formLabel}</p>
            <h2 className="section-title mb-10">{t.sponsors.formTitle}</h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <form className="grid sm:grid-cols-2 gap-4">
              <input type="text" placeholder={t.sponsors.fullName} required />
              <input type="text" placeholder={t.sponsors.company} required />
              <input type="email" placeholder="Email" required className="sm:col-span-2" />
              <input type="tel" placeholder={t.sponsors.phone} />
              <select>
                <option value="">{t.sponsors.desiredPackage}</option>
                <option>Platinum — $50K</option>
                <option>Gold — $25K</option>
                <option>Silver — $10K</option>
                <option>Bronze — $5K</option>
                <option>Activation — ~$5K</option>
              </select>
              <div className="sm:col-span-2">
                <p className="text-white/60 text-xs mb-2 font-barlow-cond uppercase tracking-wider">{t.sponsors.targetCities}</p>
                <div className="flex gap-6">
                  {["Atlanta", "Miami", "Houston"].map((v) => (
                    <label key={v} className="flex items-center gap-2 text-white/75 text-sm cursor-pointer">
                      <input type="checkbox" value={v} className="w-4 h-4 accent-cv-gold" /> {v}
                    </label>
                  ))}
                </div>
              </div>
              <textarea placeholder={t.events.messageOpt} rows={3} className="sm:col-span-2" />
              <div className="sm:col-span-2">
                <button type="submit" className="btn-primary w-full text-center">{t.sponsors.submitRequest}</button>
              </div>
            </form>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
