import React, { useState } from 'react';
import { locales, Language } from '../data/locales.ts';
import {
  ShoppingCart,
  Terminal,
  Cloud,
  CheckCircle2,
  Layers,
  Database,
  Bot,
  Code2,
  Sparkles,
  FileSpreadsheet,
  Globe,
  ShieldCheck,
  Cpu,
  Palette,
  Video,
  FileCode,
  GitBranch,
} from 'lucide-react';

interface TechStackProps {
  currentLang: Language;
}

interface ToolBadge {
  id: string;
  name: string;
  category: 'ecommerce' | 'qa' | 'cloud';
  context: string;
  icon: React.ReactNode;
}

export const TechStack: React.FC<TechStackProps> = ({ currentLang }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'ecommerce' | 'qa' | 'cloud'>('all');
  const t = locales[currentLang];

  // Strictly real tools from Alejandro Fernández's CV
  const tools: ToolBadge[] = [
    // [E-Commerce & Ops]
    {
      id: 'shopify',
      name: 'Shopify',
      category: 'ecommerce',
      context: currentLang === 'es' ? 'Benchmarking & arquitectura' : 'Benchmarking & architecture',
      icon: <ShoppingCart className="w-3.5 h-3.5 text-emerald-500" />,
    },
    {
      id: 'tiendanube',
      name: 'Tiendanube',
      category: 'ecommerce',
      context: currentLang === 'es' ? 'Catálogo 150+ refs (MJ Capilar)' : '150+ SKU catalog (MJ Capilar)',
      icon: <ShoppingCart className="w-3.5 h-3.5 text-emerald-500" />,
    },
    {
      id: 'amazon-fba',
      name: 'Amazon FBA',
      category: 'ecommerce',
      context: currentLang === 'es' ? 'Fulfillment & inventario (AAG)' : 'Fulfillment & inventory (AAG)',
      icon: <Database className="w-3.5 h-3.5 text-amber-500" />,
    },
    {
      id: 'ebay',
      name: 'eBay',
      category: 'ecommerce',
      context: currentLang === 'es' ? 'Venta y listados multicanal' : 'Multi-channel sales & listings',
      icon: <Globe className="w-3.5 h-3.5 text-blue-500" />,
    },
    {
      id: 'racinghub',
      name: 'racinghub.live',
      category: 'ecommerce',
      context: currentLang === 'es' ? 'Tienda propia UK (+500 refs)' : 'Proprietary UK store (500+ SKUs)',
      icon: <Globe className="w-3.5 h-3.5 text-emerald-400" />,
    },
    {
      id: 'data-entry',
      name: 'Data Entry Masivo',
      category: 'ecommerce',
      context: currentLang === 'es' ? '99.5% precisión operativa' : '99.5% operational precision',
      icon: <FileSpreadsheet className="w-3.5 h-3.5 text-teal-500" />,
    },
    {
      id: 'inventory-audit',
      name: 'Auditoría de Inventario',
      category: 'ecommerce',
      context: currentLang === 'es' ? 'Control de existencias & precios' : 'Stock control & price audits',
      icon: <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />,
    },
    {
      id: 'excel',
      name: 'Microsoft Excel',
      category: 'ecommerce',
      context: currentLang === 'es' ? 'Conciliación masiva y análisis' : 'Bulk reconciliation & analytics',
      icon: <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />,
    },
    {
      id: 'xero',
      name: 'Xero',
      category: 'ecommerce',
      context: currentLang === 'es' ? 'Facturación y finanzas intl.' : 'Invoicing & intl. accounting',
      icon: <FileSpreadsheet className="w-3.5 h-3.5 text-cyan-500" />,
    },

    // [QA, Dev & IA]
    {
      id: 'qa-manual',
      name: 'QA Testing Web Manual',
      category: 'qa',
      context: currentLang === 'es' ? 'Login, checkout & canales (0 bugs)' : 'Login, checkout & funnels (0 bugs)',
      icon: <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />,
    },
    {
      id: 'prompt-eng',
      name: 'Prompt Engineering',
      category: 'qa',
      context: currentLang === 'es' ? 'Automatización de catálogos' : 'Catalog copywriting automation',
      icon: <Sparkles className="w-3.5 h-3.5 text-purple-400" />,
    },
    {
      id: 'gemini-api',
      name: 'API de Gemini',
      category: 'qa',
      context: currentLang === 'es' ? 'Reducción 50% tiempo edición' : '50% faster catalog authoring',
      icon: <Bot className="w-3.5 h-3.5 text-blue-400" />,
    },
    {
      id: 'ai-studio',
      name: 'Google AI Studio',
      category: 'qa',
      context: currentLang === 'es' ? 'Prototipado rápido de prompts' : 'Prompt tuning & test workspace',
      icon: <Sparkles className="w-3.5 h-3.5 text-amber-400" />,
    },
    {
      id: 'react',
      name: 'React',
      category: 'qa',
      context: currentLang === 'es' ? 'jerdany.com & SPA modular' : 'jerdany.com & modular SPA',
      icon: <Code2 className="w-3.5 h-3.5 text-cyan-400" />,
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      category: 'qa',
      context: currentLang === 'es' ? 'Backend & scripts de automatización' : 'Backend & automation scripts',
      icon: <Cpu className="w-3.5 h-3.5 text-emerald-500" />,
    },
    {
      id: 'vite',
      name: 'Vite',
      category: 'qa',
      context: currentLang === 'es' ? '-40% tiempo de carga percibido' : '40% faster perceived page load',
      icon: <Cpu className="w-3.5 h-3.5 text-purple-500" />,
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      category: 'qa',
      context: currentLang === 'es' ? 'ES6+, DOM & APIs asíncronas' : 'ES6+, DOM & async APIs',
      icon: <FileCode className="w-3.5 h-3.5 text-amber-400" />,
    },
    {
      id: 'html-css',
      name: 'HTML5 & CSS3',
      category: 'qa',
      context: currentLang === 'es' ? 'Semántica, Responsive & SEO' : 'Semantic HTML, Responsive & SEO',
      icon: <FileCode className="w-3.5 h-3.5 text-orange-500" />,
    },
    {
      id: 'git',
      name: 'Git & GitHub',
      category: 'qa',
      context: currentLang === 'es' ? 'Control de versiones distribuido' : 'Distributed version control',
      icon: <GitBranch className="w-3.5 h-3.5 text-zinc-400" />,
    },
    {
      id: 'ui-ux-checkout',
      name: 'UI/UX Checkout',
      category: 'qa',
      context: currentLang === 'es' ? 'Cero fricción transaccional' : 'Zero transactional checkout friction',
      icon: <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />,
    },
    {
      id: 'photoshop',
      name: 'Adobe Photoshop',
      category: 'qa',
      context: currentLang === 'es' ? 'Material promocional & piezas' : 'Promotional media & product creatives',
      icon: <Palette className="w-3.5 h-3.5 text-blue-400" />,
    },
    {
      id: 'vegas-pro',
      name: 'Vegas Pro',
      category: 'qa',
      context: currentLang === 'es' ? 'Montaje y edición audiovisual' : 'Audiovisual editing & media assembly',
      icon: <Video className="w-3.5 h-3.5 text-rose-400" />,
    },

    // [Cloud & Tools]
    {
      id: 'azure',
      name: 'Microsoft Azure (AZ-900 Prep)',
      category: 'cloud',
      context: currentLang === 'es' ? 'Cloud fundamentals & computación' : 'Cloud fundamentals & compute models',
      icon: <Cloud className="w-3.5 h-3.5 text-blue-500" />,
    },
    {
      id: 'ibm-cloud',
      name: 'IBM Cloud Fundamentals',
      category: 'cloud',
      context: currentLang === 'es' ? 'Infraestructura global (2026)' : 'Global cloud infrastructure (2026)',
      icon: <Cloud className="w-3.5 h-3.5 text-sky-400" />,
    },
    {
      id: 'data-analytics',
      name: 'Análisis de Datos',
      category: 'cloud',
      context: currentLang === 'es' ? 'Certificación Microsoft & LinkedIn' : 'Microsoft & LinkedIn credential',
      icon: <Database className="w-3.5 h-3.5 text-emerald-500" />,
    },
    {
      id: 'cybersecurity',
      name: 'Ciberseguridad en Teletrabajo',
      category: 'cloud',
      context: currentLang === 'es' ? 'Google Activate (2023)' : 'Google Activate certified (2023)',
      icon: <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />,
    },
    {
      id: 'digital-biz',
      name: 'Competencias Digitales',
      category: 'cloud',
      context: currentLang === 'es' ? 'Google Activate (2023)' : 'Google Activate certified (2023)',
      icon: <Globe className="w-3.5 h-3.5 text-amber-400" />,
    },
  ];

  const categories = [
    {
      id: 'all',
      label: t.skills.filterAll,
      icon: <Layers className="w-3.5 h-3.5" />,
      count: tools.length,
    },
    {
      id: 'ecommerce',
      label: t.skills.filterEcommerce,
      icon: <ShoppingCart className="w-3.5 h-3.5" />,
      count: tools.filter((t) => t.category === 'ecommerce').length,
    },
    {
      id: 'qa',
      label: t.skills.filterQA,
      icon: <Terminal className="w-3.5 h-3.5" />,
      count: tools.filter((t) => t.category === 'qa').length,
    },
    {
      id: 'cloud',
      label: t.skills.filterCloud,
      icon: <Cloud className="w-3.5 h-3.5" />,
      count: tools.filter((t) => t.category === 'cloud').length,
    },
  ] as const;

  const filteredTools =
    activeTab === 'all' ? tools : tools.filter((tool) => tool.category === activeTab);

  return (
    <section id="skills" className="py-16 md:py-20 border-b border-zinc-200 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-wider uppercase text-emerald-600 dark:text-emerald-400">
              Stack & Tools
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
              {t.skills.title}
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {t.skills.subtitle}
            </p>
          </div>

          {/* Minimalist Tabs Control */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg border bg-zinc-100/80 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 self-start md:self-auto">
            {categories.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-xs'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                  }`}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                  <span
                    className={`ml-1 text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                      isActive
                        ? 'bg-zinc-100 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200'
                        : 'text-zinc-400 dark:text-zinc-500'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Clean, Non-Saturating Badges / Pills Cloud */}
        <div className="flex flex-wrap gap-2.5 sm:gap-3">
          {filteredTools.map((tool) => (
            <div
              key={tool.id}
              className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border text-xs sm:text-sm font-medium transition-all duration-200 bg-zinc-100/80 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700/50 text-zinc-800 dark:text-zinc-200 hover:border-emerald-500/60 dark:hover:border-emerald-400/60 hover:bg-emerald-50/60 dark:hover:bg-emerald-950/30 hover:text-emerald-800 dark:hover:text-emerald-300 shadow-2xs"
            >
              <span className="shrink-0 group-hover:scale-110 transition-transform duration-200">
                {tool.icon}
              </span>
              <span className="font-semibold tracking-tight whitespace-nowrap">
                {tool.name}
              </span>
              <span className="hidden sm:inline text-zinc-300 dark:text-zinc-600 select-none">
                ·
              </span>
              <span className="hidden sm:inline text-[11px] font-mono text-zinc-500 dark:text-zinc-400 group-hover:text-emerald-700/90 dark:group-hover:text-emerald-300/80 transition-colors">
                {tool.context}
              </span>
            </div>
          ))}
        </div>

        {/* Quiet Footnote */}
        <div className="mt-8 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-400">
          <span>
            {currentLang === 'es'
              ? '✓ 100% Verificado en producción y antecedentes comprobables.'
              : '✓ 100% Verified in production and verifiable track record.'}
          </span>
          <span className="text-emerald-600 dark:text-emerald-400">
            {filteredTools.length}{' '}
            {currentLang === 'es' ? 'herramientas activas' : 'active tools'}
          </span>
        </div>

      </div>
    </section>
  );
};
