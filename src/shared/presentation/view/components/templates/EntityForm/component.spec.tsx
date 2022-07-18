import { render, screen } from '@testing-library/react';
import { Formik } from 'formik';

import { ThemeProvider } from '@/shared/presentation/contexts';

import EntityForm from './index';

describe('EntityForm', () => {
    it('should render the component correctly, displaying the title and the form', () => {
        const view = render(
            <Formik initialValues={{}} onSubmit={jest.fn()}>
                <EntityForm
                    title="Form"
                    fields={[]}
                    button={{ text: 'Button' }}
                />
            </Formik>,
            {
                wrapper: ThemeProvider,
            },
        );

        expect(screen.getByText('Form')).toBeInTheDocument();
        expect(screen.getByText('Button')).toBeInTheDocument();
        expect(view).toMatchSnapshot();
    });
});
