import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Formik } from 'formik';

import { ThemeProvider } from '@/shared/presentation/contexts';

import Input from './index';

describe('Input', () => {
    it('should render the input correctly', () => {
        const view = render(
            <Formik
                initialValues={{
                    input: '',
                }}
                onSubmit={jest.fn()}
            >
                <Input name="input" placeholder="My input" />
            </Formik>,
            {
                wrapper: ThemeProvider,
            },
        );

        expect(screen.getByPlaceholderText('My input')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('My input')).toHaveValue('');
        expect(view).toMatchSnapshot();
    });

    describe('Value handling', () => {
        it('should init the input with the initial field value', () => {
            const view = render(
                <Formik
                    initialValues={{ input: 'my value' }}
                    onSubmit={jest.fn()}
                >
                    <Input name="input" />
                </Formik>,
                { wrapper: ThemeProvider },
            );

            expect(screen.getByDisplayValue(/my value/)).toHaveValue(
                'my value',
            );
            expect(view).toMatchSnapshot();
        });

        it('should change the field value when typing the input', async () => {
            render(
                <Formik
                    initialValues={{ input: 'my value' }}
                    onSubmit={jest.fn()}
                >
                    <Input name="input" />
                </Formik>,
                { wrapper: ThemeProvider },
            );

            const input = screen.getByDisplayValue(/my value/);
            await userEvent.type(input, 'new value');

            expect(screen.getByDisplayValue(/new value/)).toBeDefined();
        });

        xit('should adapt the field value to mask if was passed', async () => {
            render(
                <Formik
                    initialValues={{ input: '12345678910' }}
                    onSubmit={jest.fn()}
                >
                    <Input name="input" mask="cpf" />
                </Formik>,
                { wrapper: ThemeProvider },
            );

            expect(screen.getByDisplayValue('123.456.789-10')).toBeDefined();
        });
    });

    describe('Error handling', () => {
        it('should show the error message if the input has errors and has been touched', async () => {
            const user = userEvent.setup();

            render(
                <Formik
                    initialValues={{
                        input: '',
                    }}
                    validate={() => ({ input: 'My error' })}
                    onSubmit={jest.fn()}
                    validateOnChange
                >
                    <Input name="input" placeholder="My input" />
                </Formik>,
                {
                    wrapper: ThemeProvider,
                },
            );

            expect(screen.queryByText('My error')).not.toBeInTheDocument();

            await user.type(
                screen.getByPlaceholderText('My input'),
                'new value',
            );
            act(() => {
                screen.getByPlaceholderText('My input').blur(); // Deselect to trigger touch
            });

            expect(await screen.findByText('My error')).toBeInTheDocument();
        });

        it('should not display the error message if the input was not touched', async () => {
            render(
                <Formik
                    initialValues={{ input: 'my value' }}
                    validate={() => ({ input: 'my error' })}
                    onSubmit={jest.fn()}
                    validateOnChange
                >
                    <Input name="input" placeholder="My input" />
                </Formik>,
                { wrapper: ThemeProvider },
            );

            await userEvent.type(
                screen.getByPlaceholderText('My input'),
                'invalid text',
            );

            expect(screen.queryByText(/my error/)).toBeNull();
        });
    });
});
