export interface TournamentAchievement {
  id: string;
  game: 'cs2' | 'csgo' | 'cs16';
  tournament: string;
  year: string;
  mode: 'Online' | 'LAN';
  placement: string;
  tier?: '1st' | '2nd' | '3rd' | 'top';
}

export interface SocialCompetitiveLink {
  label: string;
  url: string;
  category: 'comp' | 'stream' | 'social';
}

export const TOURNAMENT_LIST: TournamentAchievement[] = [
  // Counter-Strike 2
  { id: 'cs2-1', game: 'cs2', tournament: 'CCT Season 3 South America Series 3', year: '2025', mode: 'Online', placement: '16th', tier: 'top' },
  { id: 'cs2-2', game: 'cs2', tournament: 'ReDragon Battle Series S1', year: '2025', mode: 'Online', placement: '2nd', tier: '2nd' },
  { id: 'cs2-3', game: 'cs2', tournament: 'Copa Profesional Sudamericana', year: '2024', mode: 'Online', placement: '1st', tier: '1st' },
  { id: 'cs2-4', game: 'cs2', tournament: 'ACE South American Masters Spring 2024 - Open Qualifier 2', year: '2024', mode: 'Online', placement: 'Groups', tier: 'top' },
  { id: 'cs2-5', game: 'cs2', tournament: 'ACE South American Masters Spring 2024 - Open Qualifier 1', year: '2024', mode: 'Online', placement: 'Groups', tier: 'top' },
  { id: 'cs2-6', game: 'cs2', tournament: 'ACE South American Masters Fall 2024 Open Qualifier 2', year: '2024', mode: 'Online', placement: 'Groups', tier: 'top' },
  { id: 'cs2-7', game: 'cs2', tournament: 'ACE South American Masters Fall 2024 Open Qualifier 1', year: '2024', mode: 'Online', placement: 'Groups', tier: 'top' },
  { id: 'cs2-8', game: 'cs2', tournament: 'PGL Major SA Open Qualifier #2', year: '2024', mode: 'Online', placement: '129th', tier: 'top' },

  // Counter-Strike Global Offensive
  { id: 'csgo-1', game: 'csgo', tournament: 'Copa BA Gaming', year: '2022', mode: 'Online', placement: 'Groups', tier: 'top' },
  { id: 'csgo-2', game: 'csgo', tournament: 'Liga Open GamersClub', year: '2019', mode: 'Online', placement: '2nd', tier: '2nd' },
  { id: 'csgo-3', game: 'csgo', tournament: 'Liga ESM Temporada #1', year: '2019', mode: 'Online', placement: 'Groups', tier: 'top' },
  { id: 'csgo-4', game: 'csgo', tournament: 'Torneo CSGO LAN PuntoNet', year: '2014', mode: 'LAN', placement: '1st', tier: '1st' },
  { id: 'csgo-5', game: 'csgo', tournament: 'Liga CS:GO Argentina', year: '2014', mode: 'Online', placement: '3rd', tier: '3rd' },
  { id: 'csgo-6', game: 'csgo', tournament: 'Torneo Tecnofields Nitro', year: '2014', mode: 'Online', placement: '8th', tier: 'top' },
  { id: 'csgo-7', game: 'csgo', tournament: 'Torneo XGamePro By EVGA', year: '2014', mode: 'Online', placement: 'Groups', tier: 'top' },

  // Historical & CS 1.6 / 1.5 Legacy
  { id: 'cs16-1', game: 'cs16', tournament: 'SouthAmerica PRO League Invite', year: '2020', mode: 'Online', placement: '4th', tier: 'top' },
  { id: 'cs16-2', game: 'cs16', tournament: 'Challenge The Stars ForAll Fecha#2', year: '2014', mode: 'LAN', placement: '2nd', tier: '2nd' },
  { id: 'cs16-3', game: 'cs16', tournament: 'Challenge The Stars ForAll Fecha#1', year: '2014', mode: 'LAN', placement: '5th', tier: 'top' },
  { id: 'cs16-4', game: 'cs16', tournament: 'Comunidad SickGamers', year: '2014', mode: 'Online', placement: '1st', tier: '1st' },
  { id: 'cs16-5', game: 'cs16', tournament: 'Caseros Cup #4', year: '2013', mode: 'LAN', placement: '4th', tier: 'top' },
  { id: 'cs16-6', game: 'cs16', tournament: 'Challenge The Stars PuntoNet', year: '2012', mode: 'LAN', placement: '8th', tier: 'top' },
  { id: 'cs16-7', game: 'cs16', tournament: 'Qualy Challenge The Stars PuntoNet', year: '2012', mode: 'LAN', placement: '1st', tier: '1st' },
  { id: 'cs16-8', game: 'cs16', tournament: 'ComandoGP Final Audition', year: '2012', mode: 'LAN', placement: '8th', tier: 'top' },
  { id: 'cs16-9', game: 'cs16', tournament: 'FragPoint', year: '2012', mode: 'Online', placement: '1st', tier: '1st' },
  { id: 'cs16-10', game: 'cs16', tournament: 'Dattatec Championship', year: '2011', mode: 'LAN', placement: '15th', tier: 'top' },
  { id: 'cs16-11', game: 'cs16', tournament: 'Qualy Tecnofields', year: '2011', mode: 'Online', placement: '11th', tier: 'top' },
  { id: 'cs16-12', game: 'cs16', tournament: 'Extreme Experiencie', year: '2010', mode: 'Online', placement: '8th', tier: 'top' },
  { id: 'cs16-13', game: 'cs16', tournament: 'Eventos Steam', year: '2010', mode: 'Online', placement: '1st', tier: '1st' },
  { id: 'cs16-14', game: 'cs16', tournament: 'Extreme League I', year: '2010', mode: 'Online', placement: '1st', tier: '1st' },
  { id: 'cs16-15', game: 'cs16', tournament: 'Extreme League II', year: '2010', mode: 'Online', placement: '1st', tier: '1st' },
  { id: 'cs16-16', game: 'cs16', tournament: 'Gamingstars', year: '2010', mode: 'Online', placement: '1st', tier: '1st' },
  { id: 'cs16-17', game: 'cs16', tournament: 'Qualy KODE5', year: '2009', mode: 'Online', placement: '12th', tier: 'top' },
  { id: 'cs16-18', game: 'cs16', tournament: 'zGamerz Online', year: '2009', mode: 'Online', placement: '4th', tier: 'top' },
  { id: 'cs16-19', game: 'cs16', tournament: 'Torneo Us #1', year: '2009', mode: 'Online', placement: '4th', tier: 'top' },
  { id: 'cs16-20', game: 'cs16', tournament: 'Punto Net Summer Cup', year: '2008', mode: 'LAN', placement: '16th', tier: 'top' },
  { id: 'cs16-21', game: 'cs16', tournament: 'ComandoGP ThreeCups Last Edition', year: '2008', mode: 'LAN', placement: '12th', tier: 'top' },
  { id: 'cs16-22', game: 'cs16', tournament: 'Qualy WCG', year: '2008', mode: 'Online', placement: '8th', tier: 'top' },
  { id: 'cs16-23', game: 'cs16', tournament: 'CyberOP Living on CS', year: '2008', mode: 'LAN', placement: '1st', tier: '1st' },
  { id: 'cs16-24', game: 'cs16', tournament: 'ComandoGP Summer Championship', year: '2007', mode: 'LAN', placement: '8th', tier: 'top' },
  { id: 'cs16-25', game: 'cs16', tournament: 'Cyber Andromeda League', year: '2006', mode: 'LAN', placement: '1st', tier: '1st' },
  { id: 'cs16-26', game: 'cs16', tournament: 'Qualy WCG', year: '2005', mode: 'Online', placement: '16th', tier: 'top' },
  { id: 'cs16-27', game: 'cs16', tournament: 'Cyber Andromeda', year: '2005', mode: 'LAN', placement: '1st', tier: '1st' },
  { id: 'cs16-28', game: 'cs16', tournament: 'Area51 Rosario Counter Cup', year: '2004', mode: 'LAN', placement: '8th', tier: 'top' },
  { id: 'cs16-29', game: 'cs16', tournament: 'Hardex Cup End Place', year: '2003', mode: 'LAN', placement: '1st', tier: '1st' },
  { id: 'cs16-30', game: 'cs16', tournament: 'Hardex Summer Cup', year: '2002', mode: 'LAN', placement: '1st', tier: '1st' },
  { id: 'cs16-31', game: 'cs16', tournament: 'Hardex Started', year: '2001', mode: 'LAN', placement: '1st', tier: '1st' },
  { id: 'cs16-32', game: 'cs16', tournament: 'Area51 Invierno 201X', year: '201X', mode: 'LAN', placement: '8th', tier: 'top' }
];

