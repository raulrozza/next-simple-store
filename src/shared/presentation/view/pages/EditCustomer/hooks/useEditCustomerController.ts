import { useCallback, useEffect, useMemo, useState } from 'react';

import { useRouter } from 'next/router';

import { ICustomer } from '@/shared/domain/entities/Customer';
import makeGetSingleCustomer from '@/shared/domain/useCases/factories/makeGetSingleCustomer';
import makeUpdateCustomer from '@/shared/domain/useCases/factories/makeUpdateCustomer';
import { useToastProvider } from '@/shared/presentation/contexts';

type FormParams = {
    name: string;
    address: string;
    creditLimit: string;
    installmentLimit: string;
};

export default function useEditCustomerController() {
    const [customer, setCustomer] = useState<ICustomer | undefined>(undefined);
    const router = useRouter();
    const toast = useToastProvider();

    const getUseCase = useMemo(() => makeGetSingleCustomer(), []);
    const updateUseCase = useMemo(() => makeUpdateCustomer(), []);

    useEffect(() => {
        getUseCase
            .execute(String(router.query.id))
            .then(customer => {
                if (!customer) return router.back();
                setCustomer(customer);
            })
            .catch(error => {
                toast.error(error.message);
            });
    }, [getUseCase, router, toast]);

    const updateCustomer = useCallback(
        async (params: FormParams) => {
            try {
                await updateUseCase.execute({
                    id: String(router.query.id),
                    name: params.name,
                    address: params.address,
                    installmentLimit: Number(params.installmentLimit),
                    creditLimit: Number(params.creditLimit),
                });

                router.back();
            } catch (error: any) {
                toast.error(error.message);
            }
        },
        [updateUseCase, router, toast],
    );

    return { customer, updateCustomer };
}
