"use client";

import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import { useI18n } from "@/i18n/context";

export default function AboutPage() {
  const { t } = useI18n();

  const orgs = [
    { icon: "\u{1F3D9}", name: t.about.org1, desc: t.about.org1d },
    { icon: "\u{1F469}\u200D\u{1F4BC}", name: t.about.org2, desc: t.about.org2d },
    { icon: "\u{1F1FA}\u{1F1F8}", name: t.about.org3, desc: t.about.org3d },
    { icon: "\u2728", name: t.about.org4, desc: t.about.org4d },
  ];

  const legacy = [
    { icon: "\u{1F3AE}", title: t.about.leg1, desc: t.about.leg1d },
    { icon: "\u{1F4BC}", title: t.about.leg2, desc: t.about.leg2d },
    { icon: "\u{1F4CB}", title: t.about.leg3, desc: t.about.leg3d },
  ];

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="hero-bg min-h-[55vh] flex items-center pt-16 overflow-hidden"
        style={{ backgroundImage: "url('/img/stadium-aerial.png')" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
          <p className="section-label mb-4">{t.about.heroLabel}</p>
          <h1 className="font-bebas leading-[0.92]" style={{ fontSize: "clamp(4rem, 10vw, 8rem)" }}>
            {t.about.heroTitle}
          </h1>
          <p className="mt-6 max-w-lg text-cv-white/80 text-[0.95rem] leading-[1.72]">{t.about.heroText}</p>
        </div>
      </section>

      {/* ── ORGANISATIONS ── */}
      <section className="bg-navy py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <p className="section-label mb-4">{t.about.orgsLabel}</p>
            <h2 className="section-title">{t.about.orgsTitle}</h2>
          </FadeUp>
          <div className="mt-12 grid sm:grid-cols-2 gap-px">
            {orgs.map((o, i) => (
              <FadeUp key={o.name} delay={i * 0.1}>
                <div className="border border-cv-gold/25 p-8 h-full hover:bg-cv-blue/15 transition-colors">
                  <span className="text-3xl">{o.icon}</span>
                  <h3 className="font-barlow-cond font-bold uppercase tracking-wider text-cv-white mt-4">{o.name}</h3>
                  <p className="text-white/70 text-sm mt-2 leading-relaxed">{o.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── GOVERNMENT ALIGNMENT ── */}
      <section className="bg-dark py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <p className="text-5xl mb-6">{"\u{1F1E8}\u{1F1FB}"}</p>
            <p className="font-barlow-cond font-bold text-sm uppercase tracking-[0.3em] text-cv-gold mb-4">{t.about.alignLabel}</p>
            <div className="space-y-2 text-white/80 text-[0.95rem] leading-relaxed">
              <p>{t.about.align1}</p>
              <p>{t.about.align2}</p>
              <p>{t.about.align3}</p>
              <p>{t.about.align4}</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="bg-cv-blue py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <p className="font-bebas leading-[1.1] text-cv-white" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              &ldquo;{t.about.missionQuote}{" "}
              <span className="text-cv-gold">{t.about.missionHighlight}</span>{" "}
              {t.about.missionEnd}&rdquo;
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── LEGACY ── */}
      <section
        className="relative py-20 px-6 md:px-12 overflow-hidden"
        style={{ background: "var(--dark)" }}
      >
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <p className="section-label mb-4">{t.about.legacyLabel}</p>
            <h2 className="section-title">{t.about.legacyTitle}</h2>
          </FadeUp>
          <div className="mt-12 grid md:grid-cols-3 gap-px">
            {legacy.map((l, i) => (
              <FadeUp key={l.title} delay={i * 0.1}>
                <div className="border border-cv-gold/25 bg-black/20 backdrop-blur-sm p-8 h-full">
                  <span className="text-3xl">{l.icon}</span>
                  <h3 className="font-barlow-cond font-bold uppercase tracking-wider text-cv-white mt-4">{l.title}</h3>
                  <p className="text-white/70 text-sm mt-2 leading-relaxed">{l.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="bg-navy py-20 px-6 md:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <FadeUp>
            <p className="section-label justify-center mb-4">{t.about.contactLabel}</p>
            <h2 className="section-title mb-6">{t.about.contactTitle}</h2>
            <p className="text-white/75 text-[0.95rem] leading-relaxed mb-8">
              info@smartcitycaboverde.com &middot; WhatsApp +238 926 73 50
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:info@smartcitycaboverde.com" className="btn-primary">{t.about.sendEmail}</a>
              <Link href="/sponsors" className="btn-secondary">{t.about.becomeSponsor}</Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
