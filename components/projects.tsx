"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, GraduationCap, MessageCircleMore, Sparkles } from "lucide-react";
import { TypingTitle } from "./typing-title";

interface ProjectItem {
  title: string;
  type: string;
  description: string;
  link: string;
  linkLabel: string;
  icon: typeof Sparkles;
  color: "primary" | "accent" | "pop";
  tags: string[];
}

interface ProjectsProps {
  items: ProjectItem[];
}

const cardTone = {
  primary: "border-[var(--primary)]/30 hover:border-[var(--primary)]/60",
  accent: "border-[var(--accent)]/30 hover:border-[var(--accent)]/60",
  pop: "border-[var(--pop)]/30 hover:border-[var(--pop)]/60",
};

const iconTone = {
  primary: "bg-[var(--primary-soft)] text-[var(--primary)]",
  accent: "bg-[var(--primary-soft)] text-[var(--accent)]",
  pop: "bg-[var(--primary-soft)] text-[var(--pop)]",
};

export function Projects({ items }: ProjectsProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id="projects"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(135deg,var(--surface),rgba(47,111,237,0.10),rgba(14,169,154,0.08),rgba(124,58,237,0.08))] p-6 shadow-[0_18px_48px_-24px_rgba(15,23,42,0.28)] lg:p-8"
    >
      <div className="mb-8">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-[var(--pop)]">Projets</p>
        <TypingTitle tag="h2" text="Sélection de réalisations" className="mt-3 font-display text-3xl font-semibold text-[var(--text)]" delay={80} />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {items.map((project, index) => {
          const Icon = project.icon;
          return (
            <motion.article
              key={project.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
              whileHover={shouldReduceMotion ? undefined : { y: -8, scale: 1.02, rotateX: 3, rotateY: 4 }}
              className={`relative overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)]/90 p-6 transition-all duration-250 shadow-[0_16px_40px_-24px_rgba(15,23,42,0.28)] ${cardTone[project.color]}`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,_rgba(54,84,255,0.14),transparent_48%),radial-gradient(circle_at_right,_rgba(23,201,182,0.10),transparent_40%)]" />
              <div className="relative flex items-center justify-between gap-3">
                <div className={`relative overflow-hidden rounded-3xl p-3 ${iconTone[project.color]}`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.55),transparent_50%)] opacity-70" />
                  <span className="relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(255,255,255,0.5)] shadow-[0_10px_30px_-18px_rgba(54,84,255,0.22)]">
                    <Icon size={18} />
                  </span>
                </div>
                <span className="relative z-10 text-sm font-medium uppercase tracking-[0.24em] text-[var(--text-muted)]">{project.type}</span>
              </div>
              <div className="mt-6 rounded-[1.2rem] border border-[var(--border)] bg-[linear-gradient(135deg,var(--surface),rgba(47,111,237,0.08),rgba(14,169,154,0.06))] p-4">
                <div className="h-24 rounded-[1rem] bg-[linear-gradient(120deg,var(--primary-soft),rgba(14,169,154,0.09),rgba(124,58,237,0.10))]" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[var(--text)]">{project.title}</h3>
              <p className="mt-3 leading-7 text-[var(--text-muted)]">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1 text-xs font-medium text-[var(--text-muted)]">
                    {tag}
                  </span>
                ))}
              </div>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--text)] transition hover:text-[var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
                >
                  {project.linkLabel} <ArrowUpRight size={14} />
                </a>
              ) : (
                <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg)] px-4 py-2 text-sm font-semibold text-[var(--text-muted)]">
                  {project.linkLabel}
                </div>
              )}
            </motion.article>
          );
        })}
      </div>
    </motion.section>
  );
}
