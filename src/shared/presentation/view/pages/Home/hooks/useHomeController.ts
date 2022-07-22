import { useEffect, useMemo, useState } from 'react';

import { IProduct } from '@/shared/domain/entities/Product';
import makeGetProducts from '@/shared/domain/useCases/factories/makeGetProducts';
import { useToastProvider } from '@/shared/presentation/contexts';

export default function useHomeController() {
    const [products, setProducts] = useState<IProduct[]>([]);

    const getUseCase = useMemo(() => makeGetProducts(), []);
    const toast = useToastProvider();

    useEffect(() => {
        getUseCase
            .execute()
            .then(products => {
                setProducts(products);
            })
            .catch(error => {
                toast.error(error.message);
            });
    }, [getUseCase, toast]);

    return { products };
}
