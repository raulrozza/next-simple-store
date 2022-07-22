import { useRef } from 'react';

import { useRouter } from 'next/router';

import { useToastProvider } from '@/shared/presentation/contexts';
import { useMutation } from '@/shared/presentation/hooks';

export default function useNewProductController() {
    const router = useRouter();
    const toast = useToastProvider();

    const previousError = useRef<string | null>(null);
    const { mutate } = useMutation(['products.create'], {
        onSuccess: () => router.back(),
        onError: error => {
            if (error.message === previousError.current) return;

            toast.error(error.message);
            previousError.current = error.message;
        },
    });

    return {
        createProduct: mutate,
    };
}
