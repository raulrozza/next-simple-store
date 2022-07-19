import { render, screen } from '@testing-library/react';

import { ThemeProvider } from '@/shared/presentation/contexts';

import EntityManagerList from './index';

describe('EntityManagerList', () => {
    it('should render the component correctly, displaying all its elements and the item list', () => {
        const view = render(
            <EntityManagerList
                addButton={{
                    href: '/add',
                    text: 'Add',
                }}
                emptyText="There are no items yet."
                items={[
                    {
                        id: 'dshf9sdghsd',
                        slogan: 'Slogan 1',
                    },
                    {
                        id: 'dshf9gfgfdgdhsd',
                        slogan: 'Slogan 2',
                    },
                ]}
                renderItem={({ item }) => <div>{item.slogan}</div>}
                title="Title"
            />,
            {
                wrapper: ThemeProvider,
            },
        );

        expect(screen.getByText('Title')).toBeInTheDocument();
        expect(screen.getByText('Add')).toBeInTheDocument();
        expect(
            screen.queryByText('There are no items yet.'),
        ).not.toBeInTheDocument();
        expect(screen.getByText('Slogan 1')).toBeInTheDocument();
        expect(screen.getByText('Slogan 2')).toBeInTheDocument();
        expect(view).toMatchSnapshot();
    });

    it('should display the empty text when there are no items', () => {
        const view = render(
            <EntityManagerList
                addButton={{
                    href: '/add',
                    text: 'Add',
                }}
                emptyText="There are no items yet."
                items={[]}
                renderItem={() => <div>Item</div>}
                title="Title"
            />,
            {
                wrapper: ThemeProvider,
            },
        );

        expect(screen.getByText('There are no items yet.')).toBeInTheDocument();
        expect(view).toMatchSnapshot();
    });
});
