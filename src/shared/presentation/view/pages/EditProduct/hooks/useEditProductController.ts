import { useCallback, useRef } from 'react';

import { useRouter } from 'next/router';

import { useToastProvider } from '@/shared/presentation/contexts';
import { useMutation, useQuery } from '@/shared/presentation/hooks';

type FormParams = {
    name: string;
    description: string;
    price: string;
    slug: string;
};

export default function useEditProductController() {
    const router = useRouter();
    const toast = useToastProvider();

    const previousError = useRef<string | null>(null);
    const { data: product } = useQuery(
        ['products.getOne', { id: String(router.query.id) }],
        {
            onError: error => {
                if (error.message === previousError.current) return;

                toast.error(error.message);
                previousError.current = error.message;
            },
        },
    );
    const { mutate } = useMutation(['products.update'], {
        onSuccess: () => router.back(),
        onError: error => {
            if (error.message === previousError.current) return;

            toast.error(error.message);
            previousError.current = error.message;
        },
    });

    const updateProduct = useCallback(
        async (params: FormParams) => {
            mutate({
                id: String(router.query.id),
                name: params.name,
                description: params.description,
                price: Number(params.price),
                slug: params.slug,
            });
        },
        [mutate, router.query.id],
    );

    return { product, updateProduct };
}
