import { useRef, useState } from 'react';

import { IProduct } from '@/shared/domain/entities/Product';
import { useToastProvider } from '@/shared/presentation/contexts';
import { useQuery } from '@/shared/presentation/hooks';

export default function useHomeController() {
    const previousError = useRef<string | null>(null);
    const [products, setProducts] = useState<IProduct[]>([]);

    const toast = useToastProvider();

    useQuery(['products.getAll', { query: undefined }], {
        onSuccess: setProducts,
        onError: error => {
            if (error.message === previousError.current) return;

            toast.error(error.message);
            previousError.current = error.message;
        },
    });

    return { products };
}
