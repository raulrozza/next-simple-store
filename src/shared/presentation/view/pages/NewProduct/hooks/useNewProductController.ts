import { useCallback, useMemo } from 'react';

import { useRouter } from 'next/router';

import makeCreateProduct from '@/shared/domain/useCases/factories/makeCreateProduct';

type FormParams = {
    name: string;
    description: string;
    price: string;
    slug: string;
};

export default function useNewProductController() {
    const createUseCase = useMemo(() => makeCreateProduct(), []);

    const router = useRouter();

    const createProduct = useCallback(
        async (params: FormParams) => {
            await createUseCase.execute({
                name: params.name,
                description: params.description,
                price: Number(params.price),
                slug: params.slug,
            });

            router.back();
        },
        [createUseCase, router],
    );

    return { createProduct };
}
