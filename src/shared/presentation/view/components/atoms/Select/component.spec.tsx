import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Formik } from 'formik';

import { ThemeProvider } from '@/shared/presentation/contexts';

import Select from './index';

describe('Select', () => {
    it('should render the select correctly with all the options', () => {
        const view = render(
            <Formik
                initialValues={{
                    select: '',
                }}
                onSubmit={jest.fn()}
            >
                <Select
                    name="select"
                    placeholder="My select"
                    options={[
                        { value: 'opt1', label: 'option 1' },
                        { value: 'opt2', label: 'option 2' },
                    ]}
                    data-testid="select-input"
                />
            </Formik>,
            {
                wrapper: ThemeProvider,
            },
        );

        expect(screen.getByTestId('select-input')).toBeInTheDocument();
        expect(screen.getByText('My select')).toBeInTheDocument();
        expect(screen.getByText('option 1')).toBeInTheDocument();
        expect(screen.getByText('option 2')).toBeInTheDocument();
        expect(view).toMatchSnapshot();
    });

    describe('Value handling', () => {
        it('should init the select with the initial field value', () => {
            const view = render(
                <Formik initialValues={{ select: 'opt2' }} onSubmit={jest.fn()}>
                    <Select
                        name="select"
                        options={[
                            { value: 'opt1', label: 'option 1' },
                            { value: 'opt2', label: 'option 2' },
                        ]}
                        data-testid="select-input"
                    />
                </Formik>,
                { wrapper: ThemeProvider },
            );

            expect(screen.getByTestId('select-input')).toHaveValue('opt2');
            expect(view).toMatchSnapshot();
        });

        it('should change the field value when changing the selection', async () => {
            const user = userEvent.setup();

            render(
                <Formik initialValues={{ select: 'opt1' }} onSubmit={jest.fn()}>
                    <Select
                        name="select"
                        options={[
                            { value: 'opt1', label: 'option 1' },
                            { value: 'opt2', label: 'option 2' },
                        ]}
                        data-testid="select-input"
                    />
                </Formik>,
                { wrapper: ThemeProvider },
            );

            const select = screen.getByTestId('select-input');
            expect(select).toHaveValue('opt1');

            await user.selectOptions(select, 'opt2');

            expect(select).toHaveValue('opt2');
        });
    });

    describe('Error handling', () => {
        it('should show the error message if the select has errors and has been touched', async () => {
            const user = userEvent.setup();

            render(
                <Formik
                    initialValues={{
                        select: '',
                    }}
                    validate={() => ({ select: 'My error' })}
                    onSubmit={jest.fn()}
                    validateOnChange
                >
                    <Select
                        name="select"
                        placeholder="My select"
                        options={[
                            {
                                value: 'new value',
                                label: 'great new value',
                            },
                        ]}
                        data-testid="select-input"
                    />
                </Formik>,
                {
                    wrapper: ThemeProvider,
                },
            );

            expect(screen.queryByText('My error')).not.toBeInTheDocument();

            await user.selectOptions(
                screen.getByTestId('select-input'),
                'new value',
            );
            act(() => {
                screen.getByTestId('select-input').blur(); // Deselect to trigger touch
            });

            expect(await screen.findByText('My error')).toBeInTheDocument();
        });

        it('should not display the error message if the select was not touched', async () => {
            const user = userEvent.setup();

            render(
                <Formik
                    initialValues={{ select: 'my value' }}
                    validate={() => ({ select: 'my error' })}
                    onSubmit={jest.fn()}
                    validateOnChange
                >
                    <Select
                        name="select"
                        placeholder="My select"
                        options={[
                            {
                                value: 'new value',
                                label: 'great new value',
                            },
                        ]}
                        data-testid="select-input"
                    />
                </Formik>,
                { wrapper: ThemeProvider },
            );

            expect(screen.queryByText('My error')).not.toBeInTheDocument();

            await user.selectOptions(
                screen.getByTestId('select-input'),
                'new value',
            );

            expect(screen.queryByText(/my error/)).toBeNull();
        });
    });
});
