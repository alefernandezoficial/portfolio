export type Language = 'es' | 'en';

export interface ProjectData {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  period: string;
  url: string;
  displayUrl: string;
  platforms: string[];
  image: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  modality: string;
  location: string;
  period: string;
  platforms: string[];
  bullets: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  year: string;
  category: 'data' | 'programming' | 'cloud' | 'business';
  url: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  title: string;
  location: string;
  period: string;
  description: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: {
    name: string;
    description: string;
    detail?: string;
  }[];
}

export interface LocaleContent {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    brand: string;
    availableBadge: string;
    experience: string;
    methods: string;
    skills: string;
    projects: string;
    certifications: string;
    beyondCode: string;
    contact: string;
    downloadCV: string;
    languageToggle: string;
    themeToggle: string;
  };
  hero: {
    kicker: string;
    headline: string;
    subtitle: string;
    ctaExperience: string;
    ctaProjects: string;
    ctaWhatsApp: string;
    stats: {
      value: string;
      label: string;
      detail: string;
    }[];
  };
  aiWorkflow: {
    title: string;
    subtitle: string;
    description: string;
    pillars: {
      number: string;
      title: string;
      description: string;
      impact: string;
    }[];
  };
  skills: {
    title: string;
    subtitle: string;
    filterAll: string;
    filterEcommerce: string;
    filterQA: string;
    filterCloud: string;
  };
  projects: {
    title: string;
    subtitle: string;
    viewCaseStudy: string;
    visitSite: string;
    modalChallengeTitle: string;
    modalSolutionTitle: string;
    modalResultsTitle: string;
    modalClose: string;
    platformsLabel: string;
  };
  experience: {
    title: string;
    subtitle: string;
    platformsLabel: string;
  };
  certifications: {
    title: string;
    subtitle: string;
    educationTitle: string;
    educationSubtitle: string;
    viewCredential: string;
    pdfButton: string;
    pdfSubtitle: string;
    pdfModalTitle: string;
    pdfPrevPage: string;
    pdfNextPage: string;
    pdfDownload: string;
    pdfOpenTab: string;
    pdfClose: string;
    pdfFallbackNote: string;
  };
  contact: {
    title: string;
    subtitle: string;
    availableFor: string;
    locationLabel: string;
    locationValue: string;
    emailLabel: string;
    phoneLabel: string;
    whatsappButton: string;
    copyEmail: string;
    copied: string;
    previousPortfolio: string;
  };
  resumeModal: {
    title: string;
    printAction: string;
    closeAction: string;
    downloadNotice: string;
  };
  beyondCode: {
    title: string;
    subtitle: string;
    intro: string;
    esportsTitle: string;
    esportsSubtitle: string;
    cs2Title: string;
    csLegacyTitle: string;
    competitiveProfilesTitle: string;
    creativeTitle: string;
    creativeSubtitle: string;
    creativeDescription: string;
    creativePillars: {
      title: string;
      desc: string;
    }[];
    hardwareTitle: string;
    hardwareSubtitle: string;
    hardwareToggleOpen: string;
    hardwareToggleClose: string;
    hardwareSpecs: {
      category: string;
      details: string;
    }[];
  };
  footer: {
    rights: string;
    profileSummary: string;
    top: string;
  };
}

