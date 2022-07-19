import { useEffect, useMemo, useState } from 'react';

import { IProduct } from '@/shared/domain/entities/Product';
import makeGetProducts from '@/shared/domain/useCases/factories/makeGetProducts';

export default function useHomeController() {
    const [products, setProducts] = useState<IProduct[]>([]);

    const getUseCase = useMemo(() => makeGetProducts(), []);

    useEffect(() => {
        getUseCase.execute().then(products => {
            setProducts(products);
        });
    }, [getUseCase]);

    return { products };
}
