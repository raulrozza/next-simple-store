import { useCallback, useEffect, useMemo, useState } from 'react';

import { IProduct } from '@/shared/domain/entities/Product';
import makeGetProducts from '@/shared/domain/useCases/factories/makeGetProducts';

export default function useProductsController() {
    const [products, setProducts] = useState<IProduct[]>([]);

    const getUseCase = useMemo(() => makeGetProducts(), []);

    const getProducts = useCallback(
        async (params: { query?: string } = {}) => {
            const products = await getUseCase.execute(params);
            setProducts(products);
        },
        [getUseCase],
    );

    useEffect(() => {
        getProducts();
    }, [getProducts]);

    return { getProducts, products };
}