export const locales: Record<Language, LocaleContent> = {
  es: {
    meta: {
      title: "Alejandro Fernández | Tech-Driven E-Commerce & AI Operations Specialist",
      description: "Especialista en E-commerce, Gestión de Datos y Desarrollo Web con sólida experiencia en administración de tiendas online, QA testing manual y automatización con API de Gemini."
    },
    nav: {
      brand: "Alejandro Fernández",
      availableBadge: "Buscando nuevas oportunidades",
      experience: "Experiencia",
      methods: "Métodos & IA",
      skills: "Habilidades",
      projects: "Proyectos",
      certifications: "Certificaciones",
      beyondCode: "Beyond Code",
      contact: "Contacto",
      downloadCV: "CV",
      languageToggle: "EN",
      themeToggle: "Tema"
    },
    hero: {
      kicker: "Rosario, Argentina · E-Commerce, Data & Web Dev",
      headline: "Tech-Driven E-Commerce & AI Operations Specialist",
      subtitle: "Especialista en E-commerce, Gestión de Datos y Desarrollo Web con sólida experiencia en administración de tiendas online (Shopify, Tiendanube, Amazon FBA, eBay), Data Entry masivo, auditoría de inventario y QA testing web manual. Habilidad demostrada en la integración de herramientas de Inteligencia Artificial (API de Gemini, Prompt Engineering, Google AI Studio) para optimización y automatización de procesos operativos.",
      ctaExperience: "Ver Experiencia",
      ctaProjects: "Explorar Proyectos",
      ctaWhatsApp: "Contacto por WhatsApp",
      stats: [
        {
          value: "99.5%",
          label: "Precisión Operativa",
          detail: "En 80-100 órdenes internacionales semanales en All About Gaming"
        },
        {
          value: "+500",
          label: "Referencias Auditadas",
          detail: "Catálogos e inventarios en Amazon FBA, eBay y tienda propia"
        },
        {
          value: "-40%",
          label: "Tiempo de Carga Percibido",
          detail: "Optimización de rendimiento frontend con React y Vite en Jerdany"
        },
        {
          value: "0",
          label: "Fallos Críticos en Lanzamiento",
          detail: "Pruebas funcionales y manuales de QA en checkouts y mensajería"
        }
      ]
    },
    aiWorkflow: {
      title: "Métodos & Automatización con IA",
      subtitle: "Flujo de trabajo técnico: De la ingeniería de instrucciones al impacto operativo real",
      description: "Integración estratégica de la API de Gemini, Prompt Engineering y Google AI Studio para erradicar cuellos de botella manuales en catálogo, desarrollo frontend y control de calidad.",
      pillars: [
        {
          number: "01",
          title: "Automatización de Catálogo E-Commerce",
          description: "Formulación de prompts estructurados y conexión con la API de Gemini para la redacción sistemática y consistente de títulos, descripciones y especificaciones de producto con tono de marca.",
          impact: "Reducción del tiempo de edición y redacción de catálogo a la mitad (50%)."
        },
        {
          number: "02",
          title: "Aceleración de Desarrollo Frontend",
          description: "Uso de Google AI Studio y modelos Gemini para validar lógica React, estructurar componentes modulares y optimizar tiempos de renderizado y tiempos de carga.",
          impact: "Reducción del 40% en tiempo de carga percibido en jerdany.com."
        },
        {
          number: "03",
          title: "Estrategia de QA Testing Web Manual",
          description: "Diseño exhaustivo de matrices de prueba funcional antes de cada lanzamiento: navegación, login, checkouts, medios de pago, medios de envío y flujos de mensajería (WhatsApp, Instagram, Facebook y Email).",
          impact: "Garantía comprobable de cero incidencias críticas en el lanzamiento final."
        }
      ]
    },
    skills: {
      title: "Tech Stack & Herramientas",
      subtitle: "Herramientas y plataformas reales utilizadas en producción y proyectos comprobables",
      filterAll: "Todos",
      filterEcommerce: "E-Commerce & Ops",
      filterQA: "QA, Dev & IA",
      filterCloud: "Cloud & Tools"
    },
    projects: {
      title: "Proyectos & Case Studies",
      subtitle: "Casos de estudio reales con métricas de impacto, desafíos resueltos y tecnologías aplicadas",
      viewCaseStudy: "Ver Case Study",
      visitSite: "Visitar Sitio",
      modalChallengeTitle: "Desafío",
      modalSolutionTitle: "Solución Implementada",
      modalResultsTitle: "Resultados / Impacto",
      modalClose: "Cerrar",
      platformsLabel: "Plataformas & Tecnologías:"
    },
    experience: {
      title: "Experiencia Laboral",
      subtitle: "Trayectoria profesional en operaciones e-commerce, gestión de datos y desarrollo web",
      platformsLabel: "Plataformas & Ecosistema:"
    },
    certifications: {
      title: "Certificaciones Comprobables",
      subtitle: "Formación continua acreditada por Microsoft, LinkedIn Learning, Google Activate, OpenBootcamp e IBM",
      educationTitle: "Educación & Formación Técnica",
      educationSubtitle: "Base académica y desarrollo práctico continuo",
      viewCredential: "Ver Credencial en la Web",
      pdfButton: "Ver Certificados Oficiales y Diplomas (PDF)",
      pdfSubtitle: "17 diplomas acreditados por Microsoft, Google Activate, IBM y OpenBootcamp compilados en documento oficial con visor interactivo.",
      pdfModalTitle: "Certificados Oficiales & Diplomas — Alejandro Fernández",
      pdfPrevPage: "Página Anterior",
      pdfNextPage: "Página Siguiente",
      pdfDownload: "Descargar PDF",
      pdfOpenTab: "Abrir en nueva pestaña",
      pdfClose: "Cerrar Visor",
      pdfFallbackNote: "Archivo oficial disponible para descarga directa."
    },
    contact: {
      title: "Contacto Directo",
      subtitle: "¿Buscás optimizar tus operaciones de e-commerce, catálogos o desarrollo web? Hablemos.",
      availableFor: "Disponible para roles remotos o híbridos en E-Commerce, Data Management y Web Dev.",
      locationLabel: "Ubicación",
      locationValue: "Rosario, Santa Fe, Argentina",
      emailLabel: "Email",
      phoneLabel: "Teléfono / WhatsApp",
      whatsappButton: "Abrir WhatsApp Directo",
      copyEmail: "Copiar Email",
      copied: "¡Copiado!",
      previousPortfolio: "Ver Portafolio Previo en GitHub Pages"
    },
    resumeModal: {
      title: "Currículum Vitae — Alejandro Fernández",
      printAction: "Imprimir / Guardar en PDF",
      closeAction: "Cerrar",
      downloadNotice: "Documento oficial listo para impresión o exportación digital a PDF."
    },
    beyondCode: {
      title: "Beyond Code & Creative DNA",
      subtitle: "E-sports Competitor, Audio Producer & Tech Enthusiast",
      intro: "Mi enfoque analítico y disciplinado en el software se nutre de más de 20 años en la escena competitiva de e-sports y la producción multimedia, donde la precisión, la ejecución rápida bajo presión y el trabajo en equipo lo son todo.",
      esportsTitle: "E-sports Competitive Career",
      esportsSubtitle: "Counter-Strike Legacy & Logros Competitivos",
      cs2Title: "Counter-Strike 2 (Actualidad)",
      csLegacyTitle: "CS:GO & CS 1.6 / 1.5 (Trayectoria Histórica)",
      competitiveProfilesTitle: "Plataformas & Perfiles de Competición",
      creativeTitle: "Creative & Audio Production",
      creativeSubtitle: "VRBANLIFE Records — Proyecto Independiente",
      creativeDescription: "Ingeniería de sonido y producción audiovisual aplicada: grabación de voz, microfonía profesional, mezcla y edición de pistas instrumentales, y realización de videos musicales.",
      creativePillars: [
        {
          title: "Grabación & Microfonía Profesional",
          desc: "Captura de voces acústicas, calibración de señal, aislamiento acústico y preamplificación de precisión."
        },
        {
          title: "Mezcla & Edición Instrumental",
          desc: "Ecualización quirúrgica, compresión multibanda, balance armónico y masterización para streaming digital."
        },
        {
          title: "Producción Audiovisual",
          desc: "Edición y montaje de videos musicales y piezas promocionales con Adobe Photoshop y Vegas Pro."
        }
      ],
      hardwareTitle: "Battle Station & Hardware Setup",
      hardwareSubtitle: "Entorno de desarrollo de alta tasa de refresco y estaciones de trabajo de alto rendimiento",
      hardwareToggleOpen: "Ver Especificaciones Completas",
      hardwareToggleClose: "Ocultar Especificaciones",
      hardwareSpecs: [
        {
          category: "CPU & Refrigeración",
          details: "AMD Ryzen 7 5700X3D + Cooler ID-Cooling FROZN A620"
        },
        {
          category: "GPU & Memoria RAM",
          details: "EVGA RTX 3060 Ti 8GB | 32GB DDR4 T-Force Delta RGB"
        },
        {
          category: "Audio & Periféricos",
          details: "Behringer U-PHORIA UM2, HyperX Cloud Revolver, Logitech G PRO X Superlight, ASUS ROG Strix Falchion"
        },
        {
          category: "Pantallas & Display",
          details: "ASUS 144Hz + LG 32\" 75Hz"
        }
      ]
    },
    footer: {
      rights: "Todos los derechos reservados.",
      profileSummary: "Especialista en E-Commerce, Gestión de Datos, QA Testing Web Manual y Desarrollo Frontend.",
      top: "Volver arriba"
    }
  },
  en: {
    meta: {
      title: "Alejandro Fernández | Tech-Driven E-Commerce & AI Operations Specialist",
      description: "E-Commerce, Data Management and Web Development Specialist with proven experience in online store administration, manual web QA testing, and Gemini API automation."
    },
    nav: {
      brand: "Alejandro Fernández",
      availableBadge: "Available for new roles",
      experience: "Experience",
      methods: "Methods & AI",
      skills: "Skills",
      projects: "Projects",
      certifications: "Certifications",
      beyondCode: "Beyond Code",
      contact: "Contact",
      downloadCV: "CV",
      languageToggle: "ES",
      themeToggle: "Theme"
    },
    hero: {
      kicker: "Rosario, Argentina · E-Commerce, Data & Web Dev",
      headline: "Tech-Driven E-Commerce & AI Operations Specialist",
      subtitle: "E-Commerce, Data Management, and Web Development Specialist with proven experience in online store administration (Shopify, Tiendanube, Amazon FBA, eBay), bulk data entry, inventory audits, and manual web QA testing. Demonstrated ability integrating Artificial Intelligence tools (Gemini API, Prompt Engineering, Google AI Studio) for operational process optimization and automation.",
      ctaExperience: "View Experience",
      ctaProjects: "Explore Projects",
      ctaWhatsApp: "Contact on WhatsApp",
      stats: [
        {
          value: "99.5%",
          label: "Operational Precision",
          detail: "Across 80-100 weekly international orders at All About Gaming"
        },
        {
          value: "+500",
          label: "Audited References",
          detail: "Catalogs and inventory across Amazon FBA, eBay, and own store"
        },
        {
          value: "-40%",
          label: "Perceived Load Time",
          detail: "Frontend performance optimization with React and Vite in Jerdany"
        },
        {
          value: "0",
          label: "Critical Launch Bugs",
          detail: "Rigorous manual QA across checkouts and customer messaging channels"
        }
      ]
    },
    aiWorkflow: {
      title: "Methods & AI Automation",
      subtitle: "Technical workflow: From prompt engineering to tangible operational impact",
      description: "Strategic integration of the Gemini API, Prompt Engineering, and Google AI Studio to eliminate manual bottlenecks across catalog data, frontend delivery, and QA pipelines.",
      pillars: [
        {
          number: "01",
          title: "E-Commerce Catalog Automation",
          description: "Engineering structured prompts connected to the Gemini API for systematic, high-fidelity generation of product titles, descriptions, and attribute tags matching brand guidelines.",
          impact: "Cut catalog copywriting and editing duration by half (50%)."
        },
        {
          number: "02",
          title: "Frontend Engineering Acceleration",
          description: "Leveraging Google AI Studio and Gemini models to prototype and refine modular React components, streamline asset loading, and optimize perceived rendering performance.",
          impact: "40% reduction in user perceived page load time on jerdany.com."
        },
        {
          number: "03",
          title: "Manual Web QA Testing Strategy",
          description: "Exhaustive functional test matrices designed prior to store release: navigation, authentication, checkout funnels, payment gateways, shipping rules, and omni-channel messaging (WhatsApp, IG, FB, Email).",
          impact: "Zero critical bugs observed upon public launch."
        }
      ]
    },
    skills: {
      title: "Tech Stack & Tools",
      subtitle: "Production-tested tools, platforms, and technologies from certified CV experience",
      filterAll: "All",
      filterEcommerce: "E-Commerce & Ops",
      filterQA: "QA, Dev & AI",
      filterCloud: "Cloud & Tools"
    },
    projects: {
      title: "Projects & Case Studies",
      subtitle: "Real case studies with verified metrics, challenges solved, and applied technology stacks",
      viewCaseStudy: "View Case Study",
      visitSite: "Visit Website",
      modalChallengeTitle: "Challenge",
      modalSolutionTitle: "Implemented Solution",
      modalResultsTitle: "Results / Impact",
      modalClose: "Close",
      platformsLabel: "Platforms & Technologies:"
    },
    experience: {
      title: "Work Experience",
      subtitle: "Professional track record across e-commerce operations, data auditing, and web development",
      platformsLabel: "Platforms & Ecosystem:"
    },
    certifications: {
      title: "Verifiable Certifications",
      subtitle: "Continuous credentialed learning from Microsoft, LinkedIn Learning, Google Activate, OpenBootcamp, and IBM",
      educationTitle: "Education & Technical Training",
      educationSubtitle: "Academic background and practical self-directed project development",
      viewCredential: "View Credential on Web",
      pdfButton: "View Official Certificates & Diplomas (PDF)",
      pdfSubtitle: "17 official diplomas certified by Microsoft, Google Activate, IBM, and OpenBootcamp compiled in official document with integrated viewer.",
      pdfModalTitle: "Official Certificates & Diplomas — Alejandro Fernández",
      pdfPrevPage: "Previous Page",
      pdfNextPage: "Next Page",
      pdfDownload: "Download PDF",
      pdfOpenTab: "Open in new tab",
      pdfClose: "Close Viewer",
      pdfFallbackNote: "Official PDF document for direct export."
    },
    contact: {
      title: "Direct Contact",
      subtitle: "Looking to optimize e-commerce operations, data entry pipelines, or web development? Let's talk.",
      availableFor: "Available for remote or hybrid positions in E-Commerce Operations, Data Management, and Web Development.",
      locationLabel: "Location",
      locationValue: "Rosario, Santa Fe, Argentina",
      emailLabel: "Email",
      phoneLabel: "Phone / WhatsApp",
      whatsappButton: "Open WhatsApp Chat",
      copyEmail: "Copy Email",
      copied: "Copied!",
      previousPortfolio: "View Previous Portfolio on GitHub Pages"
    },
    resumeModal: {
      title: "Curriculum Vitae — Alejandro Fernández",
      printAction: "Print / Save to PDF",
      closeAction: "Close",
      downloadNotice: "Official resume formatted for digital PDF export or clean direct printing."
    },
    beyondCode: {
      title: "Beyond Code & Creative DNA",
      subtitle: "E-sports Competitor, Audio Producer & Tech Enthusiast",
      intro: "My analytical and disciplined approach to software is forged through 20+ years in the competitive e-sports scene and multimedia production, where precision, rapid execution under pressure, and teamwork define success.",
      esportsTitle: "E-sports Competitive Career",
      esportsSubtitle: "Counter-Strike Legacy & Competitive Achievements",
      cs2Title: "Counter-Strike 2 (Current Era)",
      csLegacyTitle: "CS:GO & CS 1.6 / 1.5 (Historical Journey)",
      competitiveProfilesTitle: "Competitive Hubs & Profiles",
      creativeTitle: "Creative & Audio Production",
      creativeSubtitle: "VRBANLIFE Records — Independent Project",
      creativeDescription: "Applied sound engineering and audiovisual production: vocal recording, professional microphone acoustics, instrumental track mixing/editing, and music video directing.",
      creativePillars: [
        {
          title: "Vocal Recording & Professional Miking",
          desc: "Acoustic vocal tracking, signal path calibration, studio baffling, and high-fidelity preamplification."
        },
        {
          title: "Mixing & Instrumental Editing",
          desc: "Surgical EQ, multiband compression, harmonic balance, and digital streaming mastering."
        },
        {
          title: "Audiovisual Production",
          desc: "Music video assembly, color grading, and promotional digital assets using Adobe Photoshop and Vegas Pro."
        }
      ],
      hardwareTitle: "Battle Station & Hardware Setup",
      hardwareSubtitle: "High-refresh developer workstation and competitive performance hardware",
      hardwareToggleOpen: "View Full Hardware Specs",
      hardwareToggleClose: "Hide Hardware Specs",
      hardwareSpecs: [
        {
          category: "CPU & Cooling",
          details: "AMD Ryzen 7 5700X3D + ID-Cooling FROZN A620 Cooler"
        },
        {
          category: "GPU & RAM",
          details: "EVGA RTX 3060 Ti 8GB | 32GB DDR4 T-Force Delta RGB"
        },
        {
          category: "Audio & Peripherals",
          details: "Behringer U-PHORIA UM2, HyperX Cloud Revolver, Logitech G PRO X Superlight, ASUS ROG Strix Falchion"
        },
        {
          category: "Displays",
          details: "ASUS 144Hz + LG 32\" 75Hz"
        }
      ]
    },
    footer: {
      rights: "All rights reserved.",
      profileSummary: "Specialist in E-Commerce, Data Management, Manual Web QA Testing, and Frontend Development.",
      top: "Back to top"
    }
  }
};

