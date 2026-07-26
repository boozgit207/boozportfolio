"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TypingTitle } from "./typing-title";

interface AboutProps {
  title: string;
  description: string[];
  label: string;
}

export function About({ title, description, label }: AboutProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id="about"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(135deg,var(--surface),rgba(47,111,237,0.10),rgba(14,169,154,0.08))] p-6 shadow-[0_18px_48px_-24px_rgba(15,23,42,0.28)] lg:p-8"
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/20 bg-[var(--primary-soft)] px-3 py-1 text-sm font-medium text-[var(--accent)]">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
            {label}
          </div>
          <TypingTitle tag="h2" text={title} className="mt-4 font-display text-3xl font-semibold text-[var(--text)]" delay={80} />
        </div>
        <div className="space-y-4 text-lg leading-7 text-[var(--text-muted)]">
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
