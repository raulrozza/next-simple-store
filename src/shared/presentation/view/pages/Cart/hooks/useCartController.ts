import { useCallback, useEffect, useMemo, useState } from 'react';

import { useRouter } from 'next/router';

import { ICreateOrderDTO } from '@/shared/domain/dtos/CreateOrderDTO';
import { ICustomer } from '@/shared/domain/entities/Customer';
import makeCreateOrder from '@/shared/domain/useCases/factories/makeCreateOrder';
import makeGetCustomers from '@/shared/domain/useCases/factories/makeGetCustomers';
import {
    useCartManager,
    useToastProvider,
} from '@/shared/presentation/contexts';

export default function useCartController() {
    const [customers, setCustomers] = useState<ICustomer[]>([]);

    const getUseCase = useMemo(() => makeGetCustomers(), []);
    const createOrderUseCase = useMemo(() => makeCreateOrder(), []);

    const cart = useCartManager();
    const router = useRouter();
    const toast = useToastProvider();

    useEffect(() => {
        getUseCase
            .execute()
            .then(customers => {
                setCustomers(customers);
            })
            .catch(error => {
                toast.error(error.message);
            });
    }, [getUseCase, toast]);

    const createOrder = useCallback(
        async (params: ICreateOrderDTO) => {
            try {
                await createOrderUseCase.execute(params);

                cart.clear();
                router.replace('/');
            } catch (error: any) {
                toast.error(error.message);
            }
        },
        [cart, createOrderUseCase, router, toast],
    );

    return { createOrder, customers };
}
