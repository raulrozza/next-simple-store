import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ThemeProvider } from '@/shared/presentation/contexts';

import CartFooter from './index';

describe('CartFooter', () => {
    it('should render correctly dispalying all the texts and the button', () => {
        const view = render(
            <CartFooter
                bottomLabels={['first label', 'second label']}
                button={{
                    text: 'Button',
                    onClick: jest.fn(),
                }}
            />,
            {
                wrapper: ThemeProvider,
            },
        );

        expect(screen.getByText('first label')).toBeInTheDocument();
        expect(screen.getByText('second label')).toBeInTheDocument();
        expect(screen.getByText('Button')).toBeInTheDocument();
        expect(view).toMatchSnapshot();
    });

    it('should call the onClick function when the button is clicked', async () => {
        const user = userEvent.setup();

        const onClick = jest.fn();

        render(
            <CartFooter
                bottomLabels={[]}
                button={{
                    text: 'Button',
                    onClick,
                }}
            />,
            {
                wrapper: ThemeProvider,
            },
        );

        await user.click(screen.getByText('Button'));

        expect(onClick).toHaveBeenCalled();
    });
});
