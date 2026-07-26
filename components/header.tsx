import { FileText, Sparkles } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { useEffect, useState } from "react";

type NavLink = { href: string; label: string };

interface HeaderProps {
  links: NavLink[];
}

export function Header({ links }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(255,255,255,0.95)] shadow-sm border-[rgba(11,18,32,0.08)] backdrop-blur-2xl dark:bg-[rgba(11,18,32,0.88)] dark:border-[rgba(255,255,255,0.12)]"
          : "bg-[rgba(255,255,255,0.90)] border-[rgba(11,18,32,0.06)] backdrop-blur-xl dark:bg-[rgba(11,18,32,0.78)] dark:border-[rgba(255,255,255,0.10)]"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-hover rounded-full px-2 py-1 text-[var(--text)] transition hover:text-[var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/Curriculum_vitae_Fonkou_booz.pdf"
            target="_blank"
            rel="noreferrer"
            download
            className="hidden items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--text)] transition hover:border-[var(--primary)]/40 hover:text-[var(--primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] sm:inline-flex"
          >
            <FileText size={15} />
            Télécharger mon CV
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
