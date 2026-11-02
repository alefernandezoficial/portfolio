import React, { useState } from 'react';
import { locales, Language, ProjectData, PROJECTS_DATA } from '../data/locales.ts';
import { ProjectCard } from './ProjectCard.tsx';
import { CaseStudyModal } from './CaseStudyModal.tsx';

interface ProjectsProps {
  currentLang: Language;
}

export const Projects: React.FC<ProjectsProps> = ({ currentLang }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const t = locales[currentLang];
  const projects = PROJECTS_DATA[currentLang];

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-emerald-600 dark:text-emerald-400">
            Portfolio & Impact
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
            {t.projects.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            {t.projects.subtitle}
          </p>
        </div>

        {/* 3 Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <ProjectCard
              key={proj.id}
              project={proj}
              onOpenCaseStudy={setSelectedProject}
              currentLang={currentLang}
            />
          ))}
        </div>
      </div>

      {/* Case Study Modal Dialog */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        currentLang={currentLang}
      />
    </section>
  );
};
