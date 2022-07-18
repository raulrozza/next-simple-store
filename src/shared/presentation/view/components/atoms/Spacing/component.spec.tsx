import { render, screen } from '@testing-library/react';

import theme from '@/config/theme';
import { ThemeProvider } from '@/shared/presentation/contexts';

import Spacing from './index';

describe('Spacing', () => {
    it('should render the input with the correct spacing', () => {
        const view = render(<Spacing size={3} data-testid="spacing" />, {
            wrapper: ThemeProvider,
        });

        expect(screen.getByTestId('spacing')).toHaveStyle({
            marginTop: theme.layout.spacing(3),
        });
        expect(view).toMatchSnapshot();
    });
});
