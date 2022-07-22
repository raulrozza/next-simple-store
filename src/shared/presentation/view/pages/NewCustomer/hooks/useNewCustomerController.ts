import { useCallback, useMemo } from 'react';

import { useRouter } from 'next/router';

import makeCreateCustomer from '@/shared/domain/useCases/factories/makeCreateCustomer';
import { useToastProvider } from '@/shared/presentation/contexts';

type FormParams = {
    name: string;
    address: string;
    creditLimit: string;
    installmentLimit: string;
};

export default function useNewCustomerController() {
    const createUseCase = useMemo(() => makeCreateCustomer(), []);

    const router = useRouter();
    const toast = useToastProvider();

    const createCustomer = useCallback(
        async (params: FormParams) => {
            try {
                await createUseCase.execute({
                    name: params.name,
                    address: params.address,
                    creditLimit: Number(params.creditLimit),
                    installmentLimit: Number(params.installmentLimit),
                });

                router.back();
            } catch (error: any) {
                toast.error(error.message);
            }
        },
        [createUseCase, router, toast],
    );

    return { createCustomer };
}
