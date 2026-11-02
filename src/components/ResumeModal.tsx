import React, { useEffect } from 'react';
import { locales, Language, EXPERIENCE_DATA, CERTIFICATIONS_LIST, EDUCATION_LIST } from '../data/locales.ts';
import { X, Printer, Download, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, currentLang }) => {
  const t = locales[currentLang];
  const experiences = EXPERIENCE_DATA[currentLang];
  const certifications = CERTIFICATIONS_LIST[currentLang];
  const education = EDUCATION_LIST[currentLang];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-zinc-950/80 backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-xl border bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 shadow-2xl p-6 sm:p-10 text-zinc-900 dark:text-zinc-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Controls Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-zinc-200 dark:border-zinc-800 gap-4 no-print">
          <div className="flex items-center gap-2">
            <h2 className="text-lg sm:text-xl font-bold tracking-tight">
              {t.resumeModal.title}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition-colors shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{t.resumeModal.printAction}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Cerrar modal de CV"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Content Body */}
        <div className="mt-8 space-y-8 font-sans">
          
          {/* Header CV Block */}
          <div className="border-b pb-6 border-zinc-200 dark:border-zinc-800">
            <h1 className="text-3xl font-extrabold tracking-tight">
              Alejandro Fernández
            </h1>
            <p className="text-base font-semibold text-emerald-600 dark:text-emerald-400 mt-1">
              Tech-Driven E-Commerce & AI Operations Specialist
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-zinc-600 dark:text-zinc-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                <span>Rosario, Santa Fe, Argentina</span>
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-emerald-500" />
                <span>+54 341 275 8775</span>
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-emerald-500" />
                <span>alefernandezoficial@gmail.com</span>
              </span>
              <span className="flex items-center gap-1">
                <Linkedin className="w-3.5 h-3.5 text-emerald-500" />
                <span>linkedin.com/in/alefernandezoficial</span>
              </span>
              <span className="flex items-center gap-1">
                <Github className="w-3.5 h-3.5 text-emerald-500" />
                <span>github.com/alefernandezoficial</span>
              </span>
            </div>
          </div>

          {/* Perfil Profesional */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-bold text-emerald-600 dark:text-emerald-400 mb-2">
              {currentLang === 'es' ? 'Perfil Profesional' : 'Professional Profile'}
            </h3>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {t.hero.subtitle}
            </p>
          </div>

          {/* Experiencia Laboral */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-bold text-emerald-600 dark:text-emerald-400 mb-4">
              {currentLang === 'es' ? 'Experiencia Laboral' : 'Work Experience'}
            </h3>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                    <span className="font-bold text-zinc-900 dark:text-zinc-100">
                      {exp.role} — <span className="font-medium text-emerald-600 dark:text-emerald-400">{exp.company}</span>
                    </span>
                    <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                      {exp.period} · {exp.location}
                    </span>
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                    <span className="font-semibold text-zinc-700 dark:text-zinc-300">
                      {currentLang === 'es' ? 'Plataformas:' : 'Platforms:'}
                    </span>{' '}
                    {exp.platforms.join(' · ')}
                  </div>
                  <ul className="list-disc pl-5 space-y-1 text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Habilidades y Herramientas */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-bold text-emerald-600 dark:text-emerald-400 mb-2">
              {currentLang === 'es' ? 'Habilidades & Herramientas' : 'Skills & Tools'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-lg border bg-zinc-50 dark:bg-zinc-950/50 border-zinc-200 dark:border-zinc-800">
                <span className="font-bold text-zinc-900 dark:text-zinc-100 block mb-1">
                  E-Commerce & Datos
                </span>
                <span className="text-zinc-600 dark:text-zinc-400">
                  Excel, Xero, Amazon FBA, eBay, Tiendanube, Shopify, Data Entry masivo, Auditoría de Inventario.
                </span>
              </div>
              <div className="p-3 rounded-lg border bg-zinc-50 dark:bg-zinc-950/50 border-zinc-200 dark:border-zinc-800">
                <span className="font-bold text-zinc-900 dark:text-zinc-100 block mb-1">
                  QA & IA
                </span>
                <span className="text-zinc-600 dark:text-zinc-400">
                  QA Testing Web Manual, Prompt Engineering, API de Gemini, Google AI Studio, UI/UX Checkout, Photoshop, Vegas Pro.
                </span>
              </div>
              <div className="p-3 rounded-lg border bg-zinc-50 dark:bg-zinc-950/50 border-zinc-200 dark:border-zinc-800">
                <span className="font-bold text-zinc-900 dark:text-zinc-100 block mb-1">
                  Dev & Cloud
                </span>
                <span className="text-zinc-600 dark:text-zinc-400">
                  HTML5, CSS3, JavaScript, Node.js, React, Vite, Git, Azure AZ900, IBM Cloud.
                </span>
              </div>
            </div>
          </div>

          {/* Certificaciones y Educación */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-bold text-emerald-600 dark:text-emerald-400 mb-3">
              {currentLang === 'es' ? 'Certificaciones & Educación' : 'Certifications & Education'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {certifications.map((c) => (
                <div key={c.id} className="flex items-center justify-between py-1 border-b border-zinc-100 dark:border-zinc-800/80">
                  <span className="text-zinc-800 dark:text-zinc-200 truncate pr-2">
                    {c.name}
                  </span>
                  <span className="font-mono text-zinc-500 dark:text-zinc-400 shrink-0">
                    {c.issuer} ({c.year})
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800 space-y-2">
              {education.map((e) => (
                <div key={e.id} className="text-xs">
                  <span className="font-bold text-zinc-900 dark:text-zinc-100">{e.title}</span> —{' '}
                  <span className="text-zinc-600 dark:text-zinc-400">{e.institution} ({e.period})</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom Close Button */}
        <div className="mt-8 pt-5 border-t border-zinc-200 dark:border-zinc-800 flex justify-end no-print">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-lg border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            {t.resumeModal.closeAction}
          </button>
        </div>
      </div>
    </div>
  );
};
