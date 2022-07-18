import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ThemeProvider } from '@/shared/presentation/contexts';

import Menu from './index';

describe('Menu', () => {
    it('should render the component correctly, displaying all the options', () => {
        const view = render(<Menu activeItem="/customers" />, {
            wrapper: ThemeProvider,
        });

        expect(screen.getAllByText('Home')).toHaveLength(2);
        expect(screen.getAllByText('Products')).toHaveLength(2);
        expect(screen.getAllByText('Customers')).toHaveLength(2);
        expect(screen.getAllByText('Orders')).toHaveLength(2);
        expect(
            view.container.querySelector('nav[role="navigation"]'), // eslint-disable-line testing-library/no-container,testing-library/no-node-access
        ).toHaveStyle({
            visibility: 'hidden',
        });
    });

    // TODO: Find a way to correctly assert this behavior
    xit('should expand the drawer when clicking the button', async () => {
        const view = render(<Menu activeItem="/customers" />, {
            wrapper: ThemeProvider,
        });

        expect(
            view.container.querySelector('nav[role="navigation"]'), // eslint-disable-line testing-library/no-container,testing-library/no-node-access
        ).toHaveStyle({
            visibility: 'hidden',
        });

        await userEvent.click(screen.getByRole('button'));

        await waitFor(() => {
            expect(
                view.container.querySelector('nav[role="navigation"]'), // eslint-disable-line testing-library/no-container,testing-library/no-node-access
            ).toHaveStyle({
                visibility: 'visible',
            });
        });
    });
});
