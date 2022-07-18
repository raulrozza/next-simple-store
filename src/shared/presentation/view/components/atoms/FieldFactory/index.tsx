import { FC, memo } from 'react';

import {
    IField,
    IInput,
    ITextArea,
} from '@/shared/presentation/entities/Field';
import Input from '@/shared/presentation/view/components/atoms/Input';
import TextArea from '@/shared/presentation/view/components/atoms/TextArea';

const Component = {
    Input: Input as FC<Omit<IInput, 'type'>>,
    TextArea: TextArea as FC<Omit<ITextArea, 'type'>>,
};

const FieldFactory: FC<IField> = ({ type, ...props }) => {
    if (type === 'text') return <Component.Input {...props} />;
    if (type === 'textarea') return <Component.TextArea {...props} />;

    throw new Error(`Field type ${type} is not supported`);
};

export default memo(FieldFactory);
