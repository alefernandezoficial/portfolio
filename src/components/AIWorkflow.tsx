import React from 'react';
import { locales, Language } from '../data/locales.ts';
import { Sparkles, Cpu, CheckCircle2, Zap } from 'lucide-react';

interface AIWorkflowProps {
  currentLang: Language;
}

export const AIWorkflow: React.FC<AIWorkflowProps> = ({ currentLang }) => {
  const t = locales[currentLang];

  const pillarIcons = [
    <Sparkles key="sparkles" className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    <Cpu key="cpu" className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    <CheckCircle2 key="check" className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  ];

  return (
    <section id="methods" className="py-16 md:py-24 border-b border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="text-xs font-semibold tracking-wider uppercase text-emerald-600 dark:text-emerald-400">
            {t.aiWorkflow.subtitle}
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
            {t.aiWorkflow.title}
          </h2>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {t.aiWorkflow.description}
          </p>
        </div>

        {/* 3 Strategic Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {t.aiWorkflow.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-6 sm:p-8 rounded-xl border bg-white dark:bg-zinc-900/80 border-zinc-200 dark:border-zinc-800 transition-all hover:border-zinc-300 dark:hover:border-zinc-700 shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-sm font-bold text-zinc-400 dark:text-zinc-500">
                    {pillar.number}
                  </span>
                  <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-900/40">
                    {pillarIcons[idx]}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight mb-3">
                  {pillar.title}
                </h3>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Quantified Outcome Footnote */}
              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-start gap-2">
                <Zap className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                  {pillar.impact}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
