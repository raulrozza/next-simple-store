import { render, screen } from '@testing-library/react';

import { ThemeProvider } from '@/shared/presentation/contexts';

import CartItemsList from './index';

describe('CartItemsList', () => {
    it('should render the component correctly, displaying all sub components', () => {
        const view = render(
            <CartItemsList
                items={[
                    {
                        product: {
                            id: '4328941',
                            description: 'Product description',
                            name: 'Product name',
                            price: 45,
                            slug: 'product-slug',
                        },
                        quantity: 2,
                    },
                ]}
                emptyText="Empty text"
                footer={{
                    bottomLabels: ['first label', 'second label'],
                    button: {
                        text: 'Button',
                        onClick: jest.fn(),
                    },
                }}
            />,
            {
                wrapper: ThemeProvider,
            },
        );

        expect(screen.queryByText('Empty text')).not.toBeInTheDocument();
        expect(screen.getByText('Product name')).toBeInTheDocument();
        expect(screen.getByText('first label')).toBeInTheDocument();
        expect(screen.getByText('Button')).toBeInTheDocument();
        expect(view).toMatchSnapshot();
    });

    it('should display only the empty text if there are no items', () => {
        const view = render(
            <CartItemsList
                items={[]}
                emptyText="Empty text"
                footer={{
                    bottomLabels: ['first label', 'second label'],
                    button: {
                        text: 'Button',
                        onClick: jest.fn(),
                    },
                }}
            />,
            {
                wrapper: ThemeProvider,
            },
        );

        expect(screen.getByText('Empty text')).toBeInTheDocument();
        expect(screen.queryByText('first label')).not.toBeInTheDocument();
        expect(screen.queryByText('Button')).not.toBeInTheDocument();
        expect(view).toMatchSnapshot();
    });
});
