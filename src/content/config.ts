import { defineCollection, z } from 'astro:content';

const booksCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    author: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date().or(z.string()).optional(),
    manset: z.boolean().optional(),
    price: z.number().or(z.string()),
    coverImage: image().optional(),
    googlePlayUrl: z.string().url(),
    dizi: z.string().optional(),
  }),
});

const dizilerCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  'books': booksCollection,
  'diziler': dizilerCollection,
};
