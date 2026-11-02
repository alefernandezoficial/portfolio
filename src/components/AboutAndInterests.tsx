import React, { useState } from 'react';
import { Language } from '../data/locales.ts';
import {
  TOURNAMENT_LIST,
  COMPETITIVE_LINKS,
  HARDWARE_SPECS,
  VRBANLIFE_INFO,
  TournamentAchievement,
} from '../data/aboutData.ts';
import {
  Gamepad2,
  Cpu,
  Mic,
  Trophy,
  ExternalLink,
  Layers,
  Sparkles,
  Monitor,
  Headphones,
  Tv,
  CheckCircle2,
  Video,
  Sliders,
  Disc3,
  Calendar,
  Network,
  Instagram,
  Youtube,
  Radio,
} from 'lucide-react';

interface AboutAndInterestsProps {
  currentLang: Language;
}

export const AboutAndInterests: React.FC<AboutAndInterestsProps> = ({ currentLang }) => {
  const [activeTab, setActiveTab] = useState<'esports' | 'hardware' | 'creative'>('esports');
  const [eraFilter, setEraFilter] = useState<'all' | 'cs2' | 'csgo' | 'cs16'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const isEs = currentLang === 'es';

  // Filter tournaments by era & optional search query
  const filteredTournaments = TOURNAMENT_LIST.filter((t) => {
    if (eraFilter !== 'all' && t.game !== eraFilter) return false;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      return (
        t.tournament.toLowerCase().includes(q) ||
        t.year.includes(q) ||
        t.placement.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const cs2Count = TOURNAMENT_LIST.filter((t) => t.game === 'cs2').length;
  const csgoCount = TOURNAMENT_LIST.filter((t) => t.game === 'csgo').length;
  const cs16Count = TOURNAMENT_LIST.filter((t) => t.game === 'cs16').length;

  return (
    <section
      id="about-interests"
      className="py-16 md:py-24 border-b border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-mono mb-3">
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>{isEs ? 'Sobre Mí & Intereses' : 'About & Personal Interests'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
            {isEs ? 'Beyond Code & Creative DNA' : 'Beyond Code & Creative DNA'}
          </h2>

          <p className="mt-1 text-sm sm:text-base font-semibold text-emerald-600 dark:text-emerald-400">
            {isEs
              ? 'Competidor de e-Sports, Productor de Audio & Entusiasta del Hardware'
              : 'E-Sports Competitor, Audio Producer & Hardware Enthusiast'}
          </p>

          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {isEs
              ? 'Mi enfoque analítico y disciplinado en el software se nutre de más de 20 años en la escena competitiva de e-sports y la producción multimedia, donde la precisión, la ejecución rápida bajo presión y el trabajo en equipo lo son todo.'
              : 'My analytical and disciplined approach to software is forged through 20+ years in the competitive e-sports scene and multimedia production, where precision, rapid execution under pressure, and teamwork define success.'}
          </p>
        </div>

        {/* Interactive Primary Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl border bg-zinc-100/90 dark:bg-zinc-900/90 border-zinc-200 dark:border-zinc-800 mb-8 max-w-2xl">
          <button
            onClick={() => setActiveTab('esports')}
            className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === 'esports'
                ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-xs'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
            }`}
          >
            <Trophy className="w-4 h-4 text-amber-500" />
            <span>e-Sports & CS Legacy</span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300">
              {TOURNAMENT_LIST.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('hardware')}
            className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === 'hardware'
                ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-xs'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
            }`}
          >
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>Setup & Hardware</span>
          </button>

          <button
            onClick={() => setActiveTab('creative')}
            className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === 'creative'
                ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-xs'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
            }`}
          >
            <Mic className="w-4 h-4 text-purple-400" />
            <span>VrbanLifeRecords</span>
          </button>
        </div>

        {/* TAB CONTENT 1: e-Sports & Competitive Gaming */}
        {activeTab === 'esports' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Top Philosophy & Narrative Card */}
            <div className="p-6 rounded-2xl border bg-white dark:bg-zinc-900/80 border-zinc-200 dark:border-zinc-800 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500 shrink-0 mt-1">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                    {isEs
                      ? 'Disciplina Competitiva & Pensamiento Estratégico'
                      : 'Competitive Discipline & Strategic Mindset'}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-4xl">
                    {isEs
                      ? 'La disciplina competitiva en e-sports (desde CS 1.5/1.6 hasta CS2) ha forjado mi capacidad de trabajo en equipo, enfoque bajo presión extrema y toma de decisiones analíticas basada en métricas operativas y lectura táctica en tiempo real.'
                      : 'Competitive discipline across e-sports (spanning CS 1.5/1.6 through CS2) has forged my teamwork under pressure, mental endurance, and metrics-driven analytical decision-making.'}
                  </p>
                </div>
              </div>

              {/* Verified Profiles & Platforms Strip */}
              <div className="mt-6 pt-5 border-t border-zinc-100 dark:border-zinc-800/80">
                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 block mb-3 font-semibold">
                  {isEs ? 'Perfiles de Competición & Redes:' : 'Competitive Profiles & Social Links:'}
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {COMPETITIVE_LINKS.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all bg-zinc-50 dark:bg-zinc-800/40 border-zinc-200 dark:border-zinc-700/60 text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/50 shadow-2xs"
                    >
                      <span>{link.label}</span>
                      <ExternalLink className="w-3 h-3 text-zinc-400" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Tournaments Explorer with Era Filter */}
            <div className="rounded-2xl border bg-white dark:bg-zinc-900/80 border-zinc-200 dark:border-zinc-800 shadow-xs overflow-hidden">
              <div className="p-5 sm:px-6 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                
                {/* Era Filter Badges */}
                <div className="flex flex-wrap items-center gap-1.5 text-xs font-medium">
                  <button
                    onClick={() => setEraFilter('all')}
                    className={`px-3 py-1.5 rounded-md transition-colors ${
                      eraFilter === 'all'
                        ? 'bg-zinc-900 text-white dark:bg-emerald-500 dark:text-zinc-950 font-bold'
                        : 'bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-700'
                    }`}
                  >
                    {isEs ? 'Todos' : 'All'} ({TOURNAMENT_LIST.length})
                  </button>

                  <button
                    onClick={() => setEraFilter('cs2')}
                    className={`px-3 py-1.5 rounded-md transition-colors ${
                      eraFilter === 'cs2'
                        ? 'bg-zinc-900 text-white dark:bg-emerald-500 dark:text-zinc-950 font-bold'
                        : 'bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-700'
                    }`}
                  >
                    Counter-Strike 2 ({cs2Count})
                  </button>

                  <button
                    onClick={() => setEraFilter('csgo')}
                    className={`px-3 py-1.5 rounded-md transition-colors ${
                      eraFilter === 'csgo'
                        ? 'bg-zinc-900 text-white dark:bg-emerald-500 dark:text-zinc-950 font-bold'
                        : 'bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-700'
                    }`}
                  >
                    CS:GO ({csgoCount})
                  </button>

                  <button
                    onClick={() => setEraFilter('cs16')}
                    className={`px-3 py-1.5 rounded-md transition-colors ${
                      eraFilter === 'cs16'
                        ? 'bg-zinc-900 text-white dark:bg-emerald-500 dark:text-zinc-950 font-bold'
                        : 'bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-700'
                    }`}
                  >
                    CS 1.6 & 1.5 ({cs16Count})
                  </button>
                </div>

                {/* Quick Search */}
                <input
                  type="text"
                  placeholder={isEs ? 'Filtrar torneo, año o puesto...' : 'Filter tournament, year or placement...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="px-3 py-1.5 text-xs rounded-lg border bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-hidden focus:ring-1 focus:ring-emerald-500 w-full sm:w-64"
                />
              </div>

              {/* Tournament Rows (Divided minimalist items) */}
              <div className="divide-y divide-zinc-200/70 dark:divide-zinc-800/70 max-h-[500px] overflow-y-auto">
                {filteredTournaments.length === 0 ? (
                  <div className="p-8 text-center text-xs text-zinc-500 font-mono">
                    {isEs ? 'No se encontraron resultados con ese filtro.' : 'No tournament results match this filter.'}
                  </div>
                ) : (
                  filteredTournaments.map((t, idx) => {
                    const isFirst = t.placement.toLowerCase() === '1st';
                    const isSecond = t.placement.toLowerCase() === '2nd';
                    const isThird = t.placement.toLowerCase() === '3rd';
                    const isLan = t.mode === 'LAN';

                    return (
                      <div
                        key={t.id}
                        className="flex items-center justify-between gap-3 p-3 sm:px-6 hover:bg-zinc-50/80 dark:hover:bg-zinc-800/40 transition-colors text-xs"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          {/* Placement Badge */}
                          <span
                            className={`w-14 sm:w-16 px-1.5 py-0.5 rounded text-center font-mono font-bold text-[11px] shrink-0 ${
                              isFirst
                                ? 'bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30'
                                : isSecond
                                ? 'bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200'
                                : isThird
                                ? 'bg-orange-500/15 text-orange-600 dark:text-orange-400'
                                : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
                            }`}
                          >
                            {t.placement}
                          </span>

                          <div className="truncate">
                            <span className="font-semibold text-zinc-900 dark:text-zinc-100 truncate block">
                              {t.tournament}
                            </span>
                            <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono sm:hidden">
                              {t.year} · {t.mode}
                            </span>
                          </div>
                        </div>

                        {/* Mode & Year */}
                        <div className="flex items-center gap-2 shrink-0 font-mono text-[11px]">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider ${
                              isLan
                                ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30'
                                : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400'
                            }`}
                          >
                            {t.mode}
                          </span>
                          <span className="text-zinc-500 dark:text-zinc-400 w-10 text-right">
                            {t.year}
                          </span>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Tournament Footer Stats */}
              <div className="p-3 sm:px-6 bg-zinc-50 dark:bg-zinc-950/40 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>
                  {isEs ? 'Total registrado:' : 'Registered total:'} {filteredTournaments.length}{' '}
                  {isEs ? 'torneos' : 'tournaments'}
                </span>
                <span className="text-emerald-600 dark:text-emerald-400">
                  {isEs ? '17x Campeonatos (1st Place)' : '17x Championships (1st Place)'}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* TAB CONTENT 2: Setup & Hardware */}
        {activeTab === 'hardware' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="p-6 sm:p-8 rounded-2xl border bg-white dark:bg-zinc-900/80 border-zinc-200 dark:border-zinc-800 shadow-xs">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-100 dark:border-zinc-800/80">
                <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-500 shrink-0">
                  <Monitor className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100">
                    {isEs ? 'Rig / Hardware & Setup Técnico' : 'Technical Rig & Battle Station Setup'}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                    {isEs
                      ? 'Equipamiento de alto rendimiento para desarrollo ágil, pruebas locales y gaming competitivo'
                      : 'High-performance hardware for software dev, low-latency testing, and competitive play'}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {HARDWARE_SPECS.map((spec, idx) => {
                  const icons = [
                    <Cpu key="cpu" className="w-4 h-4 text-emerald-500" />,
                    <Tv key="cooler" className="w-4 h-4 text-cyan-400" />,
                    <Monitor key="gpu" className="w-4 h-4 text-blue-400" />,
                    <Layers key="ram" className="w-4 h-4 text-purple-400" />,
                    <Radio key="sound" className="w-4 h-4 text-amber-500" />,
                    <Headphones key="periph" className="w-4 h-4 text-rose-400" />,
                    <Monitor key="screens" className="w-4 h-4 text-emerald-400" />,
                  ];

                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border bg-zinc-50/60 dark:bg-zinc-950/40 border-zinc-200/80 dark:border-zinc-800/80 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                            {icons[idx]}
                            <span>{spec.category}</span>
                          </span>
                          <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
                            Verified
                          </span>
                        </div>

                        <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                          {spec.name}
                        </h4>

                        <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                          {spec.detail}
                        </p>
                      </div>

                      <div className="mt-3 pt-2 border-t border-zinc-200/50 dark:border-zinc-800/60 flex items-center justify-between text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
                        <span>Production & Dev Ready</span>
                        <span className="text-emerald-600 dark:text-emerald-400">✓ In Use</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* TAB CONTENT 3: Creative Background (VrbanLifeRecords) */}
        {activeTab === 'creative' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="p-6 sm:p-8 rounded-2xl border bg-white dark:bg-zinc-900/80 border-zinc-200 dark:border-zinc-800 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-100 dark:border-zinc-800/80">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-500 shrink-0">
                    <Mic className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100">
                      {VRBANLIFE_INFO.name}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                      {isEs ? 'Proyecto Independiente · Estudio Audiovisual & Musical' : 'Independent Project · Audiovisual & Music Studio'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto">
                  {VRBANLIFE_INFO.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold bg-zinc-50 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border-zinc-200 dark:border-zinc-700 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/50 transition-colors"
                    >
                      {link.label.includes('Instagram') ? (
                        <Instagram className="w-3.5 h-3.5 text-pink-500" />
                      ) : (
                        <Youtube className="w-3.5 h-3.5 text-red-500" />
                      )}
                      <span>{link.label}</span>
                      <ExternalLink className="w-3 h-3 text-zinc-400" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Narrative description */}
              <p className="mt-6 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-4xl font-normal">
                {isEs ? VRBANLIFE_INFO.descEs : VRBANLIFE_INFO.descEn}
              </p>

              {/* 3 Multimedia Pillars */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl border bg-zinc-50/60 dark:bg-zinc-950/40 border-zinc-200/80 dark:border-zinc-800/80">
                  <div className="flex items-center gap-2 mb-2">
                    <Mic className="w-4 h-4 text-emerald-500" />
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                      {isEs ? 'Grabación de Artistas' : 'Artist Recording'}
                    </h4>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {isEs
                      ? 'Microfonía profesional, calibración de señal acústica y preamplificación sin distorsión.'
                      : 'Professional studio miking, acoustic isolation, and transparent clean preamplification.'}
                  </p>
                </div>

                <div className="p-4 rounded-xl border bg-zinc-50/60 dark:bg-zinc-950/40 border-zinc-200/80 dark:border-zinc-800/80">
                  <div className="flex items-center gap-2 mb-2">
                    <Sliders className="w-4 h-4 text-purple-400" />
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                      {isEs ? 'Producción de Pistas' : 'Instrumental Production'}
                    </h4>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {isEs
                      ? 'Composición, mezcla instrumental, balance armónico y masterización para plataformas digitales.'
                      : 'Beat composing, instrumental mixing, harmonic balance, and digital streaming mastering.'}
                  </p>
                </div>

                <div className="p-4 rounded-xl border bg-zinc-50/60 dark:bg-zinc-950/40 border-zinc-200/80 dark:border-zinc-800/80">
                  <div className="flex items-center gap-2 mb-2">
                    <Video className="w-4 h-4 text-blue-400" />
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                      {isEs ? 'Videoclips & Multimedia' : 'Video Directing & Media'}
                    </h4>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {isEs
                      ? 'Edición integral de videoclips musicales y piezas gráficas promocionales (Vegas Pro & Photoshop).'
                      : 'End-to-end music video assembly, color grading, and cover art design (Vegas Pro & Photoshop).'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
