import { useCallback, useMemo } from 'react';

import { useRouter } from 'next/router';

import makeCreateProduct from '@/shared/domain/useCases/factories/makeCreateProduct';
import { useToastProvider } from '@/shared/presentation/contexts';

type FormParams = {
    name: string;
    description: string;
    price: string;
    slug: string;
};

export default function useNewProductController() {
    const createUseCase = useMemo(() => makeCreateProduct(), []);

    const router = useRouter();
    const toast = useToastProvider();

    const createProduct = useCallback(
        async (params: FormParams) => {
            try {
                await createUseCase.execute({
                    name: params.name,
                    description: params.description,
                    price: Number(params.price),
                    slug: params.slug,
                });

                router.back();
            } catch (error: any) {
                toast.error(error.message);
            }
        },
        [createUseCase, router, toast],
    );

    return { createProduct };
}
