import { useCallback, useEffect, useMemo, useState } from 'react';

import { ICustomer } from '@/shared/domain/entities/Customer';
import makeGetCustomers from '@/shared/domain/useCases/factories/makeGetCustomers';
import { useToastProvider } from '@/shared/presentation/contexts';

export default function useCustomersController() {
    const [customers, setCustomers] = useState<ICustomer[]>([]);

    const getUseCase = useMemo(() => makeGetCustomers(), []);
    const toast = useToastProvider();

    const getCustomers = useCallback(
        async (params: { query?: string } = {}) => {
            try {
                const customers = await getUseCase.execute(params);
                setCustomers(customers);
            } catch (error: any) {
                toast.error(error.message);
            }
        },
        [getUseCase, toast],
    );

    useEffect(() => {
        getCustomers();
    }, [getCustomers]);

    return { customers, getCustomers };
}