export const PROJECTS_DATA: Record<Language, ProjectData[]> = {
  es: [
    {
      id: "jerdany",
      name: "JERDANY",
      role: "Creador & Desarrollador E-commerce",
      company: "Jerdany (Proyecto personal)",
      location: "Rosario, Argentina",
      period: "Ene 2026 – Presente",
      url: "https://jerdany.com",
      displayUrl: "jerdany.com",
      platforms: ["React", "Node.js", "Vite", "API de Gemini", "Prompt Engineering"],
      image: "images/jerdany_preview.png",
      summary: "Tienda e-commerce propia desarrollada con React, Node.js y Vite, con automatización de catálogo mediante API de Gemini y suite completa de pruebas QA.",
      challenge: "Construir desde cero una plataforma e-commerce moderna, ligera y de carga instantánea que eliminara los altos costos operativos y la lentitud típica de los builders tradicionales. El proyecto requería poblar rápidamente un catálogo con descripciones atractivas y garantizar que los flujos de consulta multicanal funcionaran sin un solo fallo desde el primer día.",
      solution: "Desarrollo integral de la tienda en jerdany.com utilizando React, Node.js y Vite. Implementación de una integración directa con la API de Gemini mediante Prompt Engineering para generar descripciones técnicas y comerciales de productos de manera sistemática. Realización de pruebas manuales exhaustivas de usabilidad y verificación punto a punto en los flujos de contacto por WhatsApp, Instagram, Facebook y Email.",
      results: [
        "Reducción del 40% en el tiempo de carga percibido por el usuario en comparación con benchmarks estándar.",
        "Reducción del 50% en el tiempo de redacción y edición del catálogo de productos gracias a la automatización con la API de Gemini.",
        "0 fallos críticos en el lanzamiento público, logrando un embudo de consulta 100% operativo en todos los canales sociales."
      ],
      metrics: [
        { label: "Tiempo de Carga", value: "-40%" },
        { label: "Tiempo Edición Catálogo", value: "-50%" },
        { label: "Fallos Críticos", value: "0" }
      ],
      tags: ["React", "Node.js", "Vite", "Gemini API", "Prompt Engineering", "QA Testing"]
    },
    {
      id: "mj-capilar",
      name: "MJ CAPILAR",
      role: "Consultor E-commerce (Freelance)",
      company: "MJ Capilar",
      location: "Rosario, Argentina",
      period: "Dic 2025 – Ene 2026",
      url: "https://mjcapilar.mitiendanube.com",
      displayUrl: "mjcapilar.mitiendanube.com",
      platforms: ["Tiendanube", "Data Entry Masivo", "QA Checkout"],
      image: "images/mjcapilar_preview.png",
      summary: "Consultoría y configuración punta a punta de tienda online para cosmética capilar en Tiendanube con +150 referencias, benchmark previo en Shopify y capacitación técnica.",
      challenge: "El cliente requería el lanzamiento integral de su tienda digital con más de 150 referencias de cosmética capilar. Se necesitaba determinar la mejor plataforma para el mercado local sin sobrecostos, estructurar el inventario masivo con precisión, validar pasarelas de pago y medios de envío, y capacitar al cliente para que pudiera autogestionar el negocio sin dependencia técnica.",
      solution: "Ejecución de un benchmark comparativo previo en Shopify para contrastar comisiones y funcionalidades, determinando la adopción e implementación definitiva en Tiendanube. Carga y parametrización de más de 150 referencias, configuración completa de medios de pago y envíos, pruebas funcionales pre-lanzamiento en flujos de consulta (WhatsApp, Instagram, Facebook) y checkout. Creación de piezas gráficas promocionales y capacitación técnica al cliente.",
      results: [
        "Despliegue exitoso de tienda e-commerce con catálogo de más de 150 referencias en mjcapilar.mitiendanube.com.",
        "Cero fricción transaccional asegurada en checkout, pasarelas de pago y medios de despacho.",
        "Autonomía operativa total transferida al cliente mediante capacitación técnica estructurada para la gestión de ventas e inventarios."
      ],
      metrics: [
        { label: "Catálogo Activo", value: "+150 Refs" },
        { label: "Fricción Transaccional", value: "0%" },
        { label: "Plataforma Final", value: "Tiendanube" }
      ],
      tags: ["Tiendanube", "Shopify", "Data Entry", "QA Testing", "Photoshop", "Capacitación"]
    },
    {
      id: "all-about-gaming",
      name: "ALL ABOUT GAMING LTD.",
      role: "Data Entry & Especialista en Operaciones E-commerce",
      company: "All About Gaming Ltd.",
      location: "Londres, UK (Remoto)",
      period: "Ene 2023 – Dic 2023",
      url: "https://racinghub.live/en_GB",
      displayUrl: "racinghub.live/en_GB",
      platforms: ["Amazon FBA", "eBay", "Tienda Propia (racinghub.live/en_GB)", "Xero", "Excel"],
      image: "images/racinghub_preview.png",
      summary: "Gestión masiva de datos y logística operativa multicanal de más de 500 referencias en Amazon FBA, eBay y racinghub.live/en_GB con 99.5% de precisión en órdenes semanales.",
      challenge: "Gestionar catálogos extensos con alta variabilidad de inventarios y precios en múltiples canales internacionales simultáneos (Amazon FBA, eBay y tienda propia). Mantener la precisión operativa en órdenes cross-border y asegurar que los despliegues web de la tienda propia no presentaran errores funcionales en navegación ni pagos.",
      solution: "Administración y auditoría masiva de catálogos de más de 500 referencias, stock y listas de precios en Amazon FBA, eBay y racinghub.live/en_GB, coordinando con un equipo remoto de 3 personas. Procesamiento y despacho de 80 a 100 órdenes internacionales semanales. Ejecución de pruebas manuales de QA pre-lanzamiento en flujos de login, navegación y checkout con registro de incidencias y re-testing. Conciliación contable en Xero y Excel, edición con Photoshop y crecimiento de Instagram.",
      results: [
        "80 a 100 órdenes internacionales procesadas semanalmente con un índice de 99.5% de precisión operativa.",
        "Auditoría continua y sincronización masiva de inventario de más de 500 referencias sin roturas de stock.",
        "Detección y resolución de anomalías funcionales mediante QA manual pre-lanzamiento en racinghub.live/en_GB.",
        "Escalado orgánico en Instagram de 0 a 1.000 seguidores en 7 meses mediante material gráfico promocional en Adobe Photoshop."
      ],
      metrics: [
        { label: "Precisión Operativa", value: "98.5%" },
        { label: "Órdenes Semanales", value: "80-100" },
        { label: "Catálogo Auditado", value: "+500 Refs" },
        { label: "Instagram Orgánico", value: "0 a 1K" }
      ],
      tags: ["Amazon FBA", "eBay", "racinghub.live", "Excel", "Xero", "QA Testing", "Photoshop"]
    }
  ],
  en: [
    {
      id: "jerdany",
      name: "JERDANY",
      role: "Creator & E-Commerce Developer",
      company: "Jerdany (Personal Project)",
      location: "Rosario, Argentina",
      period: "Jan 2026 – Present",
      url: "https://jerdany.com",
      displayUrl: "jerdany.com",
      platforms: ["React", "Node.js", "Vite", "Gemini API", "Prompt Engineering"],
      image: "images/jerdany_preview.png",
      summary: "Proprietary e-commerce store built with React, Node.js, and Vite, featuring Gemini API catalog automation and complete manual QA verification.",
      challenge: "Build a modern, ultra-responsive e-commerce platform from scratch that eliminated the high subscription overhead and sluggish load times of conventional web builders. Rapidly populate product descriptions while ensuring all omni-channel customer touchpoints executed flawlessly from launch day.",
      solution: "Engineered jerdany.com from end to end using React, Node.js, and Vite. Implemented direct Gemini API integration through systematic Prompt Engineering to automate accurate, brand-aligned product descriptions. Carried out comprehensive manual usability and QA testing across customer inquiry funnels on WhatsApp, Instagram, Facebook, and Email.",
      results: [
        "40% reduction in user perceived load time compared to traditional web builders.",
        "50% reduction in catalog copywriting and editing time through Gemini API automation.",
        "0 critical defects upon public launch with 100% verified inquiry flow reliability."
      ],
      metrics: [
        { label: "Perceived Load Time", value: "-40%" },
        { label: "Catalog Editing Time", value: "-50%" },
        { label: "Critical Launch Bugs", value: "0" }
      ],
      tags: ["React", "Node.js", "Vite", "Gemini API", "Prompt Engineering", "QA Testing"]
    },
    {
      id: "mj-capilar",
      name: "MJ CAPILAR",
      role: "E-Commerce Consultant (Freelance)",
      company: "MJ Capilar",
      location: "Rosario, Argentina",
      period: "Dec 2025 – Jan 2026",
      url: "https://mjcapilar.mitiendanube.com",
      displayUrl: "mjcapilar.mitiendanube.com",
      platforms: ["Tiendanube", "Bulk Data Entry", "QA Checkout"],
      image: "images/mjcapilar_preview.png",
      summary: "End-to-end e-commerce store configuration for a hair cosmetics client on Tiendanube with 150+ SKUs, Shopify benchmark, and client training.",
      challenge: "The client required an operational online store launched with more than 150 hair care references. The project required identifying the most cost-effective platform for the regional market, structuring catalog data accurately, validating checkout and shipping channels, and enabling total client self-sufficiency.",
      solution: "Conducted comparative benchmarking on Shopify before deploying the definitive production store on Tiendanube. Administered bulk catalog entry for over 150 references, established gateway and carrier configurations, and ran functional pre-launch QA across checkouts and social inquiries (WhatsApp, IG, FB). Created promotional graphic assets and trained the client in self-management.",
      results: [
        "Successfully launched production e-commerce store with 150+ product catalog on mjcapilar.mitiendanube.com.",
        "Zero transactional friction verified across checkouts, payment processing, and shipping calculations.",
        "100% operational autonomy achieved by client through structured hands-on training for sales and stock management."
      ],
      metrics: [
        { label: "Active Catalog", value: "150+ SKUs" },
        { label: "Checkout Friction", value: "0%" },
        { label: "Production Platform", value: "Tiendanube" }
      ],
      tags: ["Tiendanube", "Shopify", "Data Entry", "QA Testing", "Photoshop", "Client Training"]
    },
    {
      id: "all-about-gaming",
      name: "ALL ABOUT GAMING LTD.",
      role: "Data Entry & E-Commerce Operations Specialist",
      company: "All About Gaming Ltd.",
      location: "London, UK (Remote)",
      period: "Jan 2023 – Dec 2023",
      url: "https://racinghub.live/en_GB",
      displayUrl: "racinghub.live/en_GB",
      platforms: ["Amazon FBA", "eBay", "Own Store (racinghub.live/en_GB)", "Xero", "Excel"],
      image: "images/racinghub_preview.png",
      summary: "Multi-channel catalog data entry, inventory audits, and logistics for 500+ SKUs on Amazon FBA, eBay, and racinghub.live/en_GB with 99.5% accuracy.",
      challenge: "Managing extensive sim racing equipment catalogs across multiple global marketplaces with fluctuating stock and cross-border logistics, while guaranteeing that proprietary store features operated without transactional failures.",
      solution: "Administered and audited 500+ SKUs across Amazon FBA, eBay, and racinghub.live/en_GB in coordination with a 3-person remote team. Processed 80 to 100 international orders weekly. Executed functional pre-release manual QA testing on login, catalog navigation, and checkout flows. Reconciled invoices in Xero and Excel, produced promotional visuals in Photoshop, and grew social reach.",
      results: [
        "80 to 100 international orders processed each week with 99.5% operational precision.",
        "Continuous auditing and synchronization across 500+ references with zero out-of-stock discrepancies.",
        "Resolved pre-launch UX defects through systematic manual QA on racinghub.live/en_GB.",
        "Organic Instagram growth from 0 to 1,000 followers in 7 months utilizing tailored promotional creatives in Photoshop."
      ],
      metrics: [
        { label: "Operational Precision", value: "98.5%" },
        { label: "Weekly Orders", value: "80-100" },
        { label: "Audited SKUs", value: "500+" },
        { label: "Organic Instagram", value: "0 to 1K" }
      ],
      tags: ["Amazon FBA", "eBay", "racinghub.live", "Excel", "Xero", "QA Testing", "Photoshop"]
    }
  ]
};

