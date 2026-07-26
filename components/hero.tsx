"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Mail, Zap } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  eyebrow: string;
}

export function Hero({ title, subtitle, eyebrow }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const [typedEyebrow, setTypedEyebrow] = useState(shouldReduceMotion ? eyebrow : "");
  const [typedTitle, setTypedTitle] = useState(shouldReduceMotion ? title : "");

  useEffect(() => {
    if (shouldReduceMotion) {
      setTypedEyebrow(eyebrow);
      setTypedTitle(title);
      return;
    }

    let currentEyebrow = 0;
    let currentTitle = 0;
    const interval = window.setInterval(() => {
      if (currentEyebrow < eyebrow.length) {
        currentEyebrow += 1;
        setTypedEyebrow(eyebrow.slice(0, currentEyebrow));
        return;
      }
      if (currentTitle < title.length) {
        currentTitle += 1;
        setTypedTitle(title.slice(0, currentTitle));
        return;
      }
      window.clearInterval(interval);
    }, 28);

    return () => window.clearInterval(interval);
  }, [eyebrow, title, shouldReduceMotion]);

  const heroText = shouldReduceMotion
    ? { initial: { opacity: 1, y: 0 } }
    : {
        initial: { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.45, ease: "easeOut" as const },
      };

  return (
    <section className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_30px_90px_-45px_rgba(11,18,32,0.12)] lg:p-10">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-2xl">
          <motion.div
            {...heroText}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/10 px-4 py-2 text-sm font-medium text-[var(--accent)] shadow-[0_20px_70px_-54px_rgba(23,201,182,0.45)]"
          >
            <Zap size={16} />
            {typedEyebrow}
          </motion.div>
          <motion.h1
            {...heroText}
            transition={{ ...heroText.transition, delay: 0.08 }}
            className="mt-6 font-display text-4xl font-semibold leading-[1.05] text-[var(--text)] sm:text-5xl lg:text-6xl"
          >
            {(() => {
              const regex = /donne(e|é)/i;
              const m = typedTitle.match(regex);
              if (!m) return typedTitle || "\u00A0";
              const match = m[0];
              const idx = typedTitle.toLowerCase().indexOf(match.toLowerCase());
              return (
                <>
                  {typedTitle.slice(0, idx)}
                  <span className="text-[var(--primary)]">{typedTitle.slice(idx, idx + match.length)}</span>
                  {typedTitle.slice(idx + match.length)}
                </>
              );
            })()}
          </motion.h1>
          <motion.p
            {...heroText}
            transition={{ ...heroText.transition, delay: 0.16 }}
            className="mt-5 max-w-xl text-lg leading-8 text-[var(--text-muted)]"
          >
            {subtitle}
          </motion.p>
          <motion.div
            {...heroText}
            transition={{ ...heroText.transition, delay: 0.24 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <motion.a
              href="#projects"
              whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
            >
              Voir les projets <ArrowRight size={16} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--primary)]/40 hover:text-[var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
            >
              <Mail size={16} /> Me contacter
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          {...heroText}
          transition={{ ...heroText.transition, delay: 0.32 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: [0, -8, 0], scale: [1, 1.01, 1] }}
          className="relative mx-auto w-full max-w-[420px] overflow-hidden rounded-[2.5rem] border border-[var(--border)] bg-[var(--surface)] p-1 shadow-[0_28px_80px_-50px_rgba(11,18,32,0.16)]"
        >
          <div className="overflow-hidden rounded-[2.25rem] bg-[linear-gradient(180deg,rgba(54,84,255,0.10),rgba(23,201,182,0.06))]">
            <img
              src="/photo_fonkou_booz_profil.png"
              alt="Portrait de Fonkou Oumbe Booz Melki"
              loading="eager"
              decoding="async"
              className="aspect-square h-full w-full object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
