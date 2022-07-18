import { render, screen } from '@testing-library/react';

import { ThemeProvider } from '@/shared/presentation/contexts';

import NavMenu from './index';

describe('NavMenu', () => {
    it('should render the component correctly, displaying all the options', () => {
        render(
            <NavMenu
                items={[
                    {
                        href: '/',
                        icon: 'home',
                        text: 'Home',
                    },
                    {
                        href: '/products',
                        icon: 'list',
                        text: 'Products',
                    },
                    {
                        href: '/customers',
                        icon: 'people',
                        text: 'Customers',
                    },
                ]}
                activeItem="/customers"
            />,
            {
                wrapper: ThemeProvider,
            },
        );

        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Products')).toBeInTheDocument();
        expect(screen.getByText('Customers')).toBeInTheDocument();
        expect(screen).toMatchSnapshot();
    });
});
