import React, { useEffect } from 'react';
import { ProjectData, locales, Language } from '../data/locales.ts';
import { X, ExternalLink, CheckCircle, Target, Wrench, BarChart3 } from 'lucide-react';

interface CaseStudyModalProps {
  project: ProjectData | null;
  onClose: () => void;
  currentLang: Language;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose, currentLang }) => {
  const t = locales[currentLang];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-zinc-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl border bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 shadow-2xl p-6 sm:p-8 text-zinc-900 dark:text-zinc-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar with Project Name & Close Button */}
        <div className="flex items-start justify-between gap-4 border-b pb-5 border-zinc-200 dark:border-zinc-800">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 font-mono mb-1">
              <span>{project.company}</span>
              <span aria-hidden="true">·</span>
              <span>{project.location}</span>
              <span aria-hidden="true">·</span>
              <span>{project.period}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {project.name}
            </h2>
            <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mt-1">
              {project.role}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Project Preview Image */}
        <div className="mt-6 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 aspect-video max-h-64 w-full bg-zinc-100 dark:bg-zinc-950 relative">
          <img
            src={project.image}
            alt={project.name}
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src.includes('/images/')) {
                target.src = target.src.replace('/images/', '/assets/images/');
              }
            }}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Platforms and Direct Link */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800 text-xs">
          <div>
            <span className="font-semibold text-zinc-500 dark:text-zinc-400 mr-2">
              {t.projects.platformsLabel}
            </span>
            <span className="font-mono text-zinc-900 dark:text-zinc-200">
              {project.platforms.join(' · ')}
            </span>
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            <span>{project.displayUrl}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Key Metrics Highlight Grid */}
        <div className="mt-6 grid grid-cols-3 gap-3">
          {project.metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-3 rounded-lg border text-center bg-zinc-50/70 dark:bg-zinc-800/40 border-zinc-200 dark:border-zinc-800"
            >
              <div className="text-xl sm:text-2xl font-mono font-bold text-zinc-900 dark:text-zinc-100">
                {m.value}
              </div>
              <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium mt-0.5">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Core Body: Desafío -> Solución -> Resultados */}
        <div className="mt-8 space-y-6">
          {/* 1. Desafío */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              <Target className="w-4 h-4 text-amber-500" />
              <span>{t.projects.modalChallengeTitle}</span>
            </div>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 pl-6 border-l border-zinc-200 dark:border-zinc-800">
              {project.challenge}
            </p>
          </div>

          {/* 2. Solución Implementada */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              <Wrench className="w-4 h-4 text-emerald-500" />
              <span>{t.projects.modalSolutionTitle}</span>
            </div>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 pl-6 border-l border-zinc-200 dark:border-zinc-800">
              {project.solution}
            </p>
          </div>

          {/* 3. Resultados / Impacto */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              <BarChart3 className="w-4 h-4 text-blue-500" />
              <span>{t.projects.modalResultsTitle}</span>
            </div>
            <ul className="space-y-2 pl-6 border-l border-zinc-200 dark:border-zinc-800">
              {project.results.map((res, i) => (
                <li key={i} className="text-sm text-zinc-600 dark:text-zinc-300 flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{res}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Modal Actions */}
        <div className="mt-8 pt-5 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg text-white bg-zinc-900 hover:bg-zinc-800 dark:bg-emerald-500 dark:text-zinc-950 dark:hover:bg-emerald-400 transition-colors"
          >
            <span>{t.projects.visitSite}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            {t.projects.modalClose}
          </button>
        </div>
      </div>
    </div>
  );
};
