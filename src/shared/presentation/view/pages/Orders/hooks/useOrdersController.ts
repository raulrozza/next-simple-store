import { useRef, useState } from 'react';

import { IOrder } from '@/shared/domain/entities/Order';
import { useToastProvider } from '@/shared/presentation/contexts';
import { useQuery } from '@/shared/presentation/hooks';

export default function useOrdersController() {
    const [orders, setOrders] = useState<IOrder[]>([]);
    const previousError = useRef<string | null>(null);

    const toast = useToastProvider();

    useQuery(['orders.getAll'], {
        onSuccess: setOrders,
        onError: error => {
            if (error.message === previousError.current) return;

            toast.error(error.message);
            previousError.current = error.message;
        },
    });

    return { orders };
}
