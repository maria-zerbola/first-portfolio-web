import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const project = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/project' }),
  schema: z.object({
    title: z.string(),
    accentColor: z.string().default('#000000'),
    bigTitle: z.string(),
    emphasis: z.string().optional(),
    headline: z.string(),
    excerpt: z.string(),
    time: z.string().optional(),
    author: z.string(),
    context: z.string().default('Personal Project'),
    date: z.coerce.date(),
    cover: z.string(),
    featured: z.boolean().default(false),
    pageNumber: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const article = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/article' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    accentColor: z.string().default('#000000'),
    date: z.coerce.date(),
    order: z.number().optional(),
    cover: z.string(),
    summary: z.string(),
    url: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { project, article };
