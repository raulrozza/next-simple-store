import { useCallback, useEffect, useMemo, useState } from 'react';

import { IProduct } from '@/shared/domain/entities/Product';
import makeGetProducts from '@/shared/domain/useCases/factories/makeGetProducts';
import { useToastProvider } from '@/shared/presentation/contexts';

export default function useProductsController() {
    const [products, setProducts] = useState<IProduct[]>([]);

    const getUseCase = useMemo(() => makeGetProducts(), []);

    const toast = useToastProvider();

    const getProducts = useCallback(
        async (params: { query?: string } = {}) => {
            try {
                const products = await getUseCase.execute(params);
                setProducts(products);
            } catch (error: any) {
                toast.error(error.message);
            }
        },
        [getUseCase, toast],
    );

    useEffect(() => {
        getProducts();
    }, [getProducts]);

    return { getProducts, products };
}
