import {
  siAngular,
  siAstro,
  siFilament,
  siGraphql,
  siLaravel,
  siNodedotjs,
  siPhp,
  siPrestashop,
  siReact,
  siShopify,
  siTailwindcss,
  siTypescript,
} from 'simple-icons';

interface Tech {
  path: string;
  hex: string;
}

// Logo y color de marca por etiqueta. Las etiquetas sin entrada se muestran como badge neutro
const TECH: Record<string, Tech> = {
  angular: { ...siAngular, hex: 'DD0031' },
  astro: siAstro,
  filament: siFilament,
  graphql: siGraphql,
  laravel: siLaravel,
  'node.js': siNodedotjs,
  php: siPhp,
  prestashop: siPrestashop,
  react: siReact,
  shopify: siShopify,
  'tailwind css': siTailwindcss,
  typescript: siTypescript,
};

export const getTech = (name: string): Tech | undefined => TECH[name.toLowerCase()];
