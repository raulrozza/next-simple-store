import { render, screen } from '@testing-library/react';

import { ThemeProvider } from '@/shared/presentation/contexts';

import ProductInfoItem from './index';

describe('ProductInfoItem', () => {
    it('should render the component correctly, displaying its elements', () => {
        const view = render(
            <ProductInfoItem
                product={{
                    id: 'dshf9sdghsd',
                    name: 'Product 1',
                    description: 'Description 1 of the initial product named 1',
                    price: 100.99,
                    slug: 'product-1',
                }}
            />,
            {
                wrapper: ThemeProvider,
            },
        );

        expect(screen.getByText('Product 1')).toBeInTheDocument();
        expect(
            screen.getByText('Description 1 of the initial product named 1'),
        ).toBeInTheDocument();
        expect(screen.getByText('Slug:')).toBeInTheDocument();
        expect(screen.getByText('product-1')).toBeInTheDocument();
        expect(screen.getByText('Price: $100.99')).toBeInTheDocument();
        expect(view).toMatchSnapshot();
    });
});
