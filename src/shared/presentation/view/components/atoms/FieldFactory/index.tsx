import { FC, memo } from 'react';

import { IField } from '@/shared/presentation/entities/Field';
import Input from '@/shared/presentation/view/components/atoms/Input';
import Select from '@/shared/presentation/view/components/atoms/Select';
import TextArea from '@/shared/presentation/view/components/atoms/TextArea';

const Component = {
    Input: Input as FC<Omit<IField, 'type'>>,
    TextArea: TextArea as FC<Omit<IField, 'type'>>,
    Select: Select as FC<Omit<IField, 'type'>>,
};

const FieldFactory: FC<IField> = ({ type, ...props }) => {
    if (type === 'text') return <Component.Input {...props} />;
    if (type === 'textarea') return <Component.TextArea {...props} />;
    if (type === 'select') return <Component.Select {...props} />;

    throw new Error(`Field type ${type} is not supported`);
};

export default memo(FieldFactory);
