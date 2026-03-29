"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FadeUp from "@/components/FadeUp";
import Ticker from "@/components/Ticker";
import { useI18n } from "@/i18n/context";

const heroLines = ["PRIMEIRA", "TACA DO", "MUNDO"];

export default function Home() {
  const { t } = useI18n();

  const whyCards = [
    { n: "01", title: t.home.why1Title, desc: t.home.why1Desc },
    { n: "02", title: t.home.why2Title, desc: t.home.why2Desc },
    { n: "03", title: t.home.why3Title, desc: t.home.why3Desc },
    { n: "04", title: t.home.why4Title, desc: t.home.why4Desc },
  ];

  const stats = [
    { value: "700K", label: t.home.stat1 },
    { value: "3", label: t.home.stat2 },
    { value: "200+", label: t.home.stat3 },
    { value: "1st", label: t.home.stat4 },
  ];

  const countdowns = [
    { city: "ATLANTA", date: "June 15, 2026", detail: t.home.atlantaDetail },
    { city: "MIAMI", date: "June 20-21, 2026", detail: t.home.miamiDetail },
    { city: "HOUSTON", date: "June 26, 2026", detail: t.home.houstonDetail },
  ];

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: "url('/img/hero-stadium.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black/45 z-[1]" />

        <div
          className="relative z-[2] w-full flex flex-col justify-center text-left"
          style={{ paddingLeft: "5vw", paddingRight: "5vw" }}
        >
          <p className="section-label mb-4">{t.home.eyebrow}</p>

          {heroLines.map((line, i) => (
            <motion.h1
              key={line}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="font-bebas leading-[0.92]"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
            >
              {line === "PRIMEIRA" ? (
                <span className="text-transparent" style={{ WebkitTextStroke: "2px rgba(245,166,35,0.7)" }}>{line}</span>
              ) : line === "MUNDO" ? (
                <span className="text-cv-red">{line}</span>
              ) : (
                line
              )}
            </motion.h1>
          ))}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 max-w-lg text-cv-white/80 font-barlow text-[0.95rem] leading-[1.72]"
          >
            {t.home.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-6 flex flex-wrap gap-4"
          >
            <Link href="/events" className="btn-primary">{t.home.ctaPrimary}</Link>
            <Link href="/sponsors" className="btn-secondary">{t.home.ctaSecondary}</Link>
          </motion.div>
        </div>
      </section>

      {/* ── COUNTDOWN STRIP ── */}
      <section className="bg-dark py-10 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {countdowns.map((c) => (
            <div key={c.city} className="border-l-[3px] border-cv-gold pl-5">
              <p className="font-bebas text-2xl text-cv-gold">{c.city}</p>
              <p className="font-barlow-cond font-bold text-sm uppercase tracking-wider text-cv-white mt-1">{c.date}</p>
              <p className="text-white/70 text-sm mt-1">{c.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <Ticker />

      {/* ── WHY IT MATTERS ── */}
      <section className="bg-navy py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <p className="section-label mb-4">{t.home.whyLabel}</p>
            <h2 className="section-title">{t.home.whyTitle}</h2>
          </FadeUp>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px">
            {whyCards.map((c, i) => (
              <FadeUp key={c.n} delay={i * 0.1}>
                <div className="border border-cv-gold/25 p-8 h-full hover:bg-cv-blue/15 transition-colors relative">
                  <span className="font-bebas text-[4rem] leading-none text-cv-gold/20 absolute top-4 right-4">{c.n}</span>
                  <h3 className="font-barlow-cond font-bold text-lg uppercase tracking-wide text-cv-white mt-8">{c.title}</h3>
                  <p className="text-white/70 text-sm mt-3 leading-relaxed">{c.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIASPORA (turf + bg image) ── */}
      <section
        className="relative py-24 px-6 md:px-12 overflow-hidden"
        style={{
          background: `linear-gradient(rgba(26,61,31,0.88), rgba(26,61,31,0.88)), url('/img/fans-celebrate.png') center/cover no-repeat`,
        }}
      >
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <p className="section-label mb-4">{t.home.diasporaLabel}</p>
            <h2 className="section-title">{t.home.diasporaTitle}</h2>
            <p className="mt-6 max-w-2xl text-white/80 text-[0.95rem] leading-[1.72]">{t.home.diasporaText}</p>
          </FadeUp>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <FadeUp key={s.label} delay={i * 0.08}>
                <div className="border-l-[3px] border-cv-gold pl-5">
                  <p className="font-bebas text-[2.8rem] text-cv-gold leading-none">{s.value}</p>
                  <p className="text-white/70 text-sm mt-2">{s.label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          {/* Packages row */}
          <div className="mt-16 grid md:grid-cols-3 gap-px">
            <FadeUp delay={0.3}>
              <div className="border border-cv-gold/40 bg-black/40 backdrop-blur-sm p-8 h-full">
                <h3 className="font-bebas text-2xl">{t.events.packageFromPraia}</h3>
                <div className="ticket-dash my-4 w-full" />
                <ul className="space-y-1 text-white/80 text-sm">
                  <li>{t.events.fourNights}</li>
                  <li>{t.events.flightPraiaMiami}</li>
                  <li>{t.events.ticketStandard}</li>
                  <li>{t.events.ticketBusiness}</li>
                  <li>{t.events.ticketVip}</li>
                </ul>
                <p className="mt-4 font-barlow-cond font-bold text-sm uppercase tracking-wider text-cv-gold">
                  {t.events.estimatedVipCost}
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.4}>
              <div className="border border-cv-gold/40 bg-black/40 backdrop-blur-sm p-8 h-full">
                <h3 className="font-bebas text-2xl">{t.events.charterTitle}</h3>
                <div className="ticket-dash my-4 w-full" />
                <ul className="space-y-1 text-white/80 text-sm">
                  <li>{t.events.charterDates}</li>
                  <li>{t.events.doubleRoomHotel}</li>
                  <li>{t.events.eventRange}</li>
                </ul>
              </div>
            </FadeUp>
            <FadeUp delay={0.5}>
              <div className="border border-cv-gold/40 bg-black/40 backdrop-blur-sm p-8 h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-bebas text-2xl">TICKETS</h3>
                  <div className="ticket-dash my-4 w-full" />
                  <ul className="space-y-1 text-white/80 text-sm">
                    <li>Standard — $50 / $60</li>
                    <li>Business — $150 / $180</li>
                    <li>VIP Lounge — $300 / $350</li>
                  </ul>
                </div>
                <Link href="/events" className="btn-primary mt-6 text-center">{t.home.learnMore}</Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-cv-red py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="font-bebas text-3xl md:text-4xl text-cv-white text-center md:text-left">{t.home.ctaBanner}</h2>
          <Link href="/sponsors" className="btn-white shrink-0">{t.home.ctaSecondary}</Link>
        </div>
      </section>
    </>
  );
}
