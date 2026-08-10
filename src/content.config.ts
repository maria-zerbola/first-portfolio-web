import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const project = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/project' }),
  schema: z.object({
    title: z.string(),
    bigTitle: z.string(),
    emphasis: z.string().optional(),
    headline: z.string(),
    excerpt: z.string(),
    author: z.string(),
    readTime: z.string().default('5 Min Read'),
    date: z.coerce.date(),
    cover: z.string(),
    featured: z.boolean().default(false),
    pageNumber: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const article = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/article' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    date: z.coerce.date(),
    order: z.number(),
    cover: z.string(),
    summary: z.string(),
    url: z.string().url().optional(),
  }),
});

export const collections = { project, article };
