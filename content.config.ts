import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    posts: defineCollection({
      type: 'page',
      source: 'posts/**/*.md',
      schema: z.object({
        title: z.string(),
        date: z.string(),
        author: z.string().optional(),
        excerpt: z.string().optional(),
        tags: z.array(z.string()).optional(),
        cover: z.string().optional(),
      }),
    }),
    news: defineCollection({
      type: 'page',
      source: 'news/**/*.md',
      schema: z.object({
        title: z.string(),
        date: z.string(),
        excerpt: z.string().optional(),
        category: z.string().optional(),
        external_link: z.string().optional(),
      }),
    }),
  },
})
