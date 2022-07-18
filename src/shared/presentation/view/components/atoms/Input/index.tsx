import { FC } from 'react';

import { useField } from 'formik';

import { IInput } from '@/shared/presentation/entities/Field';

import { ErrorContainer, StyledInput } from './styles';

const Input: FC<IInput> = ({ name, ...props }) => {
    const [field, meta] = useField(name);

    const hasErrors = Boolean(meta.touched && meta.error);

    return (
        <div>
            <StyledInput {...props} {...field} hasErrors={hasErrors} />

            {hasErrors && <ErrorContainer>{meta.error}</ErrorContainer>}
        </div>
    );
};

export default Input;
