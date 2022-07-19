import { useCallback, useMemo } from 'react';

import { useRouter } from 'next/router';

import makeCreateCustomer from '@/shared/domain/useCases/factories/makeCreateCustomer';

type FormParams = {
    name: string;
    address: string;
    creditLimit: string;
    installmentLimit: string;
};

export default function useNewCustomerController() {
    const createUseCase = useMemo(() => makeCreateCustomer(), []);

    const router = useRouter();

    const createCustomer = useCallback(
        async (params: FormParams) => {
            await createUseCase.execute({
                name: params.name,
                address: params.address,
                creditLimit: Number(params.creditLimit),
                installmentLimit: Number(params.installmentLimit),
            });

            router.back();
        },
        [createUseCase, router],
    );

    return { createCustomer };
}
