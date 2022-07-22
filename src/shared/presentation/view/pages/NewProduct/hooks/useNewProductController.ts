import { useEffect, useRef } from 'react';

import { useRouter } from 'next/router';

import { useToastProvider } from '@/shared/presentation/contexts';
import { useMutation } from '@/shared/presentation/hooks';

export default function useNewProductController() {
    const router = useRouter();
    const toast = useToastProvider();

    const { mutate, error } = useMutation(['products.create'], {
        onSuccess: () => router.back(),
        onError: error => toast.error(error.message),
    });
    const previousError = useRef<string | null>(null);

    useEffect(() => {
        if (!error) return;

        if (error.message === previousError.current) return;

        toast.error(error.message);
        previousError.current = error.message;
    }, [error, toast]);

    return {
        createProduct: mutate,
    };
}
