import { render, screen } from '@testing-library/react';

import { ThemeProvider } from '@/shared/presentation/contexts';

import CartHeader from './index';

jest.mock('@/shared/presentation/contexts/CartProvider', () => ({
    useCartMetaValue: jest.fn(() => ({
        quantity: 5,
        total: 46.5,
    })),
}));

describe('CartHeader', () => {
    it('should render correctly', () => {
        const view = render(<CartHeader title="Page" />, {
            wrapper: ThemeProvider,
        });

        expect(screen.getByText('Page')).toBeInTheDocument();
        expect(screen.getByText('5')).toBeInTheDocument();
        expect(view).toMatchSnapshot();
    });
});
