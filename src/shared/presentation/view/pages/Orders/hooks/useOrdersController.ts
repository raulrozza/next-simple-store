import { useEffect, useMemo, useState } from 'react';

import { IOrder } from '@/shared/domain/entities/Order';
import makeGetOrders from '@/shared/domain/useCases/factories/makeGetOrders';
import { useToastProvider } from '@/shared/presentation/contexts';

export default function useOrdersController() {
    const [orders, setOrders] = useState<IOrder[]>([]);

    const getUseCase = useMemo(() => makeGetOrders(), []);
    const toast = useToastProvider();

    useEffect(() => {
        getUseCase
            .execute()
            .then(orders => {
                setOrders(orders);
            })
            .catch(error => {
                toast.error(error.message);
            });
    }, [getUseCase, toast]);

    return { orders };
}
