import { useRecoilValue } from 'recoil';

import { cartAtom } from '../atoms/cartAtom';

export default function useCartValue() {
    const cart = useRecoilValue(cartAtom);

    return Object.values(cart);
}
