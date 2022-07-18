import { render } from '@testing-library/react';

import { ThemeProvider } from '@/shared/presentation/contexts';

import Card from './index';

describe('Card', () => {
    it('should render the card correctly', () => {
        const view = render(<Card />, {
            wrapper: ThemeProvider,
        });

        expect(view).toMatchSnapshot();
    });
});
