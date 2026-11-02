import React, { useState } from 'react';
import { locales, Language, CERTIFICATIONS_LIST, EDUCATION_LIST } from '../data/locales.ts';
import { Award, ExternalLink, GraduationCap, Calendar, MapPin, FileText, ArrowRight } from 'lucide-react';
import { PdfViewerModal } from './PdfViewerModal.tsx';

interface CertificationsProps {
  currentLang: Language;
}

export const Certifications: React.FC<CertificationsProps> = ({ currentLang }) => {
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [selectedPdfPage, setSelectedPdfPage] = useState<number>(1);
  const t = locales[currentLang];
  const certs = CERTIFICATIONS_LIST[currentLang];
  const education = EDUCATION_LIST[currentLang];

  return (
    <section id="certifications" className="py-16 md:py-24 border-b border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Certifications Block Header */}
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-semibold tracking-wider uppercase text-emerald-600 dark:text-emerald-400">
            Accreditation & Credentials
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
            {t.certifications.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            {t.certifications.subtitle}
          </p>
        </div>

        {/* Featured Interactive PDF Viewer Hero Card */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl border bg-gradient-to-r from-zinc-900 to-zinc-950 text-white border-zinc-800 shadow-lg relative overflow-hidden group">
          {/* Subtle ambient light */}
          <div
            className="pointer-events-none absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-emerald-500/10 blur-2xl group-hover:bg-emerald-500/20 transition-all duration-500"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono mb-3">
                <FileText className="w-3.5 h-3.5" />
                <span>PDF Document Ready · 17 Diplomas</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                {t.certifications.pdfButton}
              </h3>
              
              <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {t.certifications.pdfSubtitle}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => setIsPdfModalOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold rounded-lg bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-all duration-200 shadow-md group/btn"
              >
                <FileText className="w-4 h-4" />
                <span>{t.certifications.pdfButton}</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>

              <a
                href="/certificates.pdf"
                download="Alejandro_Fernandez_Certificados.pdf"
                className="inline-flex items-center gap-1.5 px-4 py-3 text-xs sm:text-sm font-medium rounded-lg border border-zinc-700 hover:bg-zinc-800/80 text-zinc-200 transition-colors"
                title={t.certifications.pdfDownload}
              >
                <span>{t.certifications.pdfDownload}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Minimalist, Clean Certifications List (No heavy cards) */}
        <div className="rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/40 divide-y divide-zinc-200/60 dark:divide-zinc-800/60 overflow-hidden shadow-2xs">
          {certs.map((cert, index) => (
            <a
              key={cert.id}
              href={cert.url}
              onClick={(e) => {
                if (!e.ctrlKey && !e.metaKey && !e.shiftKey) {
                  e.preventDefault();
                  setSelectedPdfPage(index + 1);
                  setIsPdfModalOpen(true);
                }
              }}
              className="flex items-center justify-between gap-4 p-3.5 sm:px-5 hover:bg-zinc-100/70 dark:hover:bg-zinc-800/50 transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500 w-5 shrink-0 select-none">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <div className="truncate">
                  <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors truncate">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 truncate">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0 text-xs font-mono text-zinc-400 dark:text-zinc-500">
                <span>{cert.year}</span>
                <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">·</span>
                <span className="hidden sm:inline text-emerald-600 dark:text-emerald-400 font-sans font-medium text-[11px] group-hover:underline">
                  {t.certifications.viewCredential}
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
              </div>
            </a>
          ))}
        </div>

        {/* Education & Academic Formation Sub-Section */}
        <div className="mt-20 pt-12 border-t border-zinc-200 dark:border-zinc-800/80">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-semibold tracking-wider uppercase text-emerald-600 dark:text-emerald-400">
              Academic Background
            </span>
            <h3 className="mt-1 text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              {t.certifications.educationTitle}
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {t.certifications.educationSubtitle}
            </p>
          </div>

          {/* Minimalist Education Items */}
          <div className="rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/40 divide-y divide-zinc-200/60 dark:divide-zinc-800/60 overflow-hidden shadow-2xs">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="p-5 sm:px-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/30 transition-colors"
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/40 shrink-0 mt-0.5">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-zinc-100">
                      {edu.title}
                    </h4>
                    <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">
                      {edu.institution}
                    </p>
                    <p className="mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
                      {edu.description}
                    </p>
                  </div>
                </div>

                <div className="flex sm:flex-col sm:items-end gap-3 text-xs font-mono text-zinc-500 dark:text-zinc-400 shrink-0 self-start">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Interactive PDF Viewer Modal */}
      <PdfViewerModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
        currentLang={currentLang}
        initialPage={selectedPdfPage}
      />
    </section>
  );
};
