import { useRef } from 'react';

import { useRouter } from 'next/router';

import { useToastProvider } from '@/shared/presentation/contexts';
import { useMutation } from '@/shared/presentation/hooks';

type FormParams = {
    name: string;
    address: string;
    creditLimit: string;
    installmentLimit: string;
};

export default function useNewCustomerController() {
    const router = useRouter();
    const toast = useToastProvider();

    const previousError = useRef<string | null>(null);
    const { mutate } = useMutation(['customers.create'], {
        onSuccess: () => router.back(),
        onError: error => {
            if (error.message === previousError.current) return;

            toast.error(error.message);
            previousError.current = error.message;
        },
    });

    return {
        createCustomer: (params: FormParams) =>
            mutate({
                name: params.name,
                address: params.address,
                creditLimit: Number(params.creditLimit),
                installmentLimit: Number(params.installmentLimit),
            }),
    };
}
