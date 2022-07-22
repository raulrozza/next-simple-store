import { useRef, useState } from 'react';

import { IProduct } from '@/shared/domain/entities/Product';
import { useToastProvider } from '@/shared/presentation/contexts';
import { useQuery } from '@/shared/presentation/hooks';

export default function useProductsController() {
    const [query, setQuery] = useState<string | undefined>(undefined);
    const [products, setProducts] = useState<IProduct[]>([]);

    const toast = useToastProvider();

    useQuery(['products.getAll', { query }], {
        onSuccess: setProducts,
        onError: error => {
            if (error.message === previousError.current) return;

            toast.error(error.message);
            previousError.current = error.message;
        },
    });
    const previousError = useRef<string | null>(null);

    const getProducts = (params?: { query?: string }) =>
        setQuery(params?.query);

    return { getProducts, products };
}
