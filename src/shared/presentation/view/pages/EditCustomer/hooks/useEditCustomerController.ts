import { useRef } from 'react';

import { useRouter } from 'next/router';

import { useToastProvider } from '@/shared/presentation/contexts';
import { useMutation, useQuery } from '@/shared/presentation/hooks';

type FormParams = {
    name: string;
    address: string;
    creditLimit: string;
    installmentLimit: string;
};

export default function useEditCustomerController() {
    const router = useRouter();
    const toast = useToastProvider();

    const previousError = useRef<string | null>(null);
    const { data: customer } = useQuery(
        ['customers.getOne', { id: String(router.query.id) }],
        {
            onSuccess: data => {
                if (!data) router.back();
            },
            onError: error => {
                if (error.message === previousError.current) return;

                toast.error(error.message);
                previousError.current = error.message;
            },
        },
    );
    const { mutate } = useMutation(['customers.update'], {
        onSuccess: () => router.back(),
        onError: error => toast.error(error.message),
    });

    return {
        customer,
        updateCustomer: (params: FormParams) =>
            mutate({
                id: String(router.query.id),
                name: params.name,
                address: params.address,
                installmentLimit: Number(params.installmentLimit),
                creditLimit: Number(params.creditLimit),
            }),
    };
}
