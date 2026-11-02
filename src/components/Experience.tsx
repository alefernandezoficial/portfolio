import React from 'react';
import { locales, Language, EXPERIENCE_DATA } from '../data/locales.ts';
import { Calendar, MapPin, CheckCircle } from 'lucide-react';

interface ExperienceProps {
  currentLang: Language;
}

export const Experience: React.FC<ExperienceProps> = ({ currentLang }) => {
  const t = locales[currentLang];
  const experiences = EXPERIENCE_DATA[currentLang];

  return (
    <section id="experience" className="py-16 md:py-24 border-b border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="text-xs font-semibold tracking-wider uppercase text-emerald-600 dark:text-emerald-400">
            Career Timeline
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
            {t.experience.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            {t.experience.subtitle}
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-3 sm:ml-6 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-6 sm:pl-10 group">
              {/* Timeline marker */}
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700 group-hover:bg-emerald-500 transition-colors" />

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-xl border bg-white dark:bg-zinc-900/60 border-zinc-200 dark:border-zinc-800 transition-all hover:border-zinc-300 dark:hover:border-zinc-700 shadow-xs">
                
                {/* Header row: Role, Company, Period, Location */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-4 border-b border-zinc-100 dark:border-zinc-800/80">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Ecosystem / Platforms Strip */}
                <div className="py-3 text-xs text-zinc-500 dark:text-zinc-400 border-b border-zinc-100 dark:border-zinc-800/80">
                  <span className="font-semibold text-zinc-700 dark:text-zinc-300 mr-2">
                    {t.experience.platformsLabel}
                  </span>
                  <span className="font-mono text-zinc-600 dark:text-zinc-400">
                    {exp.platforms.join(' · ')}
                  </span>
                </div>

                {/* Bullets List replicating exact CV */}
                <ul className="mt-4 space-y-3">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
