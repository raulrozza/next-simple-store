import * as z from 'zod';

const commonShape = {
    name: z.string(),
    description: z.string(),
    price: z.number(),
    slug: z.string(),
};

export const ProductCreationSchema = z.object({
    name: z.string(),
    description: z.string(),
    price: z.number(),
    slug: z.string(),
});

export const ProductEditionCreationSchema = z.object({
    ...commonShape,
    id: z.string(),
});
