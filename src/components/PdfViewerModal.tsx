import React, { useState, useEffect } from 'react';
import { locales, Language, CERTIFICATIONS_LIST } from '../data/locales.ts';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  FileText,
  Award,
} from 'lucide-react';

interface PdfViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  initialPage?: number;
}

export const PdfViewerModal: React.FC<PdfViewerModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  initialPage = 1,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const totalPages = 12; // 12 certified diplomas from CV
  const t = locales[currentLang];
  const certs = CERTIFICATIONS_LIST[currentLang];

  useEffect(() => {
    if (isOpen && initialPage >= 1 && initialPage <= totalPages) {
      setCurrentPage(initialPage);
    }
  }, [isOpen, initialPage, totalPages]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && currentPage < totalPages) {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
      }
      if (e.key === 'ArrowLeft' && currentPage > 1) {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, currentPage, totalPages]);

  if (!isOpen) return null;

  const currentCert = certs[currentPage - 1];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-zinc-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-5xl h-[90vh] flex flex-col rounded-xl border bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden text-zinc-900 dark:text-zinc-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-4 sm:px-6 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60">
          
          {/* Document Title & Active Certificate Tag */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
              <Award className="w-4 h-4" />
            </div>
            <div className="truncate">
              <h3 className="text-sm sm:text-base font-bold tracking-tight truncate">
                {t.certifications.pdfModalTitle}
              </h3>
              {currentCert && (
                <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
                  {currentCert.name} · {currentCert.issuer} ({currentCert.year})
                </p>
              )}
            </div>
          </div>

          {/* Right Action Tools: Page Navigation & PDF Operations */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Page Jump Selector */}
            <div className="flex items-center gap-1 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg p-0.5 text-xs">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage <= 1}
                className="p-1 rounded text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                title={t.certifications.pdfPrevPage}
                aria-label="Página anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <span className="px-2 font-mono text-zinc-700 dark:text-zinc-300 font-semibold text-xs whitespace-nowrap">
                {currentPage} / {totalPages}
              </span>

              <button
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={currentPage >= totalPages}
                className="p-1 rounded text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                title={t.certifications.pdfNextPage}
                aria-label="Página siguiente"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Direct Open in New Tab Button */}
            <a
              href={`/certificates.pdf#page=${currentPage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              title={t.certifications.pdfOpenTab}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>{t.certifications.pdfOpenTab}</span>
            </a>

            {/* Download PDF Button */}
            <a
              href="/certificates.pdf"
              download="Alejandro_Fernandez_Diplomas_Certificados.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-xs"
              title={t.certifications.pdfDownload}
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t.certifications.pdfDownload}</span>
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Quick Jump Tab Strip */}
        <div className="flex items-center gap-1 px-4 py-2 bg-zinc-100/70 dark:bg-zinc-950/40 border-b border-zinc-200/80 dark:border-zinc-800/80 overflow-x-auto text-[11px] font-mono no-scrollbar">
          <span className="text-zinc-400 dark:text-zinc-500 shrink-0 mr-1">
            {currentLang === 'es' ? 'Certificados:' : 'Certificates:'}
          </span>
          {certs.map((c, idx) => {
            const pageNum = idx + 1;
            const isSelected = currentPage === pageNum;
            return (
              <button
                key={c.id}
                onClick={() => setCurrentPage(pageNum)}
                className={`px-2 py-0.5 rounded transition-colors whitespace-nowrap shrink-0 ${
                  isSelected
                    ? 'bg-emerald-500 text-zinc-950 font-bold'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-800'
                }`}
                title={c.name}
              >
                #{pageNum} {c.issuer.split(' ')[0]}
              </button>
            );
          })}
        </div>

        {/* Interactive PDF Canvas / Responsive Viewer */}
        <div className="relative flex-1 w-full h-full bg-zinc-900/95 overflow-hidden flex flex-col items-center justify-center">
          <iframe
            key={`pdf-page-${currentPage}`}
            src={`/certificates.pdf#page=${currentPage}&toolbar=0&navpanes=0&view=FitH`}
            className="w-full h-full border-0"
            title="Visor de Certificados Oficiales"
          />

          {/* Graceful Fallback bar for mobile and restricted browsers */}
          <div className="sm:hidden absolute bottom-2 left-2 right-2 p-2 rounded-lg bg-zinc-950/90 border border-zinc-800 backdrop-blur-sm text-center flex items-center justify-between text-xs text-zinc-300">
            <span>{t.certifications.pdfFallbackNote}</span>
            <a
              href="/certificates.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 font-bold underline ml-2"
            >
              {t.certifications.pdfOpenTab}
            </a>
          </div>
        </div>

        {/* Footer info bar */}
        <div className="px-6 py-2.5 bg-zinc-50 dark:bg-zinc-950/60 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-2">
            <FileText className="w-3.5 h-3.5 text-emerald-500" />
            <span>
              {currentLang === 'es'
                ? 'PDF Visual'
                : 'PDF Visual'}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`/certificates.pdf#page=${currentPage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
            >
              <span>{t.certifications.pdfOpenTab}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
