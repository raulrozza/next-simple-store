import { FC } from 'react';

import { Menu } from '@/shared/presentation/view/components/organisms';

// import { Container } from './styles';

const NewProduct: FC = () => {
    return (
        <section>
            <Menu activeItem="/products" />

            <main></main>
        </section>
    );
};

export default NewProduct;
