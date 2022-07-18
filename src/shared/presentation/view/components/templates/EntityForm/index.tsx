import { ComponentPropsWithoutRef, FC } from 'react';

import { Spacing } from '@/shared/presentation/view/components/atoms';
import { Form } from '@/shared/presentation/view/components/molecules';

import { Container, Content } from './styles';

interface EntityFormProps {
    title: string;
    fields: ComponentPropsWithoutRef<typeof Form>['fields'];
    button: ComponentPropsWithoutRef<typeof Form>['button'];
}

const EntityForm: FC<EntityFormProps> = ({ title, fields, button }) => (
    <Container>
        <Content as="main">
            <h1>{title}</h1>

            <Spacing size={4} />

            <Form fields={fields} button={button} />
        </Content>
    </Container>
);

export default EntityForm;