export const COMPETITIVE_LINKS: SocialCompetitiveLink[] = [
  { label: 'HLTV Profile', url: 'https://www.hltv.org/profile/462055/jsk1337', category: 'comp' },
  { label: 'Liquipedia', url: 'https://liquipedia.net/counterstrike/User:Jsk1337', category: 'comp' },
  { label: 'GamersClub', url: 'https://gamersclub.com.br/jogador/34165', category: 'comp' },
  { label: 'Faceit', url: 'https://www.faceit.com/es/players/jsk_cs', category: 'comp' },
  { label: 'ChallengerMode', url: 'https://www.challengermode.com/users/eab6cb63-803c-40d7-a328-70ce07e8f147', category: 'comp' },
  { label: 'Twitch', url: 'https://www.twitch.tv/SoloHabilidad', category: 'stream' },
  { label: 'Kick', url: 'https://www.kick.com/SoloHabilidad', category: 'stream' },
  { label: 'YouTube', url: 'https://www.youtube.com/c/jsk1337', category: 'stream' },
  { label: 'Instagram', url: 'https://www.instagram.com/ale.jsk', category: 'social' },
  { label: 'X (Twitter)', url: 'https://www.x.com/jsk_ale', category: 'social' },
  { label: 'Facebook', url: 'https://www.facebook.com/jsk.mbo', category: 'social' }
];

