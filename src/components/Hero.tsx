import React from 'react';
import { locales, Language } from '../data/locales.ts';
import { ArrowRight, MessageCircle, Briefcase, FolderGit2 } from 'lucide-react';

interface HeroProps {
  currentLang: Language;
}

export const Hero: React.FC<HeroProps> = ({ currentLang }) => {
  const t = locales[currentLang];

  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-zinc-200 dark:border-zinc-800/80 overflow-hidden">
      {/* Subtle background ambient gradient */}
      <div
        className="pointer-events-none absolute -top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-500/5"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Location / Kicker */}
          <div className="flex items-center gap-2 text-xs font-medium tracking-wide uppercase text-zinc-500 dark:text-zinc-400 mb-4">
            <span>{t.hero.kicker}</span>
          </div>

          {/* Main Display Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 leading-tight md:leading-none text-balance">
            {t.hero.headline}
          </h1>

          {/* Subtitle based strictly on CV */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal max-w-3xl">
            {t.hero.subtitle}
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#experience"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-lg text-white bg-zinc-900 hover:bg-zinc-800 dark:bg-emerald-500 dark:text-zinc-950 dark:hover:bg-emerald-400 transition-all shadow-sm"
            >
              <Briefcase className="w-4 h-4" />
              <span>{t.hero.ctaExperience}</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-lg border text-zinc-800 dark:text-zinc-200 border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              <FolderGit2 className="w-4 h-4" />
              <span>{t.hero.ctaProjects}</span>
            </a>

            <a
              href="https://wa.me/543412758775"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-lg text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{t.hero.ctaWhatsApp}</span>
            </a>
          </div>
        </div>

        {/* Quantified Proof Metrics Strip directly from CV */}
        <div className="mt-14 pt-10 border-t border-zinc-200 dark:border-zinc-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {t.hero.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-mono tabular-nums text-zinc-900 dark:text-zinc-100">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                {stat.label}
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 leading-snug">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
