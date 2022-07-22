import { render, screen } from '@testing-library/react';

import theme from '@/config/theme';
import { ThemeProvider } from '@/shared/presentation/contexts';

import OrderTotalDisplay from './index';

describe('OrderTotalDisplay', () => {
    it('should render the component displaying the text correctly, without the color style on total', () => {
        const view = render(
            <OrderTotalDisplay
                title="Total display"
                totalText="$10.00"
                isTotalValid={true}
            />,
            {
                wrapper: ThemeProvider,
            },
        );

        expect(screen.getByText('Total display')).toBeInTheDocument();
        expect(screen.getByText('$10.00')).toBeInTheDocument();
        expect(screen.getByText('$10.00')).not.toHaveStyle({
            color: theme.palette.error['500'],
        });
        expect(view).toMatchSnapshot();
    });

    it('should render the total error colored if the total is invalid', () => {
        const view = render(
            <OrderTotalDisplay
                title="Total display"
                totalText="$10.00"
                isTotalValid={false}
            />,
            {
                wrapper: ThemeProvider,
            },
        );

        expect(screen.getByText('$10.00')).toHaveStyle({
            color: theme.palette.error['500'],
        });
        expect(view).toMatchSnapshot();
    });
});
