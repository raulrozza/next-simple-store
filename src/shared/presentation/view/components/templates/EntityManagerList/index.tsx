import {
    ComponentPropsWithoutRef,
    FC,
    PropsWithChildren,
    ReactElement,
} from 'react';

import Link from 'next/link';

import {
    Button,
    SearchInput,
    Spacing,
} from '@/shared/presentation/view/components/atoms';

import { ButtonPanel, Container, Content, List } from './styles';

type ButtonProps = ComponentPropsWithoutRef<typeof Button>;

interface EntityManagerListProps<T> {
    upperButtons?: Array<{
        href: string;
        text: string;
        icon?: ButtonProps['icon'];
        variant?: ButtonProps['variant'];
    }>;
    title: string;
    emptyText: string;
    items: T[];
    renderItem: FC<{ item: T }>;
    search?: {
        onSearch: (value: string) => void;
        placeholder: string;
    };
}

function EntityManagerList<T extends { id: string }>({
    upperButtons = [],
    title,
    items,
    emptyText,
    search,
    renderItem: RenderItem,
}: PropsWithChildren<EntityManagerListProps<T>>): ReactElement {
    return (
        <Container>
            <Content>
                <ButtonPanel>
                    {upperButtons.map(button => (
                        <Link key={button.href} href={button.href} passHref>
                            <Button
                                icon={button.icon}
                                variant={button.variant}
                                asAnchor
                            >
                                {button.text}
                            </Button>
                        </Link>
                    ))}
                </ButtonPanel>

                {search && (
                    <>
                        <Spacing size={2} />

                        <SearchInput
                            onSubmit={search.onSearch}
                            placeholder={search.placeholder}
                        />
                    </>
                )}

                <Spacing size={1} />

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
