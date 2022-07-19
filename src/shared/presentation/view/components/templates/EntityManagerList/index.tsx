import { FC, PropsWithChildren, ReactElement } from 'react';

import Link from 'next/link';

import { Button, Spacing } from '@/shared/presentation/view/components/atoms';

import { ButtonPanel, Container, Content, List } from './styles';

interface EntityManagerListProps<T> {
    addButton: {
        href: string;
        text: string;
    };
    title: string;
    emptyText: string;
    items: T[];
    renderItem: FC<{ item: T }>;
}

function EntityManagerList<T extends { id: string }>({
    addButton,
    title,
    items,
    emptyText,
    renderItem: RenderItem,
}: PropsWithChildren<EntityManagerListProps<T>>): ReactElement {
    return (
        <Container>
            <Content>
                <ButtonPanel>
                    <Link href={addButton.href} passHref>
                        <Button icon="plus" variant="primary" asAnchor>
                            {addButton.text}
                        </Button>
                    </Link>
                </ButtonPanel>

                <Spacing size={2} />

                <h1>{title}</h1>

                <Spacing size={1} />

                {!items.length && <p>{emptyText}</p>}

                <List as="ul">
                    {items.map(item => (
                        <RenderItem key={item.id} item={item} />
                    ))}
                </List>
            </Content>
        </Container>
    );
}

export default EntityManagerList;
