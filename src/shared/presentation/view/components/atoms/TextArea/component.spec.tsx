import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Formik } from 'formik';

import { ThemeProvider } from '@/shared/presentation/contexts';

import TextArea from './index';

describe('TextArea', () => {
    it('should render the textarea correctly', () => {
        const view = render(
            <Formik
                initialValues={{
                    textarea: '',
                }}
                onSubmit={jest.fn()}
            >
                <TextArea name="textarea" placeholder="My textarea" />
            </Formik>,
            {
                wrapper: ThemeProvider,
            },
        );

        expect(screen.getByPlaceholderText('My textarea')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('My textarea')).toHaveValue('');
        expect(view).toMatchSnapshot();
    });

    describe('Value handling', () => {
        it('should init the textarea with the initial field value', () => {
            const view = render(
                <Formik
                    initialValues={{ textarea: 'my value' }}
                    onSubmit={jest.fn()}
                >
                    <TextArea name="textarea" />
                </Formik>,
                { wrapper: ThemeProvider },
            );

            expect(screen.getByDisplayValue(/my value/)).toHaveValue(
                'my value',
            );
            expect(view).toMatchSnapshot();
        });

        it('should change the field value when typing the textarea', async () => {
            render(
                <Formik
                    initialValues={{ textarea: 'my value' }}
                    onSubmit={jest.fn()}
                >
                    <TextArea name="textarea" />
                </Formik>,
                { wrapper: ThemeProvider },
            );

            const textarea = screen.getByDisplayValue(/my value/);
            await userEvent.type(textarea, 'new value');

            expect(screen.getByDisplayValue(/new value/)).toBeDefined();
        });
    });

    describe('Error handling', () => {
        it('should show the error message if the textarea has errors and has been touched', async () => {
            const user = userEvent.setup();

            render(
                <Formik
                    initialValues={{
                        textarea: '',
                    }}
                    validate={() => ({ textarea: 'My error' })}
                    onSubmit={jest.fn()}
                    validateOnChange
                >
                    <TextArea name="textarea" placeholder="My textarea" />
                </Formik>,
                {
                    wrapper: ThemeProvider,
                },
            );

            expect(screen.queryByText('My error')).not.toBeInTheDocument();

            await user.type(
                screen.getByPlaceholderText('My textarea'),
                'new value',
            );
            act(() => {
                screen.getByPlaceholderText('My textarea').blur(); // Deselect to trigger touch
            });

            expect(await screen.findByText('My error')).toBeInTheDocument();
        });

        it('should not display the error message if the textarea was not touched', async () => {
            render(
                <Formik
                    initialValues={{ textarea: 'my value' }}
                    validate={() => ({ textarea: 'my error' })}
                    onSubmit={jest.fn()}
                    validateOnChange
                >
                    <TextArea name="textarea" placeholder="My textarea" />
                </Formik>,
                { wrapper: ThemeProvider },
            );

            await userEvent.type(
                screen.getByPlaceholderText('My textarea'),
                'invalid text',
            );

            expect(screen.queryByText(/my error/)).toBeNull();
        });
    });
});
