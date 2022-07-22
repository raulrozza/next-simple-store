import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ThemeProvider } from '@/shared/presentation/contexts';

import SearchInput from './index';

describe('SearchInput', () => {
    it('should render the input correctly', () => {
        const view = render(
            <SearchInput placeholder="My input" onSubmit={jest.fn()} />,
            {
                wrapper: ThemeProvider,
            },
        );

        expect(screen.getByPlaceholderText('My input')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('My input')).toHaveValue('');
        expect(view).toMatchSnapshot();
    });

    it('should change the field value when typing the input', async () => {
        render(<SearchInput placeholder="My input" onSubmit={jest.fn()} />, {
            wrapper: ThemeProvider,
        });

        const input = screen.getByPlaceholderText(/My input/);
        await userEvent.type(input, 'new value');

        expect(screen.getByPlaceholderText(/My input/)).toHaveValue(
            'new value',
        );
    });

    it('should call the on submit function when typing enter', async () => {
        const onSubmit = jest.fn();

        render(<SearchInput placeholder="My input" onSubmit={onSubmit} />, {
            wrapper: ThemeProvider,
        });

        const input = screen.getByPlaceholderText(/My input/);
        await userEvent.type(input, 'new value{Enter}');

        expect(onSubmit).toHaveBeenCalledWith('new value');
    });
});
