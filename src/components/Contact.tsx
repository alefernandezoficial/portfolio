import React, { useState } from 'react';
import { locales, Language } from '../data/locales.ts';
import { Mail, MessageCircle, Linkedin, Github, ExternalLink, Copy, Check, MapPin, Phone } from 'lucide-react';

interface ContactProps {
  currentLang: Language;
}

export const Contact: React.FC<ContactProps> = ({ currentLang }) => {
  const [copied, setCopied] = useState(false);
  const t = locales[currentLang];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('alefernandezoficial@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-b border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-emerald-600 dark:text-emerald-400">
            Get in touch
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
            {t.contact.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* 1. Direct WhatsApp Card */}
          <div className="p-6 rounded-xl border bg-white dark:bg-zinc-900/60 border-zinc-200 dark:border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/40">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                    WhatsApp
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                    +54 341 275 8775
                  </p>
                </div>
              </div>

              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                {currentLang === 'es'
                  ? 'Canal directo para consultas inmediatas sobre disponibilidad, proyectos o consultorías.'
                  : 'Fast response channel for availability inquiries, e-commerce operations or consulting.'}
              </p>
            </div>

            <a
              href="https://wa.me/543412758775"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.contact.whatsappButton}</span>
            </a>
          </div>

          {/* 2. Direct Email Card */}
          <div className="p-6 rounded-xl border bg-white dark:bg-zinc-900/60 border-zinc-200 dark:border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                    Email
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono truncate max-w-[200px]">
                    alefernandezoficial@gmail.com
                  </p>
                </div>
              </div>

              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                {currentLang === 'es'
                  ? 'Para propuestas formales, descripciones de puesto o documentación de contratación.'
                  : 'Ideal for formal inquiries, job specs, and contract documentation.'}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="mailto:alefernandezoficial@gmail.com"
                className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-semibold rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{currentLang === 'es' ? 'Enviar Email' : 'Send Email'}</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-2.5 text-xs font-medium rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                title={t.contact.copyEmail}
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? t.contact.copied : t.contact.copyEmail}</span>
              </button>
            </div>
          </div>

          {/* 3. Professional Networks & Location */}
          <div className="p-6 rounded-xl border bg-white dark:bg-zinc-900/60 border-zinc-200 dark:border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                  <MapPin className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                    {t.contact.locationLabel}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                    {t.contact.locationValue}
                  </p>
                </div>
              </div>

              <div className="space-y-2.5 my-4">
                <a
                  href="https://linkedin.com/in/alefernandezoficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-800 text-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors group"
                >
                  <span className="flex items-center gap-2 font-medium text-zinc-700 dark:text-zinc-300">
                    <Linkedin className="w-4 h-4 text-blue-600" />
                    <span>LinkedIn Profile</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100" />
                </a>

                <a
                  href="https://github.com/alefernandezoficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-800 text-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors group"
                >
                  <span className="flex items-center gap-2 font-medium text-zinc-700 dark:text-zinc-300">
                    <Github className="w-4 h-4 text-zinc-900 dark:text-zinc-100" />
                    <span>GitHub Profile</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100" />
                </a>
              </div>
            </div>

            <a
              href="https://alefernandezoficial.github.io/my-portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-xs font-mono text-zinc-500 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center justify-between pt-3 border-t border-zinc-100 dark:border-zinc-800/80"
            >
              <span>{t.contact.previousPortfolio}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
