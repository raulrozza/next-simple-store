import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import theme from '@/config/theme';
import { ThemeProvider } from '@/shared/presentation/contexts';

import Button from './index';

describe('Button', () => {
    it('should render the component correctly', () => {
        const view = render(<Button>My button</Button>, {
            wrapper: ThemeProvider,
        });

        expect(screen.getByText('My button')).toBeInTheDocument();
        expect(screen.getByText('My button')).toBeInstanceOf(HTMLButtonElement);
        expect(screen.queryByTestId('button-Icon')).toBeNull();
        expect(view).toMatchSnapshot();
    });

    it('should dispath the on click function when clicking the button', async () => {
        const user = userEvent.setup();
        const onClick = jest.fn();

        render(
            <Button onClick={onClick} role="button">
                My button
            </Button>,
            {
                wrapper: ThemeProvider,
            },
        );

        await user.click(screen.getByRole('button'));

        expect(onClick).toHaveBeenCalled();
    });

    it('should render an icon if the icon prop is passed', () => {
        const view = render(<Button icon="plus">My button</Button>, {
            wrapper: ThemeProvider,
        });

        expect(screen.getByTestId('button-Icon')).toBeInTheDocument();
        expect(view).toMatchSnapshot();
    });

    it('should render the element as an anchor if the asAnchor prop is passed', () => {
        const view = render(<Button asAnchor>My button</Button>, {
            wrapper: ThemeProvider,
        });

        expect(screen.getByText('My button')).toBeInstanceOf(HTMLAnchorElement);
        expect(view).toMatchSnapshot();
    });

    describe('styles', () => {
        it('should render each button variant with the correct styles', () => {
            const view = render(
                <>
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button>Default</Button>
                </>,
                {
                    wrapper: ThemeProvider,
                },
            );

            expect(screen.getByText('Primary')).toHaveStyle({
                backgroundColor: theme.palette.primary['700'],
                color: theme.palette.gray['0'],
            });
            expect(screen.getByText('Secondary')).toHaveStyle({
                backgroundColor: theme.palette.secondary['700'],
                color: theme.palette.gray['0'],
            });
            expect(screen.getByText('Default')).toHaveStyle({
                backgroundColor: undefined,
                color: theme.palette.gray['900'],
            });
            expect(view).toMatchSnapshot();
        });
    });
});
