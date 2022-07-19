import { useCallback, useEffect, useMemo, useState } from 'react';

import { useRouter } from 'next/router';

import { ICustomer } from '@/shared/domain/entities/Customer';
import makeGetSingleCustomer from '@/shared/domain/useCases/factories/makeGetSingleCustomer';
import makeUpdateCustomer from '@/shared/domain/useCases/factories/makeUpdateCustomer';

type FormParams = {
    name: string;
    address: string;
    creditLimit: string;
    installmentLimit: string;
};

export default function useEditCustomerController() {
    const [customer, setCustomer] = useState<ICustomer | undefined>(undefined);
    const router = useRouter();

    const getUseCase = useMemo(() => makeGetSingleCustomer(), []);
    const updateUseCase = useMemo(() => makeUpdateCustomer(), []);

    useEffect(() => {
        getUseCase.execute(String(router.query.id)).then(customer => {
            if (!customer) return router.back();
            setCustomer(customer);
        });
    }, [getUseCase, router]);

    const updateCustomer = useCallback(
        async (params: FormParams) => {
            await updateUseCase.execute({
                id: String(router.query.id),
                name: params.name,
                address: params.address,
                installmentLimit: Number(params.installmentLimit),
                creditLimit: Number(params.creditLimit),
            });

            router.back();
        },
        [updateUseCase, router],
    );

    return { customer, updateCustomer };
}
