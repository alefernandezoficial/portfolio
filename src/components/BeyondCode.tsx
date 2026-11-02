import React, { useState } from 'react';
import { locales, Language } from '../data/locales.ts';
import {
  Trophy,
  Mic,
  Monitor,
  Headphones,
  Cpu,
  Tv,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Gamepad2,
  Sliders,
  Disc3,
  Video,
  Layers,
  Sparkles,
} from 'lucide-react';

interface BeyondCodeProps {
  currentLang: Language;
}

export const BeyondCode: React.FC<BeyondCodeProps> = ({ currentLang }) => {
  const [hardwareExpanded, setHardwareExpanded] = useState<boolean>(true);
  const [selectedEra, setSelectedEra] = useState<'all' | 'cs2' | 'legacy'>('all');
  const t = locales[currentLang];
  const data = t.beyondCode;

  const competitivePlatforms = [
    { name: 'GamersClub', url: 'https://gamersclub.com.br/' },
    { name: 'Faceit', url: 'https://www.faceit.com/' },
    { name: 'ChallengerMode', url: 'https://www.challengermode.com/' },
    { name: 'Twitch', url: 'https://twitch.tv/' },
    { name: 'Kick', url: 'https://kick.com/' },
  ];

  return (
    <section id="beyond-code" className="py-16 md:py-24 border-b border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/40 dark:bg-zinc-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-mono mb-3">
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>Personal DNA & Competitive Mindset</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
            {data.title}
          </h2>
          
          <p className="mt-1 text-sm sm:text-base font-semibold text-emerald-600 dark:text-emerald-400">
            {data.subtitle}
          </p>

          <p className="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
            {data.intro}
          </p>
        </div>

        {/* 3 Main Modular Blocks */}
        <div className="space-y-10">

          {/* BLOCK 1: E-SPORTS COMPETITIVE CAREER (Counter-Strike Legacy) */}
          <div className="p-6 sm:p-8 rounded-2xl border bg-white dark:bg-zinc-900/70 border-zinc-200 dark:border-zinc-800 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-100 dark:border-zinc-800/80">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-500 shrink-0">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                    {data.esportsTitle}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                    {data.esportsSubtitle} · 20+ {currentLang === 'es' ? 'Años en competición' : 'Years competing'}
                  </p>
                </div>
              </div>

              {/* Era Filter Tabs */}
              <div className="flex items-center gap-1 p-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-xs font-medium self-start sm:self-auto">
                <button
                  onClick={() => setSelectedEra('all')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    selectedEra === 'all'
                      ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 shadow-2xs font-semibold'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                  }`}
                >
                  {currentLang === 'es' ? 'Todo' : 'All'}
                </button>
                <button
                  onClick={() => setSelectedEra('cs2')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    selectedEra === 'cs2'
                      ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 shadow-2xs font-semibold'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                  }`}
                >
                  CS2 (2024-2025)
                </button>
                <button
                  onClick={() => setSelectedEra('legacy')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    selectedEra === 'legacy'
                      ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 shadow-2xs font-semibold'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                  }`}
                >
                  CS:GO & 1.6 / 1.5
                </button>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* CS2 Era */}
              {(selectedEra === 'all' || selectedEra === 'cs2') && (
                <div className="p-5 rounded-xl border bg-zinc-50/60 dark:bg-zinc-950/40 border-zinc-200/80 dark:border-zinc-800/80 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{data.cs2Title}</span>
                    </span>
                    <span className="text-zinc-400 dark:text-zinc-500">2024 – 2025</span>
                  </div>

                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/20 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5">
                        1ST
                      </span>
                      <span className="font-medium">
                        1st Copa Profesional Sudamericana (2024)
                      </span>
                    </li>

                    <li className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 shrink-0 mt-0.5">
                        2ND
                      </span>
                      <span className="font-medium">
                        2nd ReDragon Battle Series S1 (2025)
                      </span>
                    </li>

                    <li className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                        MAJOR
                      </span>
                      <span>
                        {currentLang === 'es' ? 'Participante' : 'Participant'} PGL Major SA Open Qualifier
                      </span>
                    </li>
                  </ul>
                </div>
              )}

              {/* Legacy Era */}
              {(selectedEra === 'all' || selectedEra === 'legacy') && (
                <div className="p-5 rounded-xl border bg-zinc-50/60 dark:bg-zinc-950/40 border-zinc-200/80 dark:border-zinc-800/80 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-zinc-500 dark:text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" />
                      <span>{data.csLegacyTitle}</span>
                    </span>
                    <span className="text-zinc-400 dark:text-zinc-500">Historical LAN & Online</span>
                  </div>

                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5">
                        LAN
                      </span>
                      <span className="font-medium">
                        Campeón LAN en Torneo CSGO PuntoNet
                      </span>
                    </li>

                    <li className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/20 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5">
                        1ST
                      </span>
                      <span>1st Cyber Andromeda & 1st Hardex Started</span>
                    </li>

                    <li className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 shrink-0 mt-0.5">
                        QUALY
                      </span>
                      <span>
                        {currentLang === 'es' ? 'Participaciones históricas en Qualies de WCG, KODE5 y Dattatec' : 'Historical participations in WCG, KODE5 & Dattatec Qualifiers'}
                      </span>
                    </li>
                  </ul>
                </div>
              )}

            </div>

            {/* Direct Profiles & Competitive Links */}
            <div className="mt-6 pt-5 border-t border-zinc-100 dark:border-zinc-800/80">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 block mb-3">
                {data.competitiveProfilesTitle}:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {competitivePlatforms.map((plat) => (
                  <a
                    key={plat.name}
                    href={plat.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700/60 bg-zinc-50 dark:bg-zinc-800/40 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
                  >
                    <span>{plat.name}</span>
                    <ExternalLink className="w-3 h-3 text-zinc-400" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* BLOCK 2: CREATIVE & AUDIO PRODUCTION (VRBANLIFE Records) */}
          <div className="p-6 sm:p-8 rounded-2xl border bg-white dark:bg-zinc-900/70 border-zinc-200 dark:border-zinc-800 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-100 dark:border-zinc-800/80">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-500 shrink-0">
                  <Mic className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                    {data.creativeTitle}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">
                    {data.creativeSubtitle}
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-xs font-mono text-zinc-600 dark:text-zinc-300 self-start sm:self-auto">
                <Disc3 className="w-3.5 h-3.5 text-purple-400" />
                <span>Audiovisual & Sound Engineering</span>
              </div>
            </div>

            <p className="mt-6 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              {data.creativeDescription}
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {data.creativePillars.map((pillar, idx) => {
                const icons = [
                  <Mic key="mic" className="w-4 h-4 text-emerald-500" />,
                  <Sliders key="sliders" className="w-4 h-4 text-purple-400" />,
                  <Video key="video" className="w-4 h-4 text-blue-400" />,
                ];
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border bg-zinc-50/60 dark:bg-zinc-950/40 border-zinc-200/80 dark:border-zinc-800/80"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 rounded-md bg-white dark:bg-zinc-800 border border-zinc-200/60 dark:border-zinc-700/60">
                        {icons[idx]}
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* BLOCK 3: BATTLE STATION & HARDWARE SETUP */}
          <div className="p-6 sm:p-8 rounded-2xl border bg-white dark:bg-zinc-900/70 border-zinc-200 dark:border-zinc-800 shadow-xs">
            <div className="flex items-center justify-between gap-4 pb-4 border-b border-zinc-100 dark:border-zinc-800/80">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-500 shrink-0">
                  <Monitor className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                    {data.hardwareTitle}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                    {data.hardwareSubtitle}
                  </p>
                </div>
              </div>

              {/* Accordion Toggle */}
              <button
                onClick={() => setHardwareExpanded(!hardwareExpanded)}
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors shrink-0"
                aria-expanded={hardwareExpanded}
              >
                <span>{hardwareExpanded ? data.hardwareToggleClose : data.hardwareToggleOpen}</span>
                {hardwareExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Accordion Content: Setup Specs */}
            {hardwareExpanded && (
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-in fade-in duration-200">
                {data.hardwareSpecs.map((spec, idx) => {
                  const specIcons = [
                    <Cpu key="cpu" className="w-4 h-4 text-emerald-500" />,
                    <Monitor key="gpu" className="w-4 h-4 text-blue-400" />,
                    <Headphones key="audio" className="w-4 h-4 text-purple-400" />,
                    <Tv key="display" className="w-4 h-4 text-amber-400" />,
                  ];

                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border bg-zinc-50/70 dark:bg-zinc-950/40 border-zinc-200/80 dark:border-zinc-800/80 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="p-1.5 rounded-md bg-white dark:bg-zinc-800 border border-zinc-200/60 dark:border-zinc-700/60">
                            {specIcons[idx]}
                          </div>
                          <span className="text-xs font-mono font-bold text-zinc-500 dark:text-zinc-400">
                            {spec.category}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200 leading-snug">
                          {spec.details}
                        </p>
                      </div>

                      <div className="mt-3 pt-2 border-t border-zinc-200/40 dark:border-zinc-800/60 text-[10px] font-mono text-emerald-600 dark:text-emerald-400">
                        ✓ Benchmark Verified
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
