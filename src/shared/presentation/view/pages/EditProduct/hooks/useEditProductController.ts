import { useCallback, useEffect, useMemo, useState } from 'react';

import { useRouter } from 'next/router';

import { IProduct } from '@/shared/domain/entities/Product';
import makeGetSingleProduct from '@/shared/domain/useCases/factories/makeGetSingleProduct';
import makeUpdateProduct from '@/shared/domain/useCases/factories/makeUpdateProduct';

type FormParams = {
    name: string;
    description: string;
    price: string;
    slug: string;
};

export default function useEditProductController() {
    const [product, setProduct] = useState<IProduct | undefined>(undefined);
    const router = useRouter();

    const getUseCase = useMemo(() => makeGetSingleProduct(), []);
    const updateUseCase = useMemo(() => makeUpdateProduct(), []);

    useEffect(() => {
        getUseCase.execute(String(router.query.id)).then(product => {
            if (!product) return router.back();
            setProduct(product);
        });
    }, [getUseCase, router]);

    const updateProduct = useCallback(
        async (params: FormParams) => {
            await updateUseCase.execute({
                id: String(router.query.id),
                name: params.name,
                description: params.description,
                price: Number(params.price),
                slug: params.slug,
            });

            router.back();
        },
        [updateUseCase, router],
    );

    return { product, updateProduct };
}
