import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ThemeProvider } from '@/shared/presentation/contexts';

import Cart from './index';

jest.mock('@/shared/presentation/contexts/CartProvider', () => ({
    useCartMetaValue: jest.fn(() => ({
        quantity: 5,
        total: 46.5,
    })),
}));

describe('Cart', () => {
    it('should render the component showing the correct quantity and with the content hidden', () => {
        const view = render(<Cart />, {
            wrapper: ThemeProvider,
        });

        expect(screen.getByText('5')).toBeInTheDocument();
        expect(screen.queryByText('See my cart')).not.toBeInTheDocument();
        expect(view).toMatchSnapshot();
    });

    it('should show the content when the trigger is clicked', async () => {
        const user = userEvent.setup();

        render(<Cart />, {
            wrapper: ThemeProvider,
        });

        await user.click(screen.getByText('5'));

        expect(
            screen.getByText('You currently have 5 products in your cart.'),
        ).toBeInTheDocument();
        expect(screen.getByText('Total:')).toBeInTheDocument();
        expect(screen.getByText('$46.50')).toBeInTheDocument();
        expect(screen.getByText('See my cart')).toBeInTheDocument();
    });
});
