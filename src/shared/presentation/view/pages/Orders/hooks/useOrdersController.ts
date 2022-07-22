import { useEffect, useMemo, useState } from 'react';

import { IOrder } from '@/shared/domain/entities/Order';
import makeGetOrders from '@/shared/domain/useCases/factories/makeGetOrders';

export default function useOrdersController() {
    const [orders, setOrders] = useState<IOrder[]>([]);

    const getUseCase = useMemo(() => makeGetOrders(), []);

    useEffect(() => {
        getUseCase.execute().then(orders => {
            setOrders(orders);
        });
    }, [getUseCase]);

    return { orders };
}
