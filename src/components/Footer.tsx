import React from 'react';
import { locales, Language } from '../data/locales.ts';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = locales[currentLang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-950 text-xs text-zinc-500 dark:text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <p className="font-semibold text-zinc-800 dark:text-zinc-200">
              Alejandro Fernández · Rosario, Santa Fe, Argentina
            </p>
            <p>{t.footer.profileSummary}</p>
          </div>

          <div className="flex items-center gap-6">
            <span className="font-mono">
              © {new Date().getFullYear()} {t.footer.rights}
            </span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              aria-label="Scroll to top"
            >
              <span>{t.footer.top}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
