"use client";

import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import { useI18n } from "@/i18n/context";

export default function EventsPage() {
  const { t } = useI18n();

  const cities = [
    {
      name: "ATLANTA",
      flag: "\u{1F1E8}\u{1F1FB} vs \u{1F1EA}\u{1F1F8}",
      dates: "June 15, 2026",
      iso: "2026-06-15",
      time: "12:00 PM ET",
      border: "border-cv-gold",
      tag: t.events.atlantaTag,
      match: t.events.atlantaMatch,
      desc: t.events.atlantaDesc,
      badge: null,
      img: "/img/atlanta.png",
    },
    {
      name: "MIAMI",
      flag: "\u{1F1E8}\u{1F1FB} vs \u{1F1FA}\u{1F1FE}",
      dates: "June 20-21, 2026",
      iso: "2026-06-21",
      time: "6:00 PM ET",
      border: "border-cv-red",
      tag: t.events.miamiTag,
      match: t.events.miamiMatch,
      desc: t.events.miamiDesc,
      badge: t.events.badge2days,
      img: "/img/miami.jpg",
    },
    {
      name: "HOUSTON",
      flag: "\u{1F1E8}\u{1F1FB} vs \u{1F1F8}\u{1F1E6}",
      dates: "June 25-26, 2026",
      iso: "2026-06-25",
      time: "TBD",
      border: "border-cv-gold",
      tag: t.events.houstonTag,
      match: t.events.houstonMatch,
      desc: t.events.houstonDesc,
      badge: null,
      img: "/img/houston.jpg",
    },
  ];

  const zones = [
    { icon: "\u{1F3DF}", name: t.events.zone1, desc: t.events.zone1d },
    { icon: "\u{1F91D}", name: t.events.zone2, desc: t.events.zone2d },
    { icon: "\u{1F4A1}", name: t.events.zone3, desc: t.events.zone3d },
    { icon: "\u2B50", name: t.events.zone4, desc: t.events.zone4d },
    { icon: "\u{1F6CD}", name: t.events.zone5, desc: t.events.zone5d },
    { icon: "\u{1F4F8}", name: t.events.zone6, desc: t.events.zone6d },
  ];

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="hero-bg min-h-[55vh] flex items-center pt-16 overflow-hidden"
        style={{ backgroundImage: "url('/img/event.png')" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
          <p className="section-label mb-4">{t.events.heroLabel}</p>
          <h1 className="font-bebas leading-[0.92]" style={{ fontSize: "clamp(4rem, 10vw, 8rem)" }}>
            {t.events.heroTitle}
          </h1>
          <p className="mt-6 max-w-lg text-cv-white/80 text-[0.95rem] leading-[1.72]">{t.events.heroText}</p>
        </div>
      </section>

      {/* ── 3 CITIES · 3 MATCHES · 3 EVENTS ── */}
      <section className="bg-navy py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <p className="section-label mb-4">{t.events.citiesLabel}</p>
            <h2 className="section-title">{t.events.citiesTitle}</h2>
          </FadeUp>

          <div className="mt-14 space-y-6">
            {cities.map((c, i) => {
              const targetDate = new Date(c.iso).getTime();
              const now = new Date().getTime();
              const daysLeft = Math.max(0, Math.ceil((targetDate - now) / (1000 * 60 * 60 * 24)));

              return (
                <FadeUp key={c.name} delay={i * 0.12}>
                  <div className="relative overflow-hidden rounded-sm">
                    {/* Full-width background image */}
                    <div
                      className="absolute inset-0"
                      style={{ background: `url('${c.img}') center/cover no-repeat` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/15" />

                    {/* Match number watermark */}
                    <div className="absolute top-0 right-4 md:right-8 pointer-events-none">
                      <span className="font-bebas text-[8rem] md:text-[12rem] leading-none text-white/[0.05]">0{i + 1}</span>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-6">
                      {/* Left: info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-barlow-cond font-bold text-[0.65rem] uppercase tracking-[0.3em] text-cv-gold/70">{t.events.groupH} · MATCH {i + 1}</span>
                          {c.badge && (
                            <span className="font-barlow-cond font-bold text-xs uppercase tracking-wider bg-cv-red px-3 py-1 text-white">{c.badge}</span>
                          )}
                        </div>

                        <p className="font-barlow-cond font-bold text-xs uppercase tracking-[0.2em] text-cv-red">{c.tag}</p>

                        <h3 className="font-bebas text-5xl md:text-6xl mt-1">{c.name}</h3>

                        {/* Match + flags */}
                        <div className="flex items-center gap-3 mt-3">
                          <span className="text-3xl">{c.flag}</span>
                          <p className="font-bebas text-xl md:text-2xl text-cv-gold">{c.match}</p>
                        </div>

                        <p className="font-barlow-cond font-bold text-sm uppercase tracking-wider text-white/60 mt-2">{c.dates} · {c.time}</p>

                        <p className="text-white/75 text-sm mt-4 max-w-xl leading-relaxed">{c.desc}</p>

                        <div className="mt-6">
                          <Link href="#registration" className="btn-primary">{t.events.bookNow}</Link>
                        </div>
                      </div>

                      {/* Right: countdown */}
                      <div className="shrink-0 flex flex-col items-center justify-center border border-cv-gold/30 bg-black/40 backdrop-blur-sm px-8 py-6 md:px-10 md:py-8">
                        <p className="font-bebas text-5xl md:text-6xl text-cv-gold leading-none">{daysLeft}</p>
                        <p className="font-barlow-cond font-bold text-xs uppercase tracking-[0.2em] text-white/60 mt-2">{t.events.daysLeft}</p>
                      </div>
                    </div>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: i === 1 ? "#CF2027" : "#F5A623" }} />
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ZONES ── */}
      <section className="bg-dark py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <p className="section-label mb-4">{t.events.zonesLabel}</p>
            <h2 className="section-title">{t.events.zonesTitle}</h2>
          </FadeUp>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-px">
            {zones.map((z, i) => (
              <FadeUp key={z.name} delay={i * 0.08}>
                <div className="border border-white/10 p-8 hover:-translate-y-1 transition-transform h-full">
                  <span className="text-3xl">{z.icon}</span>
                  <h3 className="font-barlow-cond font-bold uppercase tracking-wider text-cv-white mt-4">{z.name}</h3>
                  <p className="text-white/70 text-sm mt-2 leading-relaxed">{z.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── TICKETS ── */}
      <section className="bg-dark py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <p className="section-label mb-4">{t.events.ticketsLabel}</p>
            <h2 className="section-title">{t.events.ticketsTitle}</h2>
          </FadeUp>

          {/* Row 1 — 3 main tickets */}
          <div className="mt-12 grid md:grid-cols-3 gap-px">
            {/* VIP Diplomatic */}
            <FadeUp delay={0}>
              <div className="ticket-card border border-cv-gold/50 bg-white/[0.04] p-8 flex flex-col relative overflow-hidden h-full">
                <span className="absolute top-0 right-0 bg-cv-red text-white font-barlow-cond font-bold text-xs uppercase tracking-wider px-3 py-1">Limited</span>
                <h3 className="font-bebas text-3xl">{t.events.vipDiplomatic}</h3>
                <p className="font-barlow-cond font-bold text-xs uppercase tracking-wider text-cv-gold mt-1">{t.events.vipDiplomaticSub}</p>
                <p className="text-white/50 text-xs mt-1">{t.events.vipDiplomaticDesc}</p>
                <div className="mt-4 flex gap-4">
                  <div>
                    <p className="text-white/60 text-xs uppercase font-barlow-cond tracking-wider">Atlanta</p>
                    <p className="font-bebas text-2xl text-cv-gold">$399</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-xs uppercase font-barlow-cond tracking-wider">Miami</p>
                    <p className="font-bebas text-2xl text-cv-gold">$499</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-xs uppercase font-barlow-cond tracking-wider">Houston</p>
                    <p className="font-bebas text-2xl text-cv-gold">$399</p>
                  </div>
                </div>
                <div className="ticket-dash my-6 w-full" />
                <ul className="space-y-2 flex-1">
                  {[t.events.vipF1, t.events.vipF2, t.events.vipF3, t.events.vipF4, t.events.vipF5, t.events.vipF6, t.events.vipF7, t.events.vipF8].map((f) => (
                    <li key={f} className="text-white/75 text-sm flex items-start gap-2">
                      <span className="text-cv-gold mt-0.5">&#10022;</span> {f}
                    </li>
                  ))}
                </ul>
                <Link href="#registration" className="btn-primary mt-6 text-center">{t.events.bookNow}</Link>
              </div>
            </FadeUp>

            {/* Business */}
            <FadeUp delay={0.1}>
              <div className="ticket-card border border-white/15 p-8 flex flex-col h-full">
                <h3 className="font-bebas text-3xl">{t.events.business}</h3>
                <p className="font-barlow-cond font-bold text-xs uppercase tracking-wider text-cv-gold mt-1">{t.events.businessSub}</p>
                <p className="text-white/50 text-xs mt-1">{t.events.businessDesc}</p>
                <div className="mt-4 flex gap-4">
                  <div>
                    <p className="text-white/60 text-xs uppercase font-barlow-cond tracking-wider">Atlanta</p>
                    <p className="font-bebas text-2xl text-cv-gold">$199</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-xs uppercase font-barlow-cond tracking-wider">Miami</p>
                    <p className="font-bebas text-2xl text-cv-gold">$249</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-xs uppercase font-barlow-cond tracking-wider">Houston</p>
                    <p className="font-bebas text-2xl text-cv-gold">$199</p>
                  </div>
                </div>
                <div className="ticket-dash my-6 w-full" />
                <ul className="space-y-2 flex-1">
                  {[t.events.bizF1, t.events.bizF2, t.events.bizF3, t.events.bizF4, t.events.bizF5, t.events.bizF6, t.events.bizF7].map((f) => (
                    <li key={f} className="text-white/75 text-sm flex items-start gap-2">
                      <span className="text-cv-gold mt-0.5">&#10022;</span> {f}
                    </li>
                  ))}
                </ul>
                <Link href="#registration" className="btn-secondary mt-6 text-center">{t.events.bookNow}</Link>
              </div>
            </FadeUp>

            {/* Standard Fan */}
            <FadeUp delay={0.2}>
              <div className="ticket-card border border-white/15 p-8 flex flex-col h-full">
                <h3 className="font-bebas text-3xl">{t.events.standardFan}</h3>
                <p className="font-barlow-cond font-bold text-xs uppercase tracking-wider text-cv-gold mt-1">{t.events.standardFanSub}</p>
                <p className="text-white/50 text-xs mt-1">{t.events.standardFanDesc}</p>
                <div className="mt-4 flex gap-4">
                  <div>
                    <p className="text-white/60 text-xs uppercase font-barlow-cond tracking-wider">Atlanta</p>
                    <p className="font-bebas text-2xl text-cv-gold">$65</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-xs uppercase font-barlow-cond tracking-wider">Miami</p>
                    <p className="font-bebas text-2xl text-cv-gold">$79</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-xs uppercase font-barlow-cond tracking-wider">Houston</p>
                    <p className="font-bebas text-2xl text-cv-gold">$65</p>
                  </div>
                </div>
                <div className="ticket-dash my-6 w-full" />
                <ul className="space-y-2 flex-1">
                  {[t.events.stdF1, t.events.stdF2, t.events.stdF3, t.events.stdF4, t.events.stdF5, t.events.stdF6, t.events.stdF7].map((f) => (
                    <li key={f} className="text-white/75 text-sm flex items-start gap-2">
                      <span className="text-cv-gold mt-0.5">&#10022;</span> {f}
                    </li>
                  ))}
                </ul>
                <Link href="#registration" className="btn-secondary mt-6 text-center">{t.events.bookNow}</Link>
              </div>
            </FadeUp>
          </div>

        </div>
      </section>

      {/* ── REGISTRATION FORM ── */}
      <section id="registration" className="bg-navy py-20 px-6 md:px-12">
        <div className="max-w-2xl mx-auto">
          <FadeUp>
            <p className="section-label mb-4">{t.events.regLabel}</p>
            <h2 className="section-title mb-10">{t.events.regTitle}</h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <form className="grid sm:grid-cols-2 gap-4">
              <input type="text" placeholder={t.events.firstName} required />
              <input type="text" placeholder={t.events.lastName} required />
              <input type="email" placeholder={t.events.email} required className="sm:col-span-2" />
              <input type="tel" placeholder={t.events.whatsapp} />
              <input type="text" placeholder={t.events.city} />
              <select required className="sm:col-span-2">
                <option value="">{t.events.ticketType}</option>
                <option>Standard Fan — Atlanta ($65)</option>
                <option>Standard Fan — Miami ($79)</option>
                <option>Standard Fan — Houston ($65)</option>
                <option>Business — Atlanta ($199)</option>
                <option>Business — Miami ($249)</option>
                <option>Business — Houston ($199)</option>
                <option>VIP Diplomatic — Atlanta ($399)</option>
                <option>VIP Diplomatic — Miami ($499)</option>
                <option>VIP Diplomatic — Houston ($399)</option>
              </select>
              <select className="sm:col-span-2">
                <option value="">{t.events.comingFrom}</option>
                <option>{t.events.diasporaUSA}</option>
                <option>{t.events.diasporaEurope}</option>
                <option>{t.events.praiaCV}</option>
                <option>{t.events.other}</option>
              </select>
              <textarea placeholder={t.events.messageOpt} rows={3} className="sm:col-span-2" />
              <div className="sm:col-span-2">
                <button type="submit" className="btn-primary w-full text-center">{t.events.submitReg}</button>
              </div>
            </form>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
