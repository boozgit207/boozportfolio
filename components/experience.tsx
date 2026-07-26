"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import { TypingTitle } from "./typing-title";

interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  description: string;
}

interface ExperienceProps {
  items: ExperienceItem[];
}

export function Experience({ items }: ExperienceProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id="experience"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_18px_48px_-24px_rgba(11,18,32,0.12)] lg:p-8"
    >
      <div className="mb-10">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-[var(--accent)]">Parcours</p>
        <TypingTitle tag="h2" text="Expérience" className="mt-3 font-display text-3xl font-semibold text-[var(--text)]" delay={80} />
      </div>

      <div className="relative">
        <motion.div
          className="pointer-events-none absolute left-5 top-8 h-[calc(100%-2rem)] w-px rounded-full bg-gradient-to-b from-[var(--primary)] to-[var(--accent)]/20"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
        />

        <div className="space-y-6">
          {items.map((item, index) => {
            const Icon = index === 0 ? BriefcaseBusiness : GraduationCap;
            return (
              <motion.div
                key={item.title}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
                whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.01 }}
                className="relative overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)]/90 p-6 shadow-[0_16px_40px_-24px_rgba(11,18,32,0.12)] md:grid md:grid-cols-[180px_minmax(0,1fr)] md:gap-4"
              >
                <div className="flex items-start gap-3 md:flex-col md:gap-2">
                  <div className="rounded-2xl bg-[var(--primary-soft)] p-3 text-[var(--primary)] shadow-[0_12px_30px_-20px_rgba(54,84,255,0.18)]">
                    <Icon size={18} />
                  </div>
                  <p className="font-mono text-sm uppercase tracking-[0.24em] text-[var(--accent)] md:text-left">
                    {item.period}
                  </p>
                </div>
                <div className="md:pl-10">
                  <h3 className="text-xl font-semibold text-[var(--text)]">{item.title}</h3>
                  <p className="mt-1 text-base font-medium text-[var(--primary)]">{item.company}</p>
                  <p className="mt-4 leading-7 text-[var(--text-muted)]">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