export const EXPERIENCE_DATA: Record<Language, ExperienceItem[]> = {
  es: [
    {
      id: "exp-jerdany",
      company: "JERDANY (Proyecto personal)",
      role: "Creador & Desarrollador E-commerce",
      modality: "Rosario, Argentina",
      location: "Rosario, Argentina",
      period: "Ene 2026 – Presente",
      platforms: ["React", "Node.js", "Vite", "API de Gemini", "Prompt Engineering", "WhatsApp", "Instagram", "Facebook", "Email"],
      bullets: [
        "Desarrollo Web & UX: Desarrollo integral de la tienda e-commerce jerdany.com con React, Node.js y Vite, logrando una reducción del 40% en el tiempo de carga percibido por el usuario.",
        "Pruebas QA & Despliegue: Pruebas manuales de usabilidad y del flujo de consultas por WhatsApp, Instagram, Facebook & Email garantizando 0 fallos críticos en el lanzamiento.",
        "Automatización de Catálogo: Integración de la API de Gemini mediante Prompt Engineering para la generación automática de descripciones de productos, reduciendo el tiempo de edición a la mitad."
      ]
    },
    {
      id: "exp-mj-capilar",
      company: "MJ CAPILAR (Freelance)",
      role: "Consultor E-commerce",
      modality: "Rosario, Argentina",
      location: "Rosario, Argentina",
      period: "Dic 2025 – Ene 2026",
      platforms: ["Tiendanube (mjcapilar.mitiendanube.com)", "WhatsApp", "Instagram", "Facebook"],
      bullets: [
        "Implementación & Catálogo: Configuración punta a punta de tienda e-commerce para cliente final, realizando benchmarks comparativos en Shopify e implementando la arquitectura definitiva en Tiendanube con un catálogo de más de 150 referencias (mjcapilar.mitiendanube.com).",
        "QA & Integraciones: Pruebas funcionales pre-lanzamiento en flujos de consultas por WhatsApp, Instagram, Facebook y de checkout, pasarelas de pago y medios de envío, asegurando cero fricción transaccional.",
        "Diseño & Capacitación: Creación de piezas gráficas promocionales y capacitación técnica al cliente para la autogestión integral de ventas e inventarios."
      ]
    },
    {
      id: "exp-all-about-gaming",
      company: "ALL ABOUT GAMING LTD.",
      role: "Data Entry & Especialista en Operaciones E-commerce",
      modality: "Londres, UK (Remoto)",
      location: "Londres, UK (Remoto)",
      period: "Ene 2023 – Dic 2023",
      platforms: ["Amazon FBA", "eBay", "Tienda propia (racinghub.live/en_GB)", "Xero", "Excel", "Adobe Photoshop", "Instagram"],
      bullets: [
        "Gestión de Datos & Operaciones: Administración y auditoría masiva de catálogos de más de 500 referencias, inventarios y listas de precios en Amazon FBA, eBay y tienda propia (racinghub.live/en_GB), coordinando con equipo remoto de 3 personas.",
        "Procesamiento & Logística: Procesamiento y gestión de 80 a 100 órdenes internacionales semanales con 99.5% de precisión operativa.",
        "QA Testing & Documentación: Pruebas funcionales manuales (QA) pre-lanzamiento en flujos de login, navegación y checkout; documentación de incidencias y re-testing.",
        "Administración, Multimedia & Marketing: Conciliación contable y facturación con Xero y Excel; edición de material gráfico promocional con Adobe Photoshop y escalado orgánico en Instagram de 0 a 1.000 seguidores en 7 meses."
      ]
    }
  ],
  en: [
    {
      id: "exp-jerdany",
      company: "JERDANY (Personal Project)",
      role: "Creator & E-Commerce Developer",
      modality: "Rosario, Argentina",
      location: "Rosario, Argentina",
      period: "Jan 2026 – Present",
      platforms: ["React", "Node.js", "Vite", "Gemini API", "Prompt Engineering", "WhatsApp", "Instagram", "Facebook", "Email"],
      bullets: [
        "Web Development & UX: Full-stack development of jerdany.com using React, Node.js, and Vite, achieving a 40% reduction in perceived page loading time.",
        "QA Testing & Release: End-to-end manual usability tests across omnichannel inquiry flows (WhatsApp, Instagram, Facebook, and Email) ensuring 0 critical defects on release.",
        "Catalog Automation: Direct integration of the Gemini API via Prompt Engineering for automated product description generation, cutting copywriting time by half."
      ]
    },
    {
      id: "exp-mj-capilar",
      company: "MJ CAPILAR (Freelance)",
      role: "E-Commerce Consultant",
      modality: "Rosario, Argentina",
      location: "Rosario, Argentina",
      period: "Dec 2025 – Jan 2026",
      platforms: ["Tiendanube (mjcapilar.mitiendanube.com)", "WhatsApp", "Instagram", "Facebook"],
      bullets: [
        "Setup & Catalog Architecture: Turnkey e-commerce configuration for client, executing comparative benchmarks on Shopify before building the production architecture on Tiendanube with 150+ SKUs (mjcapilar.mitiendanube.com).",
        "QA & Channel Integrations: Pre-release functional QA across inquiry paths (WhatsApp, Instagram, Facebook), checkout pipelines, payment gateways, and shipping providers with zero transactional friction.",
        "Design & Client Enablement: Produced promotional creatives and delivered technical client coaching for self-sufficient ongoing sales and inventory operations."
      ]
    },
    {
      id: "exp-all-about-gaming",
      company: "ALL ABOUT GAMING LTD.",
      role: "Data Entry & E-Commerce Operations Specialist",
      modality: "London, UK (Remote)",
      location: "London, UK (Remote)",
      period: "Jan 2023 – Dec 2023",
      platforms: ["Amazon FBA", "eBay", "Own Store (racinghub.live/en_GB)", "Xero", "Excel", "Adobe Photoshop", "Instagram"],
      bullets: [
        "Data Management & Operations: Administered and audited 500+ SKU catalogs, inventory levels, and price books across Amazon FBA, eBay, and proprietary store (racinghub.live/en_GB) alongside a 3-person remote team.",
        "Fulfillment & Cross-Border Logistics: Processed 80 to 100 international customer orders per week with a 99.5% operational accuracy rate.",
        "QA Testing & Issue Tracking: Performed pre-release manual QA on authentication, catalog browsing, and checkout sequences; logged defects and ran regression tests.",
        "Administration, Media & Social: Reconciled invoicing using Xero and Excel; produced promotional graphics with Adobe Photoshop and drove organic Instagram growth from 0 to 1,000 followers in 7 months."
      ]
    }
  ]
};

