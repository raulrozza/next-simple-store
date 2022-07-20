import { FC } from 'react';

import { useField } from 'formik';

import { ISelect } from '@/shared/presentation/entities/Field';

import { ErrorContainer, StyledSelect } from './styles';

const Select: FC<Omit<ISelect, 'type'>> = ({
    name,
    options,
    placeholder,
    ...props
}) => {
    const [field, meta] = useField(name);

    const hasErrors = Boolean(meta.touched && meta.error);

    return (
        <div>
            <StyledSelect {...props} {...field} hasErrors={hasErrors}>
                {placeholder && <option value="">{placeholder}</option>}

                {options.map(({ value, label }) => (
                    <option key={value} value={value}>
                        {label}
                    </option>
                ))}
            </StyledSelect>

            {hasErrors && <ErrorContainer>{meta.error}</ErrorContainer>}
        </div>
    );
};

export default Select;
