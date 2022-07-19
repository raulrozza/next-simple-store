import { useEffect, useMemo, useState } from 'react';

import { ICustomer } from '@/shared/domain/entities/Customer';
import makeGetCustomers from '@/shared/domain/useCases/factories/makeGetCustomers';

export default function useCustomersController() {
    const [customers, setCustomers] = useState<ICustomer[]>([]);

    const getUseCase = useMemo(() => makeGetCustomers(), []);

    useEffect(() => {
        getUseCase.execute().then(customers => {
            setCustomers(customers);
        });
    }, [getUseCase]);

    return { customers };
}