export const CERTIFICATIONS_LIST: Record<Language, CertificationItem[]> = {
  es: [
    {
      id: "cert-1",
      name: "Digitaliza paso a paso tu negocio con herramientas de google",
      issuer: "Google Active",
      year: "2023",
      category: "data",
      url: "/certificates.pdf#page=1"
    },
    {
      id: "cert-2",
      name: "Protege tu negocio: Ciberseguridad en el teletrabajo",
      issuer: "Google Active",
      year: "2023",
      category: "programming",
      url: "/certificates.pdf#page=2"
    },
    {
      id: "cert-3",
      name: "Competencias digitales para profesionales",
      issuer: "Google Active",
      year: "2023",
      category: "business",
      url: "/certificates.pdf#page=3"
    },
    {
      id: "cert-4",
      name: "Introducción al Desarrollo Web",
      issuer: "Google Active",
      year: "2023",
      category: "programming",
      url: "/certificates.pdf#page=4"
    },
    {
      id: "cert-5",
      name: "Introducción a las habilidades profesionales en análisis de datos",
      issuer: "LinkedIn Learning & Microsoft",
      year: "2023",
      category: "programming",
      url: "/certificates.pdf#page=5"
    },
    {
      id: "cert-6",
      name: "Introduction to Career Skills in Software Development",
      issuer: "LinkedIn Learning & Microsoft",
      year: "2023",
      category: "programming",
      url: "/certificates.pdf#page=6"
    },
    {
      id: "cert-7",
      name: "Desafío de programación: JavaScript básico",
      issuer: "Google Activate",
      year: "2022",
      category: "programming",
      url: "/certificates.pdf#page=7"
    },
    {
      id: "cert-8",
      name: "Programming Foundations: Beyond the Fundamentals",
      issuer: "LinkedIn Learning & Microsoft",
      year: "2023",
      category: "programming",
      url: "/certificates.pdf#page=8"
    },
    {
      id: "cert-9",
      name: "Programming Foundations: Fundamentals",
      issuer: "LinkedIn Learning & Microsoft",
      year: "2023",
      category: "cloud",
      url: "/certificates.pdf#page=9"
    },
    {
      id: "cert-10",
      name: "Azure AZ-900 Prep. Cert.: Microsoft Azure Fundamentals",
      issuer: "LinkedIn Learning & Microsoft",
      year: "2026",
      category: "cloud",
      url: "/certificates.pdf#page=10"
    },
    {
      id: "cert-11",
      name: "Career Essentials in Software Development",
      issuer: "LinkedIn Learning & Microsoft",
      year: "2023",
      category: "business",
      url: "/certificates.pdf#page=11"
    },
    {
      id: "cert-12",
      name: "Conceptos de la programación",
      issuer: "Open Bootcamp",
      year: "2023",
      category: "business",
      url: "/certificates.pdf#page=12"
    },
    {
      id: "cert-13",
      name: "HTML y CSS",
      issuer: "Open Bootcamp",
      year: "2023",
      category: "business",
      url: "/certificates.pdf#page=13"
    },
    {
      id: "cert-14",
      name: "Introducción a la programación",
      issuer: "Open Bootcamp",
      year: "2023",
      category: "business",
      url: "/certificates.pdf#page=14"
    },
    {
      id: "cert-15",
      name: "Java Basico",
      issuer: "Open Bootcamp",
      year: "2023",
      category: "business",
      url: "/certificates.pdf#page=15"
    },
    {
      id: "cert-16",
      name: "Fundamentos del desarrollo web: Full Stack o Front-end",
      issuer: "LinkedIn Learning & Microsoft",
      year: "2023",
      category: "business",
      url: "/certificates.pdf#page=16"
    },
    {
      id: "cert-17",
      name: "Introduction to Cloud",
      issuer: "IBM",
      year: "2023",
      category: "business",
      url: "/certificates.pdf#page=17"
    }

  ],
  en: [
    {
      id: "cert-1",
      name: "Digitaliza paso a paso tu negocio con herramientas de google",
      issuer: "Google Active",
      year: "2023",
      category: "data",
      url: "/certificates.pdf#page=1"
    },
    {
      id: "cert-2",
      name: "Protege tu negocio: Ciberseguridad en el teletrabajo",
      issuer: "Google Active",
      year: "2023",
      category: "programming",
      url: "/certificates.pdf#page=2"
    },
    {
      id: "cert-3",
      name: "Competencias digitales para profesionales",
      issuer: "Google Active",
      year: "2023",
      category: "business",
      url: "/certificates.pdf#page=3"
    },
    {
      id: "cert-4",
      name: "Introducción al Desarrollo Web",
      issuer: "Google Active",
      year: "2023",
      category: "programming",
      url: "/certificates.pdf#page=4"
    },
    {
      id: "cert-5",
      name: "Introducción a las habilidades profesionales en análisis de datos",
      issuer: "LinkedIn Learning & Microsoft",
      year: "2023",
      category: "programming",
      url: "/certificates.pdf#page=5"
    },
    {
      id: "cert-6",
      name: "Introduction to Career Skills in Software Development",
      issuer: "LinkedIn Learning & Microsoft",
      year: "2023",
      category: "programming",
      url: "/certificates.pdf#page=6"
    },
    {
      id: "cert-7",
      name: "Desafío de programación: JavaScript básico",
      issuer: "Google Activate",
      year: "2022",
      category: "programming",
      url: "/certificates.pdf#page=7"
    },
    {
      id: "cert-8",
      name: "Programming Foundations: Beyond the Fundamentals",
      issuer: "LinkedIn Learning & Microsoft",
      year: "2023",
      category: "programming",
      url: "/certificates.pdf#page=8"
    },
    {
      id: "cert-9",
      name: "Programming Foundations: Fundamentals",
      issuer: "LinkedIn Learning & Microsoft",
      year: "2023",
      category: "cloud",
      url: "/certificates.pdf#page=9"
    },
    {
      id: "cert-10",
      name: "Azure AZ-900 Prep. Cert.: Microsoft Azure Fundamentals",
      issuer: "LinkedIn Learning & Microsoft",
      year: "2026",
      category: "cloud",
      url: "/certificates.pdf#page=10"
    },
    {
      id: "cert-11",
      name: "Career Essentials in Software Development",
      issuer: "LinkedIn Learning & Microsoft",
      year: "2023",
      category: "business",
      url: "/certificates.pdf#page=11"
    },
    {
      id: "cert-12",
      name: "Conceptos de la programación",
      issuer: "Open Bootcamp",
      year: "2023",
      category: "business",
      url: "/certificates.pdf#page=12"
    },
    {
      id: "cert-13",
      name: "HTML y CSS",
      issuer: "Open Bootcamp",
      year: "2023",
      category: "business",
      url: "/certificates.pdf#page=13"
    },
    {
      id: "cert-14",
      name: "Introducción a la programación",
      issuer: "Open Bootcamp",
      year: "2023",
      category: "business",
      url: "/certificates.pdf#page=14"
    },
    {
      id: "cert-15",
      name: "Java Basico",
      issuer: "Open Bootcamp",
      year: "2023",
      category: "business",
      url: "/certificates.pdf#page=15"
    },
    {
      id: "cert-16",
      name: "Fundamentos del desarrollo web: Full Stack o Front-end",
      issuer: "LinkedIn Learning & Microsoft",
      year: "2023",
      category: "business",
      url: "/certificates.pdf#page=16"
    },
    {
      id: "cert-17",
      name: "Introduction to Cloud",
      issuer: "IBM",
      year: "2023",
      category: "business",
      url: "/certificates.pdf#page=17"
    }
  ]
};

