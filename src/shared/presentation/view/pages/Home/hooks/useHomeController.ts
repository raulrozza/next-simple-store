import { useEffect, useRef, useState } from 'react';

import { IProduct } from '@/shared/domain/entities/Product';
import { useToastProvider } from '@/shared/presentation/contexts';
import { useQuery } from '@/shared/presentation/hooks';

export default function useHomeController() {
    const { data, error } = useQuery(['products.getAll', { query: undefined }]);
    const previousError = useRef<string | null>(null);

    const [products, setProducts] = useState<IProduct[]>([]);

    const toast = useToastProvider();

    useEffect(() => {
        if (data) setProducts(data);
    }, [data]);

    useEffect(() => {
        if (!error) return;

        if (error.message === previousError.current) return;

        toast.error(error.message);
        previousError.current = error.message;
    }, [error, toast]);

    return { products };
}
