import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ThemeProvider } from '@/shared/presentation/contexts';

import Drawer from './index';

describe('Drawer', () => {
    it('should render the component hiding the content', () => {
        const view = render(
            <Drawer open={false} onClose={jest.fn()}>
                Content
            </Drawer>,
            {
                wrapper: ThemeProvider,
            },
        );

        expect(screen.queryByRole('navigation')).toBeNull();
        expect(screen.getByTestId('drawer-Overlay')).toHaveStyle({
            display: 'none',
        });
        expect(view).toMatchSnapshot();
    });

    it('should render the component showing the content if the open prop is true', () => {
        const view = render(
            <Drawer open={true} onClose={jest.fn()}>
                Content
            </Drawer>,
            {
                wrapper: ThemeProvider,
            },
        );

        expect(screen.getByRole('navigation')).toHaveStyle({
            visibility: 'visible',
        });
        expect(screen.getByTestId('drawer-Overlay')).toHaveStyle({
            display: 'block',
        });
        expect(view).toMatchSnapshot();
    });

    it('should show call the onClose callback when the overlay is clicked', async () => {
        const onClose = jest.fn();
        const user = userEvent.setup();

        render(
            <Drawer open={true} onClose={onClose}>
                Content
            </Drawer>,
            {
                wrapper: ThemeProvider,
            },
        );

        await user.click(screen.getByTestId('drawer-Overlay'));

        expect(onClose).toHaveBeenCalled();
    });
});