export const EDUCATION_LIST: Record<Language, EducationItem[]> = {
  es: [
    {
      id: "edu-1",
      institution: "Formación Técnica Autónoma & Desarrollo Práctico de Proyectos",
      title: "Desarrollo Web & Tecnologías de Inteligencia Artificial",
      location: "Rosario, Argentina",
      period: "Ene 2024 – Nov 2025",
      description: "Estudio técnico aplicado y construcción de soluciones web con HTML5, CSS3, JavaScript, React, Node.js y flujos de automatización con IA (API de Gemini)."
    },
    {
      id: "edu-2",
      institution: "E.E.S.O. N° 272 “Juan Bautista Alberdi”",
      title: "Educación Secundaria Completa",
      location: "Rosario, Santa Fe",
      period: "2007 – 2013",
      description: "Bachillerato completo con sólida base en comunicación, ciencias y pensamiento analítico."
    }
  ],
  en: [
    {
      id: "edu-1",
      institution: "Autonomous Technical Training & Practical Project Development",
      title: "Web Development & Artificial Intelligence Technologies",
      location: "Rosario, Argentina",
      period: "Jan 2024 – Nov 2025",
      description: "Applied technical study and development of real-world web solutions utilizing HTML5, CSS3, JavaScript, React, Node.js, and AI automation pipelines (Gemini API)."
    },
    {
      id: "edu-2",
      institution: "E.E.S.O. N° 272 “Juan Bautista Alberdi”",
      title: "High School Diploma (Completed Secondary Education)",
      location: "Rosario, Santa Fe",
      period: "2007 – 2013",
      description: "Complete secondary graduation with a solid grounding in analytical thinking and communications."
    }
  ]
};

