import { FC } from 'react';

import { useField } from 'formik';

import { ITextArea } from '@/shared/presentation/entities/Field';

import { ErrorContainer, StyledTextArea } from './styles';

const TextArea: FC<ITextArea> = ({ name, ...props }) => {
    const [field, meta] = useField(name);

    const hasErrors = Boolean(meta.touched && meta.error);

    return (
        <div>
            <StyledTextArea {...props} {...field} hasErrors={hasErrors} />

            {hasErrors && <ErrorContainer>{meta.error}</ErrorContainer>}
        </div>
    );
};

export default TextArea;