export const HARDWARE_SPECS = [
  {
    category: 'CPU',
    name: 'AMD Ryzen 7 5700X3D 4.1GHz Turbo AM4',
    detail: '8 Cores / 16 Threads, 3D V-Cache para máximo rendimiento en 1% lows'
  },
  {
    category: 'Cooler',
    name: 'ID-Cooling FROZN A620 PRO SE',
    detail: 'Dual tower air cooling de alto rendimiento'
  },
  {
    category: 'GPU',
    name: 'EVGA GeForce RTX 3060 Ti 8GB',
    detail: 'Arquitectura Ampere, excelente estabilidad térmica'
  },
  {
    category: 'RAM',
    name: 'T-Force Delta RGB DDR4 32GB (2x16GB) 3200MHz',
    detail: 'Dual channel optimizado para multitarea pesada y suites web'
  },
  {
    category: 'Placa de Sonido',
    name: 'BEHRINGER U-PHORIA UM2',
    detail: 'Interfaz USB 2x2 para microfonía profesional y monitoreo directo sin latencia'
  },
  {
    category: 'Periféricos',
    name: 'Logitech G PRO X Superlight White + ASUS ROG Strix M602 Falchion Ace RGB White',
    detail: 'Mouse ultraligero inalámbrico + Teclado mecánico 65% gamer/dev'
  },
  {
    category: 'Monitores',
    name: 'ASUS 144Hz + LG 32" 75Hz',
    detail: 'Setup dual: Display principal de alta tasa de refresco + Secundario amplio'
  }
];

export const VRBANLIFE_INFO = {
  name: 'VrbanLifeRecords',
  descEs: 'Fundador del proyecto independiente VrbanLifeRecords, enfocado en la grabación de artistas, producción de pistas instrumentales y edición integral de videoclips musicales con equipamiento profesional de audio y video. Esta faceta refuerza su versatilidad multimedia, oído analítico y manejo avanzado de herramientas audiovisuales como Adobe Photoshop y Vegas Pro.',
  descEn: 'Founder of the independent project VrbanLifeRecords, focused on artist tracking, instrumental beat production, and end-to-end music video directing using professional studio audio and video gear. This experience solidifies multimedia versatility, critical listening, and mastery of creative editing software including Adobe Photoshop and Vegas Pro.',
  links: [
    { label: 'Instagram Oficial', url: 'https://www.instagram.com/vrbanliferecords/' },
    { label: 'Canal de YouTube', url: 'https://www.youtube.com/@VRBANLIFECREW' }
  ]
};
