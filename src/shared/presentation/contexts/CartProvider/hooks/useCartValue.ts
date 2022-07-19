import { useRecoilValue } from 'recoil';

import { cartAtom } from '../atoms/cartAtom';

export default function useCartValue() {
    return useRecoilValue(cartAtom);
}
