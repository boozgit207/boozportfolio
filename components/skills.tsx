"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BrainCircuit, Code2, DatabaseZap } from "lucide-react";
import { TypingTitle } from "./typing-title";

interface SkillGroup {
  title: string;
  icon: typeof BrainCircuit;
  items: string[];
  color: "primary" | "accent" | "pop";
}

interface SkillsProps {
  groups: SkillGroup[];
}

const toneClass = {
  primary: "border-[var(--primary)]/30 text-[var(--primary)] hover:border-[var(--primary)]/60 hover:text-[var(--primary)]",
  accent: "border-[var(--accent)]/30 text-[var(--accent)] hover:border-[var(--accent)]/60 hover:text-[var(--accent)]",
  pop: "border-[var(--pop)]/30 text-[var(--pop)] hover:border-[var(--pop)]/60 hover:text-[var(--pop)]",
};

export function Skills({ groups }: SkillsProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id="skills"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(135deg,var(--surface),rgba(14,169,154,0.10),rgba(124,58,237,0.08))] p-6 shadow-[0_18px_48px_-24px_rgba(15,23,42,0.28)] lg:p-8"
    >
      <div className="mb-8">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-[var(--accent)]">Compétences</p>
        <TypingTitle tag="h2" text="Outils et technologies" className="mt-3 font-display text-3xl font-semibold text-[var(--text)]" delay={80} />
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {groups.map((group, index) => {
          const Icon = group.icon;
          return (
            <motion.div
              key={group.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
              whileHover={shouldReduceMotion ? undefined : { y: -5, scale: 1.01 }}
              className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)]/80 p-5 shadow-[0_16px_40px_-24px_rgba(15,23,42,0.28)]"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-[var(--primary-soft)] p-2 text-[var(--primary)]">
                  <Icon size={18} />
                </div>
                <h3 className="font-semibold text-[var(--text)]">{group.title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`rounded-full border bg-[var(--surface)] px-3 py-1 text-sm text-[var(--text-muted)] transition ${toneClass[group.color]}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
