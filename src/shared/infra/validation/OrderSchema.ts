import * as z from 'zod';

export const OrderSchema = z.object({
    customerId: z.string(),
    installments: z
        .number()
        .min(0, 'Maximum installments must be greater than 0'),
    products: z.array(
        z.object({
            productId: z.string(),
            quantity: z.number().min(1, 'Quantity must be greater than 0'),
        }),
    ),
});
