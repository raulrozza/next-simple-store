import { useRouter } from 'next/router';

import { useToastProvider } from '@/shared/presentation/contexts';
import { useMutation } from '@/shared/presentation/hooks';

export default function useNewProductController() {
    const router = useRouter();
    const toast = useToastProvider();

    const { mutate } = useMutation(['products.create'], {
        onSuccess: () => router.back(),
        onError: error => toast.error(error.message),
    });

    return {
        createProduct: mutate,
    };
}
