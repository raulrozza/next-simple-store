import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ThemeProvider } from '@/shared/presentation/contexts';

import Menu from './index';

describe('Menu', () => {
    it('should render the component correctly, displaying all the options', () => {
        const view = render(<Menu activeItem="/customers" />, {
            wrapper: ThemeProvider,
        });

        expect(screen.getAllByRole('navigation')).toHaveLength(1); // Drawer closed
        expect(screen.getAllByText('Home')).toHaveLength(2);
        expect(screen.getAllByText('Products')).toHaveLength(2);
        expect(screen.getAllByText('Customers')).toHaveLength(2);
        expect(screen.getAllByText('Orders')).toHaveLength(2);
        expect(view).toMatchSnapshot();
    });

    it('should expand the drawer when clicking the button', async () => {
        const user = userEvent.setup();

        render(<Menu activeItem="/customers" />, {
            wrapper: ThemeProvider,
        });

        await user.click(await screen.getByRole('button'));
        expect(screen.getAllByRole('navigation')).toHaveLength(2); // Drawer opened
    });
});
