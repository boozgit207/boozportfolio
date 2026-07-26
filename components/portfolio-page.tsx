"use client";

import { BarChart3, BrainCircuit, BriefcaseBusiness, Code2, DatabaseZap, GraduationCap, MessageCircleMore, Sparkles } from "lucide-react";
import { About } from "./about";
import { AmbientBackground } from "./ambient-background";
import { Contact } from "./contact";
import { Experience } from "./experience";
import { Footer } from "./footer";
import { Header } from "./header";
import { Hero } from "./hero";
import { Projects } from "./projects";
import { Skills } from "./skills";

const navLinks = [
  { href: "#about", label: "À propos" },
  { href: "#experience", label: "Expérience" },
  { href: "#skills", label: "Compétences" },
  { href: "#projects", label: "Projets" },
  { href: "#contact", label: "Contact" },
];

const experiences = [
  {
    period: "2024 — 2026",
    title: "Stagiaire développeur",
    company: "GEC-Informatique",
    description: "Conception d’une application médicale Java orientée objet avec rappels automatisés par SMS.",
  },
  {
    period: "2023 — 2026",
    title: "Projets tuteurés",
    company: "Keyce Informatique et IA",
    description: "Développement de solutions innovantes mêlant analyse, machine learning, web et automatisation.",
  },
];

const skillGroups = [
  {
    title: "Langages & IA",
    icon: BrainCircuit,
    items: ["Python", "Java", "PHP", "SQL", "Machine Learning"],
    color: "primary" as const,
  },
  {
    title: "Web & mobile",
    icon: Code2,
    items: ["React JS", "Next.js", "React Native", "Expo", "Streamlit"],
    color: "accent" as const,
  },
  {
    title: "Data & outils",
    icon: DatabaseZap,
    items: ["Power BI", "Excel", "Docker", "MySQL", "Tableaux de bord"],
    color: "pop" as const,
  },
];

const projects = [
  {
    title: "FamilyMeal",
    type: "React / Vite",
    description: "Application web pensée pour organiser les repas en famille avec une expérience fluide.",
    link: "https://familymeal.vercel.app/",
    linkLabel: "Voir le site",
    icon: Sparkles,
    color: "primary" as const,
    tags: ["React", "Vite", "UI"],
  },
  {
    title: "Système de gestion scolaire",
    type: "PHP / MySQL / Bootstrap",
    description: "Plateforme complète de gestion scolaire avec authentification et tableau de bord.",
    link: "https://github.com/boozgit207/school-management",
    linkLabel: "Voir le code",
    icon: GraduationCap,
    color: "accent" as const,
    tags: ["PHP", "MySQL", "Bootstrap"],
  },
  {
    title: "Application médicale de rappel SMS",
    type: "Java / POO",
    description: "Solution de stage développée pour automatiser les rappels médicaux et améliorer l’accessibilité.",
    link: "#contact",
    linkLabel: "En savoir plus",
    icon: BriefcaseBusiness,
    color: "pop" as const,
    tags: ["Java", "POO", "SMS"],
  },
  {
    title: "Projets personnels",
    type: "Java / PHP / React",
    description: "Collection d’expérimentations et d’outils autour des données, du web et de l’IA.",
    link: "https://github.com/boozgit207/",
    linkLabel: "Voir GitHub",
    icon: MessageCircleMore,
    color: "primary" as const,
    tags: ["Data", "IA", "React"],
  },
  {
    title: "Dashboard Power BI",
    type: "Power BI / Data Viz",
    description: "Tableau de bord interactif avec KPIs, mesures et visuels dynamiques pour piloter les données métier.",
    link: "",
    linkLabel: "Voir le projet",
    icon: BarChart3,
    color: "accent" as const,
    tags: ["Power BI", "Dashboard", "Data Viz"],
  },
];

export function PortfolioPage() {
  return (
    <div className="min-h-screen text-[var(--text)] transition-colors duration-300">
      <AmbientBackground />
      <Header links={navLinks} />

      <main id="top" className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <Hero
          title="Je transforme la donnée en décisions."
          subtitle="Étudiant en Data Science, curieux des données, de l’IA et du développement web. Je cherche à créer des solutions utiles, lisibles et concrètes."
          eyebrow="Data Analyst • Data Scientist"
        />
        <About
          title="De l’étudiant à l’analyste."
          label="À propos"
          description={[
            "Actuellement étudiant en Data Science / Data Analyst, formé à Keyce Informatique et Intelligence Artificielle de 2023 à 2026. Je conçois des projets qui allient analyse, machine learning et développement web pour rendre les résultats concrets et accessibles.",
            "Passionné par les technologies émergentes et l’intelligence artificielle, je suis motivé, rigoureux et curieux. Je recherche un stage pour mettre en pratique mes compétences techniques et contribuer à des projets concrets.",
          ]}
        />
        <Experience items={experiences} />
        <Skills groups={skillGroups} />
        <Projects items={projects} />
        <Contact
          email="boozmelki07@gmail.com"
          phone="+237655729499"
          whatsapp="https://wa.me/237655729499"
          linkedin="https://www.linkedin.com/in/booz-fonkou-b148a0385"
          github="https://github.com/boozgit207/"
        />
      </main>

      <Footer />
    </div>
  );
}
