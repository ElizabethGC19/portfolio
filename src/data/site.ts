// Datos globales del portfolio: edítalos con tu información
export const SITE = {
  name: 'Elizabeth García',
  role: 'Desarrolladora Full-Stack',
  description:
    'Desarrolladora Full-Stack con +2 años de experiencia y perfil orientado al back-end, especializada en PHP (Laravel, Filament) y en React.',
  // Fragmento de la descripción que se resalta en verde en la presentación
  highlight: 'PHP (Laravel, Filament) y en React',
  email: 'eligc1919@gmail.com',
  location: 'Alicante, España',
  // Ruta a la foto dentro de /public (p. ej. '/foto.jpg').
  photo: '',
};

// Cada enlace apunta a una sección de la página principal
export const NAV_LINKS = [
  { href: '/#experiencia', label: 'Experiencia' },
  { href: '/#proyectos', label: 'Proyectos' },
  { href: '/#sobre-mi', label: 'Sobre mí' },
  { href: '/#contacto', label: 'Contacto' },
];

export const SOCIAL_LINKS = [
  { href: 'https://github.com/ElizabethGC19', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/elizabeth-garc%C3%ADa-cerd%C3%A1-176565258/', label: 'LinkedIn' },
];

export const ABOUT = [
  'Desarrolladora Full-Stack con más de 2 años de experiencia en entornos de producción y un perfil orientado al back-end. Especializada en el ecosistema PHP (Laravel, Filament) y en React en el front-end.',
  'Tengo experiencia en arquitecturas desacopladas con Domain-Driven Design (DDD) y principios SOLID, integraciones para plataformas B2B y e-commerce (Shopify, PrestaShop), modernización de sistemas legacy y mentorización de perfiles junior mediante code reviews.',
];

export const EXPERIENCE = [
  {
    role: 'Desarrolladora Web Full-Stack',
    company: 'NITSNETS',
    location: 'Alicante',
    period: 'Marzo 2024 — Julio 2026',
    highlights: [
      {
        title: 'Desarrollo de proyectos para clientes',
        text: 'Webs corporativas, CMS a medida, intranets e integraciones e-commerce para clientes como VAPF y Grupo ASV.',
      },
      {
        title: 'Arquitectura DDD en proyectos B2B',
        text: 'Participación técnica en múltiples proyectos B2B sobre .NET aplicando Domain-Driven Design.',
      },
      {
        title: 'Mantenimiento evolutivo de sistemas legacy (PHP / Node.js)',
        text: 'Optimización, refactorización y modernización de plataformas en producción; resolución de incidencias complejas para mejorar la estabilidad del sistema.',
      },
      {
        title: 'Code reviews y mentoría',
        text: 'Revisión de Pull Requests y mentorización de desarrolladores junior, velando por la calidad del software, la escalabilidad y las buenas prácticas del equipo.',
      },
    ],
  },
];

export const SKILL_GROUPS = [
  {
    title: 'Back-end y arquitectura',
    skills: ['PHP 8+', 'Laravel', 'Filament', 'Symfony', 'Node.js', '.NET', 'APIs REST', 'GraphQL', 'SOLID', 'DDD'],
  },
  {
    title: 'Front-end',
    skills: ['React', 'TypeScript', 'JavaScript', 'Angular', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    title: 'Bases de datos y cloud',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Cloudflare', 'Docker'],
  },
  {
    title: 'E-commerce y herramientas',
    skills: ['Shopify', 'PrestaShop', 'Git', 'Metodologías ágiles', 'IA generativa aplicada al desarrollo'],
  },
];

export const EDUCATION = [
  {
    title: 'Grado Superior en Desarrollo de Aplicaciones Web (DAW)',
    center: 'IES San Vicente, Alicante',
    period: '2024',
  },
  {
    title: 'Rocket: Curso de Programación Avanzada',
    center: 'Universidad de Alicante',
    period: '2024 — 2025',
  },
];

export const LANGUAGES = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Inglés', level: 'B2 (lectura de documentación técnica y comunicación escrita)' },
];
