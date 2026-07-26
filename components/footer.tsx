export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-4 py-8 text-sm text-[var(--text-muted)] sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Fonkou Oumbe Booz Melki</p>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/booz-fonkou-b148a0385" target="_blank" rel="noreferrer" className="link-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]">
            LinkedIn
          </a>
          <a href="https://github.com/boozgit207/" target="_blank" rel="noreferrer" className="link-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]">
            GitHub
          </a>
          <a href="mailto:boozmelki07@gmail.com" className="link-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
