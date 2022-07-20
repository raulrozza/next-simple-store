import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ThemeProvider } from '@/shared/presentation/contexts';

import CartListItem from './index';

const mockEditQuantity = jest.fn();
const mockRemove = jest.fn();

jest.mock('@/shared/presentation/contexts/CartProvider', () => ({
    useCartEntryManager: jest.fn(() => ({
        editQuantity: mockEditQuantity,
        remove: mockRemove,
    })),
}));

describe('CartListItem', () => {
    it('should render correctly', () => {
        const view = render(
            <CartListItem
                product={{
                    id: 'id',
                    name: 'name',
                    description: 'description',
                    price: 10,
                    slug: 'slug',
                }}
                quantity={4}
            />,
            {
                wrapper: ThemeProvider,
            },
        );

        expect(screen.getByText('name')).toBeInTheDocument();
        expect(screen.getByTestId('cartListItem-input')).toBeInTheDocument();
        expect(screen.getByText('$40.00')).toBeInTheDocument();
        expect(view).toMatchSnapshot();
    });

    it('should call editQuantity function when changing the input', async () => {
        const user = userEvent.setup();

        const product = {
            id: 'id',
            name: 'name',
            description: 'description',
            price: 10,
            slug: 'slug',
        };

        render(<CartListItem product={product} quantity={3} />, {
            wrapper: ThemeProvider,
        });

        await user.type(screen.getByTestId('cartListItem-input'), '5'); // Adds five to the already present 3

        expect(mockEditQuantity).toHaveBeenCalledWith(35);
    });

    it('should call the remove function when clicking the button', async () => {
        const user = userEvent.setup();

        const product = {
            id: 'id',
            name: 'name',
            description: 'description',
            price: 10,
            slug: 'slug',
        };

        render(<CartListItem product={product} quantity={3} />, {
            wrapper: ThemeProvider,
        });

        await user.click(screen.getByRole('button'));

        expect(mockRemove).toHaveBeenCalled();
    });
});
