import { useCallback, useEffect, useMemo, useState } from 'react';

import { ICustomer } from '@/shared/domain/entities/Customer';
import makeGetCustomers from '@/shared/domain/useCases/factories/makeGetCustomers';

export default function useCustomersController() {
    const [customers, setCustomers] = useState<ICustomer[]>([]);

    const getUseCase = useMemo(() => makeGetCustomers(), []);

    const getCustomers = useCallback(
        async (params: { query?: string } = {}) => {
            const customers = await getUseCase.execute(params);
            setCustomers(customers);
        },
        [getUseCase],
    );

    useEffect(() => {
        getCustomers();
    }, [getCustomers]);

    return { customers, getCustomers };
}
