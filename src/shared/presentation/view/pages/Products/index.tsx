import { FC } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { Button } from '@/shared/presentation/view/components/atoms';
import { Menu } from '@/shared/presentation/view/components/organisms';

import { ButtonPanel } from './styles';

const Products: FC = () => {
    const { pathname } = useRouter();

    return (
        <section>
            <Menu activeItem={pathname} />

            <main>
                <ButtonPanel>
                    <Link href="/products/new" passHref>
                        <Button icon="plus" variant="primary" asAnchor>
                            Add Product
                        </Button>
                    </Link>
                </ButtonPanel>
            </main>
        </section>
    );
};

export default Products;
