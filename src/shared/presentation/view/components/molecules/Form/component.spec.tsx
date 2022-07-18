import { render, screen } from '@testing-library/react';
import { Formik } from 'formik';

import { ThemeProvider } from '@/shared/presentation/contexts';

import Form from './index';

describe('Form', () => {
    it('should render the Form correctly', () => {
        const view = render(
            <Formik
                initialValues={{
                    input: 'my input',
                }}
                onSubmit={jest.fn()}
            >
                <Form
                    fields={[
                        {
                            name: 'input',
                            type: 'text',
                            placeholder: 'my input',
                        },
                    ]}
                    button={{
                        text: 'Confirm',
                    }}
                />
            </Formik>,
            {
                wrapper: ThemeProvider,
            },
        );

        expect(screen.getByPlaceholderText('my input')).toBeInTheDocument();
        expect(screen.getByText('Confirm')).toBeInTheDocument();
        expect(view).toMatchSnapshot();
    });
});
