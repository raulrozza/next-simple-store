import { useCallback, useEffect, useMemo, useState } from 'react';

import { useRouter } from 'next/router';

import { ICreateOrderDTO } from '@/shared/domain/dtos/CreateOrderDTO';
import { ICustomer } from '@/shared/domain/entities/Customer';
import makeCreateOrder from '@/shared/domain/useCases/factories/makeCreateOrder';
import makeGetCustomers from '@/shared/domain/useCases/factories/makeGetCustomers';
import { useCartManager } from '@/shared/presentation/contexts';

export default function useCartController() {
    const [customers, setCustomers] = useState<ICustomer[]>([]);

    const getUseCase = useMemo(() => makeGetCustomers(), []);
    const createOrderUseCase = useMemo(() => makeCreateOrder(), []);

    const cart = useCartManager();
    const router = useRouter();

    useEffect(() => {
        getUseCase.execute().then(customers => {
            setCustomers(customers);
        });
    }, [getUseCase]);

    const createOrder = useCallback(
        async (params: ICreateOrderDTO) => {
            try {
                await createOrderUseCase.execute(params);

                cart.clear();
                router.replace('/');
            } catch (error: any) {
                alert(error.message);
            }
        },
        [cart, createOrderUseCase, router],
    );

    return { createOrder, customers };
}
