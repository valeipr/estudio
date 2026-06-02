import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const proyectos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/proyectos' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    date: z.string(),
    cover: z.string(),
    tags: z.array(z.string()),
    readTime: z.number().optional().default(5),
    overview: z.object({
      cliente: z.string().optional(),
      herramientas: z.string().optional(),
      año: z.string().optional(),
      rol: z.string().optional(),
    }).optional(),
  }),
});

export const collections = { proyectos };
