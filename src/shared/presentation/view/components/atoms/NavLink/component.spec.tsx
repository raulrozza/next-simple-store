import { render, screen } from '@testing-library/react';

import theme from '@/config/theme';
import { ThemeProvider } from '@/shared/presentation/contexts';

import NavLink from './index';

describe('NavLink', () => {
    it('should render the component correctly displaying the correct icon and text', () => {
        const view = render(
            <NavLink href="/" icon="home" active={false}>
                Home
            </NavLink>,
            {
                wrapper: ThemeProvider,
            },
        );

        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByLabelText('home icon')).toBeInTheDocument();
        expect(view).toMatchSnapshot();
    });

    it('should render the a primary color and data selected active if the active prop is true', () => {
        const view = render(
            <NavLink href="/" icon="home" active={true}>
                Home
            </NavLink>,
            {
                wrapper: ThemeProvider,
            },
        );

        expect(screen.getByText('Home')).toHaveStyle({
            color: theme.palette.primary['900'],
        });
        expect(screen.getByText('Home')).toHaveAttribute(
            'aria-selected',
            'true',
        );
        expect(view).toMatchSnapshot();
    });
});
