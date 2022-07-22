import { render, screen } from '@testing-library/react';

import { ICustomer } from '@/shared/domain/entities/Customer';
import { IOrder } from '@/shared/domain/entities/Order';
import { IProduct } from '@/shared/domain/entities/Product';
import { ThemeProvider } from '@/shared/presentation/contexts';

import OrderInfoItem from './index';

describe('OrderInfoItem', () => {
    it('should render the component displaying all the info', () => {
        const view = render(
            <OrderInfoItem
                order={
                    {
                        id: '1',
                        createdAt: new Date(),
                        customer: {
                            name: 'John Doe',
                        } as ICustomer,
                        products: [
                            {
                                product: {
                                    id: 'aushausa',
                                    name: 'Product 1',
                                    price: 10,
                                } as IProduct,
                                quantity: 2,
                            },
                        ],
                        discountedPrice: 20,
                    } as IOrder
                }
            />,
            {
                wrapper: ThemeProvider,
            },
        );

        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByText('Total: $20.00')).toBeInTheDocument();
        expect(screen.getByText('Products (1)')).toBeInTheDocument();
        expect(screen.getByText('x2 Product 1')).toBeInTheDocument();
        expect(screen.getByText('$10.00')).toBeInTheDocument();
        expect(view).toMatchSnapshot();
    });
});
