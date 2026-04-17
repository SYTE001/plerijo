"use client";

import { navItems } from "@/data/portfolio";
import { useTheme } from "@/components/theme-provider";

type NavbarProps = {
  activeSection: string;
};

function ThemeIcon({ dark }: { dark: boolean }) {
  return dark ? (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  ) : (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41" />
    </svg>
  );
}

export function Navbar({ activeSection }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-200/60 bg-white/85 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/80">
      <div className="mx-auto flex h-16 w-full max-w-content items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <a href="#hero" className="shrink-0 text-sm font-semibold tracking-wide">
          AC
        </a>

        <nav aria-label="Primary" className="flex min-w-0 flex-1 items-center justify-center gap-4 overflow-x-auto px-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`shrink-0 text-sm transition hover:text-accent ${
                  isActive ? "text-accent" : "text-slate-600 dark:text-slate-300"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={toggleTheme}
          className="inline-flex shrink-0 items-center justify-center rounded-full border border-slate-200 p-2 text-slate-700 transition hover:border-accent hover:text-accent dark:border-slate-700 dark:text-slate-200"
          aria-label="Toggle dark mode"
        >
          <ThemeIcon dark={theme === "dark"} />
        </button>
      </div>
    </header>
  );
}
