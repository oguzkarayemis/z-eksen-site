import { defineCollection, z } from 'astro:content';

const booksCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
    price: z.number(),
    coverImage: z.string().optional(),
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