export const SKILL_ITEMS: {
  id: string;
  category: 'ecommerce' | 'qa' | 'cloud';
  name: string;
  descEs: string;
  descEn: string;
}[] = [
  // E-commerce & Datos
  {
    id: "s-excel",
    category: "ecommerce",
    name: "Excel",
    descEs: "Auditoría de inventario, conciliación contable, listas de precios y análisis de datos.",
    descEn: "Inventory audits, financial reconciliations, pricing matrices, and data analytics."
  },
  {
    id: "s-xero",
    category: "ecommerce",
    name: "Xero",
    descEs: "Conciliación contable y facturación para operaciones de comercio internacional.",
    descEn: "Accounting reconciliation and invoicing for international e-commerce orders."
  },
  {
    id: "s-amazon-fba",
    category: "ecommerce",
    name: "Amazon FBA",
    descEs: "Gestión de catálogos masivos, inventarios y logística de fulfillment multicanal.",
    descEn: "Bulk catalog maintenance, inventory sync, and multi-channel fulfillment operations."
  },
  {
    id: "s-ebay",
    category: "ecommerce",
    name: "eBay",
    descEs: "Administración operativa de listados de productos, ventas y atención de pedidos.",
    descEn: "Operational management of product listings, sales funnels, and order dispatch."
  },
  {
    id: "s-tiendanube",
    category: "ecommerce",
    name: "Tiendanube",
    descEs: "Configuración integral de tiendas, catálogo de +150 referencias, medios de pago y envíos.",
    descEn: "Turnkey store setup, 150+ SKU catalog architecture, checkout gateways, and shipping."
  },
  {
    id: "s-shopify",
    category: "ecommerce",
    name: "Shopify",
    descEs: "Benchmarking comparativo de plataformas y evaluación de costos de arquitectura.",
    descEn: "Comparative e-commerce platform benchmarking and structural cost assessment."
  },
  {
    id: "s-data-entry",
    category: "ecommerce",
    name: "Data Entry Masivo",
    descEs: "Procesamiento y sincronización masiva de datos con 99.5% de precisión operativa.",
    descEn: "Bulk data processing and catalog synchronization with 99.5% operational precision."
  },
  {
    id: "s-inventory-audit",
    category: "ecommerce",
    name: "Auditoría de Inventario",
    descEs: "Supervisión continua de existencias, control de roturas y verificación de precios.",
    descEn: "Continuous stock oversight, stockout prevention, and cross-channel price verification."
  },

  // QA & IA & Dev
  {
    id: "s-qa-testing",
    category: "qa",
    name: "QA Testing Web Manual",
    descEs: "Pruebas funcionales pre-lanzamiento en login, navegación, checkout y canales de consulta.",
    descEn: "Pre-release functional manual QA covering authentication, browsing, and checkouts."
  },
  {
    id: "s-prompt-engineering",
    category: "qa",
    name: "Prompt Engineering",
    descEs: "Diseño de instrucciones estructuradas para automatización y generación de catálogos.",
    descEn: "Structured prompt design for automated e-commerce catalog copywriting and validation."
  },
  {
    id: "s-gemini-api",
    category: "qa",
    name: "API de Gemini",
    descEs: "Integración directa de modelos Gemini para redacción acelerada de productos e-commerce.",
    descEn: "Direct integration of Gemini models for accelerated e-commerce catalog text generation."
  },
  {
    id: "s-google-ai-studio",
    category: "qa",
    name: "Google AI Studio",
    descEs: "Entorno de experimentación, prototipado y refinamiento de prompts para producción.",
    descEn: "Rapid experimentation, prompt tuning, and model validation workspace for production."
  },
  {
    id: "s-ui-ux-checkout",
    category: "qa",
    name: "UI/UX Checkout",
    descEs: "Optimización del flujo transaccional y reducción de fricción en pasarelas de pago.",
    descEn: "Transactional flow optimization, friction removal, and payment gateway usability."
  },
  {
    id: "s-photoshop",
    category: "qa",
    name: "Adobe Photoshop",
    descEs: "Edición y optimización de piezas gráficas publicitarias y fotografía de producto.",
    descEn: "Image editing and optimization for promotional campaigns and product photography."
  },
  {
    id: "s-vegas-pro",
    category: "qa",
    name: "Vegas Pro",
    descEs: "Edición y montaje de video promocional para productos y canales digitales.",
    descEn: "Audiovisual video editing and assembly for promotional digital channels."
  },
  {
    id: "s-react",
    category: "qa",
    name: "React",
    descEs: "Desarrollo frontend modular por componentes, estado y arquitectura SPA/SSG.",
    descEn: "Modular component frontend development, state management, and SPA/SSG architecture."
  },
  {
    id: "s-nodejs",
    category: "qa",
    name: "Node.js",
    descEs: "Lógica de backend, utilidades de automatización e integración con APIs externas.",
    descEn: "Backend logic, workflow automation scripting, and external API integrations."
  },
  {
    id: "s-vite",
    category: "qa",
    name: "Vite",
    descEs: "Tooling y empaquetado de alto rendimiento para tiempos de carga optimizados.",
    descEn: "High-performance build tooling for streamlined bundling and fast client load times."
  },
  {
    id: "s-javascript",
    category: "qa",
    name: "JavaScript",
    descEs: "Manipulación de DOM, consumo asíncrono de APIs y programación funcional.",
    descEn: "DOM manipulation, asynchronous API consumption, and functional client logic."
  },
  {
    id: "s-html-css",
    category: "qa",
    name: "HTML5 & CSS3",
    descEs: "Estructuras semánticas, maquetación responsive, accesibilidad web y SEO técnico.",
    descEn: "Semantic HTML structures, responsive layouts, web accessibility, and technical SEO."
  },
  {
    id: "s-git",
    category: "qa",
    name: "Git",
    descEs: "Control de versiones distribuido, seguimiento de cambios y repositorios en GitHub.",
    descEn: "Distributed version control, history tracking, and GitHub repository workflows."
  },

  // Cloud & Certificaciones
  {
    id: "s-azure",
    category: "cloud",
    name: "Microsoft Azure Fundamentals",
    descEs: "Conceptos de arquitectura cloud, servicios esenciales y modelos IaaS/PaaS/SaaS.",
    descEn: "Cloud architecture concepts, core compute services, and IaaS/PaaS/SaaS models."
  },
  {
    id: "s-ibm-cloud",
    category: "cloud",
    name: "IBM Cloud Fundamentals",
    descEs: "Fundamentos de computación en la nube, infraestructura global y ciberseguridad.",
    descEn: "Cloud computing fundamentals, global cloud infrastructure, and cybersecurity."
  },
  {
    id: "s-data-analysis",
    category: "cloud",
    name: "Análisis de Datos",
    descEs: "Habilidades profesionales certificadas por Microsoft y LinkedIn Learning.",
    descEn: "Professional data analysis competencies certified by Microsoft & LinkedIn Learning."
  }
];
