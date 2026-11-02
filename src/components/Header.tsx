import React, { useState } from 'react';
import { locales, Language } from '../data/locales.ts';
import { Sun, Moon, Globe, FileText, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenResume: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  isDark,
  onToggleTheme,
  onOpenResume,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = locales[currentLang];

  const navLinks = [
    { href: '#experience', label: t.nav.experience },
    { href: '#methods', label: t.nav.methods },
    { href: '#skills', label: t.nav.skills },
    { href: '#projects', label: t.nav.projects },
    { href: '#certifications', label: t.nav.certifications },
    { href: '#about-interests', label: t.nav.beyondCode },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b backdrop-blur-md transition-colors bg-white/90 dark:bg-zinc-950/90 border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4 lg:gap-8">
          
          {/* Brand & Availability Status */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#"
              className="text-base sm:text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors whitespace-nowrap"
            >
              {t.nav.brand}
            </a>

            <div className="hidden sm:inline-flex items-center gap-2 pl-3 border-l border-zinc-200 dark:border-zinc-800 text-xs font-medium text-emerald-700 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="truncate max-w-[200px] lg:max-w-none">{t.nav.availableBadge}</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Controls: Language, Theme & Resume CTA */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Language Toggle */}
            <button
              onClick={() => onLanguageChange(currentLang === 'es' ? 'en' : 'es')}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-md border text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              title={currentLang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{t.nav.languageToggle}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={onToggleTheme}
              className="p-1.5 text-xs rounded-md border text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              title={isDark ? 'Switch to Light Mode' : 'Cambiar a Modo Oscuro'}
              aria-label="Toggle dark/light theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-zinc-600" />}
            </button>

            {/* Resume Modal CTA */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-emerald-500 dark:text-zinc-950 dark:hover:bg-emerald-400 shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{t.nav.downloadCV}</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t py-3 space-y-2 border-zinc-200 dark:border-zinc-800 animate-in fade-in slide-in-from-top-1">
            <div className="sm:hidden flex items-center gap-2 py-1 px-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{t.nav.availableBadge}</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium rounded-md text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
