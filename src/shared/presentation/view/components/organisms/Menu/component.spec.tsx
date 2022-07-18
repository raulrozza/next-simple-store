import { render, screen } from '@testing-library/react';

import { ThemeProvider } from '@/shared/presentation/contexts';

import Menu from './index';

describe('Menu', () => {
    it('should render the component correctly, displaying all the options', () => {
        render(<Menu activeItem="/customers" />, {
            wrapper: ThemeProvider,
        });

        expect(screen.getAllByText('Home')).toHaveLength(2);
        expect(screen.getAllByText('Products')).toHaveLength(2);
        expect(screen.getAllByText('Customers')).toHaveLength(2);
        expect(screen.getAllByText('Orders')).toHaveLength(2);
    });

    // TODO: Find a way to correctly assert this behavior
    it.todo('should expand the drawer when clicking the button');
});
