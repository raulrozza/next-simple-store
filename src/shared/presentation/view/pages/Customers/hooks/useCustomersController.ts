import { useRef, useState } from 'react';

import { ICustomer } from '@/shared/domain/entities/Customer';
import { useToastProvider } from '@/shared/presentation/contexts';
import { useQuery } from '@/shared/presentation/hooks';

export default function useCustomersController() {
    const previousError = useRef<string | null>(null);
    const [customers, setCustomers] = useState<ICustomer[]>([]);
    const [query, setQuery] = useState<string | undefined>(undefined);

    const toast = useToastProvider();

    useQuery(['customers.getAll', { query }], {
        onSuccess: setCustomers,
        onError: error => {
            if (error.message === previousError.current) return;

            toast.error(error.message);
            previousError.current = error.message;
        },
    });

    return {
        customers,
        getCustomers: (params: { query?: string }) => setQuery(params.query),
    };
}
