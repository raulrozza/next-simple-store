import { FC, KeyboardEvent, useRef } from 'react';

import { StyledInput } from './styles';

interface SearchInputProps {
    onSubmit: (value: string) => void;
    placeholder: string;
}

const SearchInput: FC<SearchInputProps> = ({ onSubmit, placeholder }) => {
    const ref = useRef<HTMLInputElement>(null);

    const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
        if (!ref.current) return;

        if (event.key === 'Enter') onSubmit(ref.current.value);
    };

    return (
        <StyledInput
            ref={ref}
            onKeyUp={handleKeyUp}
            placeholder={placeholder}
        />
    );
};

export default SearchInput;
