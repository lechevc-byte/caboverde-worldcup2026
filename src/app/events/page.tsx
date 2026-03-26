"use client";

import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import { useI18n } from "@/i18n/context";

export default function EventsPage() {
  const { t } = useI18n();

  const cities = [
    {
      name: "ATLANTA",
      dates: "June 15, 2026",
      border: "border-cv-gold",
      desc: t.events.atlantaDesc,
      badge: null,
      img: "/img/atlanta.png",
    },
    {
      name: "MIAMI",
      dates: "June 20-21, 2026",
      border: "border-cv-red",
      desc: t.events.miamiDesc,
      badge: t.events.badge2days,
      img: "/img/miami.jpg",
    },
    {
      name: "HOUSTON",
      dates: "June 26, 2026",
      border: "border-cv-gold",
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

  const tickets = [
    {
      tier: t.events.standard,
      priceAtl: "$50",
      priceMia: "$60",
      features: [t.events.stdF1, t.events.stdF2, t.events.stdF3],
      featured: false,
    },
    {
      tier: t.events.business,
      priceAtl: "$150",
      priceMia: "$180",
      features: [t.events.bizF1, t.events.bizF2, t.events.bizF3, t.events.bizF4],
      featured: true,
    },
    {
      tier: t.events.vip,
      priceAtl: "$300",
      priceMia: "$350",
      features: [t.events.vipF1, t.events.vipF2, t.events.vipF3, t.events.vipF4],
      featured: false,
    },
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

      {/* ── CITY CARDS ── */}
      <section className="bg-navy py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-6">
          {cities.map((c, i) => (
            <FadeUp key={c.name} delay={i * 0.1}>
              <div className={`border-l-[3px] ${c.border} flex flex-col md:flex-row overflow-hidden bg-white/[0.04]`}>
                {/* City image */}
                <div
                  className="w-full md:w-56 h-44 md:h-auto shrink-0"
                  style={{ background: `url('${c.img}') center/cover no-repeat` }}
                />
                <div className="flex-1 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-bebas text-3xl">{c.name}</h3>
                      {c.badge && (
                        <span className="font-barlow-cond font-bold text-xs uppercase tracking-wider bg-cv-red px-3 py-1 text-white">{c.badge}</span>
                      )}
                    </div>
                    <p className="font-barlow-cond font-bold text-sm uppercase tracking-wider text-cv-gold mt-1">{c.dates}</p>
                    <p className="text-white/75 text-sm mt-2 max-w-lg leading-relaxed">{c.desc}</p>
                  </div>
                  <Link href="#registration" className="btn-primary shrink-0 text-center">{t.events.bookNow}</Link>
                </div>
              </div>
            </FadeUp>
          ))}
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
            {/* VIP Lounge */}
            <FadeUp delay={0}>
              <div className="ticket-card border border-cv-gold/50 bg-white/[0.04] p-8 flex flex-col relative overflow-hidden h-full">
                <span className="absolute top-0 right-0 bg-cv-red text-white font-barlow-cond font-bold text-xs uppercase tracking-wider px-3 py-1">Limited</span>
                <h3 className="font-bebas text-3xl">VIP LOUNGE</h3>
                <div className="mt-4 flex gap-6">
                  <div>
                    <p className="text-white/60 text-xs uppercase font-barlow-cond tracking-wider">Atlanta</p>
                    <p className="font-bebas text-2xl text-cv-gold">$300</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-xs uppercase font-barlow-cond tracking-wider">Miami</p>
                    <p className="font-bebas text-2xl text-cv-gold">$350</p>
                  </div>
                </div>
                <div className="ticket-dash my-6 w-full" />
                <ul className="space-y-2 flex-1">
                  {["Full access all zones", "VIP lounge", "Priority seating", "Gift pack", "Private networking", "Potential player/delegation proximity"].map((f) => (
                    <li key={f} className="text-white/75 text-sm flex items-start gap-2">
                      <span className="text-cv-gold mt-0.5">&#10022;</span> {f}
                    </li>
                  ))}
                </ul>
                <p className="text-white/50 text-xs mt-4 italic">Target: HNWIs, Executives, Sponsors, Diaspora leaders</p>
                <Link href="#registration" className="btn-primary mt-6 text-center">{t.events.bookNow}</Link>
              </div>
            </FadeUp>

            {/* Business */}
            <FadeUp delay={0.1}>
              <div className="ticket-card border border-white/15 p-8 flex flex-col h-full">
                <h3 className="font-bebas text-3xl">BUSINESS</h3>
                <p className="font-barlow-cond font-bold text-xs uppercase tracking-wider text-cv-gold mt-1">Investment &amp; Networking</p>
                <div className="mt-4 flex gap-6">
                  <div>
                    <p className="text-white/60 text-xs uppercase font-barlow-cond tracking-wider">Atlanta</p>
                    <p className="font-bebas text-2xl text-cv-gold">$150</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-xs uppercase font-barlow-cond tracking-wider">Miami</p>
                    <p className="font-bebas text-2xl text-cv-gold">$180</p>
                  </div>
                </div>
                <div className="ticket-dash my-6 w-full" />
                <ul className="space-y-2 flex-1">
                  {["Business & Deal Room access", "Structured networking", "Main stage access"].map((f) => (
                    <li key={f} className="text-white/75 text-sm flex items-start gap-2">
                      <span className="text-cv-gold mt-0.5">&#10022;</span> {f}
                    </li>
                  ))}
                </ul>
                <p className="text-white/50 text-xs mt-4 italic">Target: Entrepreneurs, SMEs, Professionals, Investors</p>
                <Link href="#registration" className="btn-secondary mt-6 text-center">{t.events.bookNow}</Link>
              </div>
            </FadeUp>

            {/* Standard */}
            <FadeUp delay={0.2}>
              <div className="ticket-card border border-white/15 p-8 flex flex-col h-full">
                <h3 className="font-bebas text-3xl">STANDARD</h3>
                <p className="font-barlow-cond font-bold text-xs uppercase tracking-wider text-cv-gold mt-1">Experience Access</p>
                <div className="mt-4 flex gap-6">
                  <div>
                    <p className="text-white/60 text-xs uppercase font-barlow-cond tracking-wider">Atlanta</p>
                    <p className="font-bebas text-2xl text-cv-gold">$50</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-xs uppercase font-barlow-cond tracking-wider">Miami</p>
                    <p className="font-bebas text-2xl text-cv-gold">$60</p>
                  </div>
                </div>
                <div className="ticket-dash my-6 w-full" />
                <ul className="space-y-2 flex-1">
                  {["Main stage", "Smart Experience Zone", "Cultural activations"].map((f) => (
                    <li key={f} className="text-white/75 text-sm flex items-start gap-2">
                      <span className="text-cv-gold mt-0.5">&#10022;</span> {f}
                    </li>
                  ))}
                </ul>
                <p className="text-white/50 text-xs mt-4 italic">Target: Diaspora general audience, Young professionals, Community</p>
                <Link href="#registration" className="btn-secondary mt-6 text-center">{t.events.bookNow}</Link>
              </div>
            </FadeUp>
          </div>

          {/* Row 2 — 3 extra blocks */}
          <div className="mt-px grid md:grid-cols-3 gap-px">
            {/* VIP Table Packages */}
            <FadeUp delay={0.3}>
              <div className="border border-cv-gold/25 p-8 h-full">
                <h3 className="font-bebas text-2xl">VIP TABLE PACKAGES</h3>
                <div className="ticket-dash my-4 w-full" />
                <div className="space-y-3">
                  <div>
                    <p className="font-barlow-cond font-bold text-xs uppercase tracking-wider text-cv-gold">Atlanta</p>
                    <p className="text-white/75 text-sm mt-1">5 seats — $1,500</p>
                    <p className="text-white/75 text-sm">10 seats — $3,000</p>
                  </div>
                  <div>
                    <p className="font-barlow-cond font-bold text-xs uppercase tracking-wider text-cv-gold">Miami</p>
                    <p className="text-white/75 text-sm mt-1">5 seats — $2,000</p>
                    <p className="text-white/75 text-sm">10 seats — $4,000</p>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Package depuis Praia */}
            <FadeUp delay={0.4}>
              <div className="border border-cv-gold/25 p-8 h-full">
                <h3 className="font-bebas text-2xl">PACKAGE DEPUIS PRAIA</h3>
                <div className="ticket-dash my-4 w-full" />
                <ul className="space-y-1 text-white/75 text-sm">
                  <li>4 nuits — $600</li>
                  <li>Vol Praia–Miami — $1,150</li>
                  <li>Ticket Standard — $75</li>
                  <li>Ticket Business — $150</li>
                  <li>Ticket VIP — $250</li>
                  <li>Boot — $10,000</li>
                </ul>
                <p className="mt-4 font-barlow-cond font-bold text-sm uppercase tracking-wider text-cv-gold">
                  Co&ucirc;t estim&eacute; VIP: ~$2,000
                </p>
              </div>
            </FadeUp>

            {/* Charter flight */}
            <FadeUp delay={0.5}>
              <div className="border border-cv-gold/25 p-8 h-full">
                <h3 className="font-bebas text-2xl">CHARTER PRAIA–MIAMI–PRAIA</h3>
                <div className="ticket-dash my-4 w-full" />
                <ul className="space-y-1 text-white/75 text-sm">
                  <li>18.06 – 22.06</li>
                  <li>H&ocirc;tel chambre double ou B&amp;B — $150/nuit</li>
                  <li>Event: $60 &agrave; $300</li>
                </ul>
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
                <option>Standard — Atlanta ($50)</option>
                <option>Standard — Miami ($60)</option>
                <option>Business — Atlanta ($150)</option>
                <option>Business — Miami ($180)</option>
                <option>VIP — Atlanta ($300)</option>
                <option>VIP — Miami ($350)</option>
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
