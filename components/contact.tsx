"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircleMore, Phone, Send } from "lucide-react";
import { TypingTitle } from "./typing-title";

interface ContactProps {
  email: string;
  phone: string;
  whatsapp: string;
  linkedin: string;
  github: string;
}

export function Contact({ email, phone, whatsapp, linkedin, github }: ContactProps) {
  const shouldReduceMotion = useReducedMotion();

  const links = [
    { href: `mailto:${email}`, label: email, icon: Mail, color: "primary" },
    { href: `tel:${phone}`, label: phone, icon: Phone, color: "accent" },
    { href: whatsapp, label: "WhatsApp", icon: MessageCircleMore, color: "pop" },
    { href: linkedin, label: "LinkedIn", icon: Linkedin, color: "primary" },
    { href: github, label: "GitHub", icon: Github, color: "accent" },
  ];

  return (
    <motion.section
      id="contact"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(135deg,var(--surface),rgba(47,111,237,0.10),rgba(124,58,237,0.08))] p-6 shadow-[0_18px_48px_-24px_rgba(15,23,42,0.28)] lg:p-8"
    >
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-[var(--accent)]">Contact</p>
          <TypingTitle tag="h2" text="Un projet en tête ?" className="mt-3 font-display text-3xl font-semibold text-[var(--text)]" delay={80} />
          <p className="mt-4 max-w-xl text-lg leading-7 text-[var(--text-muted)]">
            Discutons-en autour d’un café virtuel. Je réponds rapidement à toute demande sérieuse.
          </p>
          <div className="mt-7 space-y-3 text-base">
            {links.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  whileHover={shouldReduceMotion ? undefined : { x: 4 }}
                  href={link.href}
                  target={link.href.startsWith("mailto") || link.href.startsWith("tel") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto") || link.href.startsWith("tel") ? undefined : "noreferrer"}
                  className="flex items-center gap-3 text-[var(--text-muted)] transition hover:text-[var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
                >
                  <span className="rounded-full bg-[var(--primary-soft)] p-2 text-[var(--primary)]"><Icon size={16} /></span>
                  {link.label}
                </motion.a>
              );
            })}
          </div>
        </div>

        <form className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)]/80 p-6 shadow-[0_16px_45px_-24px_rgba(15,23,42,0.28)]">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm text-[var(--text-muted)]">
              <span className="font-medium text-[var(--text)]">Nom</span>
              <input className="rounded-2xl border border-[var(--border)] bg-[var(--bg)]/80 px-4 py-3 outline-none transition focus:border-[var(--primary)]" placeholder="Votre nom" />
            </label>
            <label className="flex flex-col gap-2 text-sm text-[var(--text-muted)]">
              <span className="font-medium text-[var(--text)]">Email</span>
              <input type="email" className="rounded-2xl border border-[var(--border)] bg-[var(--bg)]/80 px-4 py-3 outline-none transition focus:border-[var(--primary)]" placeholder="Votre email" />
            </label>
          </div>
          <label className="mt-4 flex flex-col gap-2 text-sm text-[var(--text-muted)]">
            <span className="font-medium text-[var(--text)]">Message</span>
            <textarea rows={5} className="rounded-2xl border border-[var(--border)] bg-[var(--bg)]/80 px-4 py-3 outline-none transition focus:border-[var(--primary)]" placeholder="Dites-moi en quelques mots votre idée..." />
          </label>
          <motion.button whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.01 }} whileTap={{ scale: 0.97 }} type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]">
            <Send size={16} />
            Envoyer le message
          </motion.button>
        </form>
      </div>
    </motion.section>
  );
}
