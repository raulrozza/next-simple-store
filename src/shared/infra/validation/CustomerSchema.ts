import * as z from 'zod';

const commonSchema = {
    name: z.string(),
    address: z.string(),
    creditLimit: z.number().min(0, 'Credit limit must be greater than 0'),
    installmentLimit: z
        .number()
        .min(0, 'Maximum installments must be greater than 0'),
};

export const CustomerCreationSchema = z.object(commonSchema);

export const CustomerEditionSchema = z.object({
    ...commonSchema,
    id: z.string(),
});
