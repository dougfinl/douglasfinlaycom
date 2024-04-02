import { z, defineCollection } from 'astro:content';

const theatreCollection = defineCollection({
    type: 'content',
    schema: ({ image }) =>
        z.object({
            tags: z.array(
                z.enum([
                    'dance',
                    'immersive',
                    'music',
                    'musicals',
                    'opera',
                    'panto',
                    'plays',
                ]),
            ),
            title: z.string(),
            company: z.string(),
            director: z.string().optional(),
            ld: z.string(),
            role: z.string(),
            photo: z
                .object({
                    image: image(),
                    credit: z.string(),
                })
                .optional(),
            instances: z.array(
                z.object({
                    from: z.coerce.date(),
                    to: z.coerce.date(),
                    location: z.string(),
                }),
            ),
            hide: z.boolean().optional(),
        }),
});

export const collections = {
    theatre: theatreCollection,
};
