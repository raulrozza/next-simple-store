import { render, screen } from '@testing-library/react';
import { Formik } from 'formik';

import { ThemeProvider } from '@/shared/presentation/contexts';

import FieldFactory from './index';

describe('FieldFactory', () => {
    it('should render the components correctly with all the possible types', () => {
        const view = render(
            <Formik initialValues={{}} onSubmit={jest.fn()}>
                <>
                    <FieldFactory
                        type="textarea"
                        placeholder="Large text"
                        name="textarea"
                    />
                    <FieldFactory type="text" name="text" placeholder="Text" />
                    <FieldFactory
                        type="select"
                        name="select"
                        placeholder="Select"
                        options={[]}
                    />
                </>
            </Formik>,
            { wrapper: ThemeProvider },
        );

        expect(screen.getByPlaceholderText('Large text')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Text')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Select')).toBeInTheDocument();
        expect(view).toMatchSnapshot();
    });

    it('should throw when trying to instance an invalid field type', async () => {
        expect(() =>
            render(
                <Formik initialValues={{}} onSubmit={jest.fn()}>
                    <FieldFactory
                        type={'invalid-type' as any}
                        {...({} as any)}
                    />
                </Formik>,
                { wrapper: ThemeProvider },
            ),
        ).toThrow('Field type invalid-type is not supported');
    });
});
