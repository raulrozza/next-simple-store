import { FC, Fragment } from 'react';

import { IField } from '@/shared/presentation/entities/Field';
import {
    Button,
    FieldFactory,
    Spacing,
} from '@/shared/presentation/view/components/atoms';

import { StyledForm } from './styles';

interface FormProps {
    fields: IField[];
    button: {
        text: string;
    };
}

const Form: FC<FormProps> = ({ fields, button }) => (
    <StyledForm>
        {fields.map(field => (
            <Fragment key={field.name}>
                <FieldFactory {...field} />

                <Spacing size={2} />
            </Fragment>
        ))}

        <Button type="submit" variant="secondary">
            {button.text}
        </Button>
    </StyledForm>
);

export default Form;
