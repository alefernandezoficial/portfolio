/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language } from './data/locales.ts';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { AIWorkflow } from './components/AIWorkflow.tsx';
import { TechStack } from './components/TechStack.tsx';
import { Projects } from './components/Projects.tsx';
import { Experience } from './components/Experience.tsx';
import { Certifications } from './components/Certifications.tsx';
import { Contact } from './components/Contact.tsx';
import { AboutAndInterests } from './components/AboutAndInterests.tsx';
import { Footer } from './components/Footer.tsx';
import { ResumeModal } from './components/ResumeModal.tsx';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('es');
  const [isDark, setIsDark] = useState<boolean>(true);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  // Sync theme with html root element
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-200 selection:bg-emerald-500/20 selection:text-emerald-400">
      {/* 1. Header & Navigation */}
      <Header
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero currentLang={currentLang} />

        {/* 3. AI Methods & Automation */}
        <AIWorkflow currentLang={currentLang} />

        {/* 4. Tech Stack & Tools (Interactive Filter) */}
        <TechStack currentLang={currentLang} />

        {/* 5. Projects & Case Studies */}
        <Projects currentLang={currentLang} />

        {/* 6. Work Experience Timeline */}
        <Experience currentLang={currentLang} />

        {/* 7. Verifiable Certifications & Education */}
        <Certifications currentLang={currentLang} />

        {/* 8. Direct Contact */}
        <Contact currentLang={currentLang} />

        {/* 9. About & Interests: e-Sports, Hardware Setup & VrbanLifeRecords */}
        <AboutAndInterests currentLang={currentLang} />
      </main>

      {/* Footer */}
      <Footer currentLang={currentLang} />

      {/* Printable / Downloadable CV Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        currentLang={currentLang}
      />
    </div>
  );
}
