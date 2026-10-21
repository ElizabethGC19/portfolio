import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      client: z.string().optional(),
      // 'personal' aparece en la subsección "Proyectos personales"
      category: z.enum(['profesional', 'personal']).default('profesional'),
      // Ruta relativa al .md, p. ej. ../../assets/projects/mi-proyecto.png
      image: image().optional(),
      tags: z.array(z.string()).default([]),
      repo: z.url().optional(),
      demo: z.url().optional(),
      featured: z.boolean().default(false),
      // Orden de aparición (menor = primero)
      order: z.number().default(99),
    }),
});

export const collections = { projects };
