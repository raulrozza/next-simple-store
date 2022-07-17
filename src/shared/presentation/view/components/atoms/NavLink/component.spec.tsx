import { render, screen } from '@testing-library/react';

import { ThemeProvider } from '@/shared/presentation/contexts';

import NavLink from './index';

describe('NavLink', () => {
    it('should render the component correctly displaying the correct icon and text', () => {
        render(
            <NavLink href="/" icon="home">
                Home
            </NavLink>,
            {
                wrapper: ThemeProvider,
            },
        );

        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByLabelText('home icon')).toBeInTheDocument();
        expect(screen).toMatchSnapshot();
    });
});
