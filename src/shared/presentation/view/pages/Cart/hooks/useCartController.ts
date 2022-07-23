import { useRef, useState } from 'react';

import { useRouter } from 'next/router';

import { ICustomer } from '@/shared/domain/entities/Customer';
import {
    useCartManager,
    useToastProvider,
} from '@/shared/presentation/contexts';
import { useMutation, useQuery } from '@/shared/presentation/hooks';

export default function useCartController() {
    const previousError = useRef<string | null>(null);
    const [customers, setCustomers] = useState<ICustomer[]>([]);

    const cart = useCartManager();
    const router = useRouter();
    const toast = useToastProvider();

    useQuery(['customers.getAll', { query: undefined }], {
        onSuccess: setCustomers,
        onError: error => {
            if (error.message === previousError.current) return;

            toast.error(error.message);
            previousError.current = error.message;
        },
    });

    const { mutate } = useMutation(['orders.create'], {
        onSuccess: () => {
            cart.clear();
            router.replace('/');
        },
        onError: error => toast.error(error.message),
    });

    return { createOrder: mutate, customers };
}
