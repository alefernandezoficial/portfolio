import React from 'react';
import { ProjectData, Language } from '../data/locales.ts';
import { ArrowUpRight, FileText } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectData;
  onOpenCaseStudy: (project: ProjectData) => void;
  currentLang: Language;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy, currentLang }) => {
  return (
    <article className="flex flex-col justify-between rounded-xl border bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all overflow-hidden group shadow-xs">
      <div>
        {/* Project Image Preview */}
        <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
          <img
            src={project.image}
            alt={project.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 right-3">
            <span className="px-2 py-1 text-[11px] font-mono font-medium rounded bg-zinc-950/80 text-zinc-200 backdrop-blur-xs border border-zinc-700/50">
              {project.period}
            </span>
          </div>
        </div>

        {/* Content Block */}
        <div className="p-6">
          {/* Metadata unboxed text */}
          <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 font-mono mb-2">
            <span>{project.company}</span>
            <span aria-hidden="true">·</span>
            <span>{project.location}</span>
          </div>

          <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            {project.name}
          </h3>

          <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 mt-0.5 mb-3">
            {project.role}
          </p>

          <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed line-clamp-3">
            {project.summary}
          </p>

          {/* Platforms unboxed with separators */}
          <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-500 dark:text-zinc-400">
              {project.platforms.map((plat, idx) => (
                <React.Fragment key={idx}>
                  <span className="font-mono text-zinc-700 dark:text-zinc-300">{plat}</span>
                  {idx < project.platforms.length - 1 && <span aria-hidden="true">·</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Card Action Buttons */}
      <div className="p-6 pt-0 flex items-center justify-between gap-3">
        <button
          onClick={() => onOpenCaseStudy(project)}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-emerald-500 dark:text-zinc-950 dark:hover:bg-emerald-400 transition-colors"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>{currentLang === 'es' ? 'Ver Case Study' : 'View Case Study'}</span>
        </button>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
        >
          <span className="font-mono">{project.displayUrl}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </article>
  );
};
