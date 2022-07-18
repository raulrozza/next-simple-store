import { FC, Fragment } from 'react';

import { Form as FormikForm } from 'formik';

import { IField } from '@/shared/presentation/entities/Field';
import {
    Button,
    FieldFactory,
    Spacing,
} from '@/shared/presentation/view/components/atoms';

interface FormProps {
    fields: IField[];
    button: {
        text: string;
    };
}

const Form: FC<FormProps> = ({ fields, button }) => (
    <FormikForm>
        {fields.map(field => (
            <Fragment key={field.name}>
                <FieldFactory {...field} />

                <Spacing size={2} />
            </Fragment>
        ))}

        <Button type="submit" variant="secondary">
            {button.text}
        </Button>
    </FormikForm>
);

export default Form;
