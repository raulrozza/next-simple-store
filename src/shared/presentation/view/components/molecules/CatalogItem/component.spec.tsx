import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ThemeProvider } from '@/shared/presentation/contexts';

import CatalogItem from './index';

describe('CatalogItem', () => {
    it('should render correctly', () => {
        const view = render(
            <CatalogItem
                product={{
                    id: 'id',
                    name: 'name',
                    description: 'description',
                    imgAlt: 'imgAlt',
                    price: 10,
                    slug: 'slug',
                }}
                onAddToCart={jest.fn()}
            />,
            {
                wrapper: ThemeProvider,
            },
        );

        expect(screen.getByText('name')).toBeInTheDocument();
        expect(screen.getByText('$10.00')).toBeInTheDocument();
        expect(screen.getByLabelText('Quantity')).toBeInTheDocument();
        expect(screen.getByText('Add to cart')).toBeInTheDocument();
        expect(screen.getByAltText('imgAlt')).toBeInTheDocument();
        expect(view).toMatchSnapshot();
    });

    it('should call the add to cart with the correct params when the button is clicked', async () => {
        const user = userEvent.setup();

        const onAddToCart = jest.fn();
        const product = {
            id: 'id',
            name: 'name',
            description: 'description',
            price: 10,
            slug: 'slug',
            imgAlt: 'imgAlt',
        };

        render(<CatalogItem product={product} onAddToCart={onAddToCart} />, {
            wrapper: ThemeProvider,
        });

        await userEvent.type(screen.getByLabelText('Quantity'), '{Backspace}2');
        await user.click(screen.getByText('Add to cart'));

        expect(onAddToCart).toHaveBeenCalledWith({
            product,
            quantity: 2,
        });
    });

    it('should not call the callback if the number is out of range', async () => {
        const user = userEvent.setup();

        const onAddToCart = jest.fn();

        render(
            <CatalogItem
                product={{
                    id: 'id',
                    name: 'name',
                    description: 'description',
                    price: 10,
                    slug: 'slug',
                    imgAlt: 'imgAlt',
                }}
                onAddToCart={onAddToCart}
            />,
            {
                wrapper: ThemeProvider,
            },
        );

        await userEvent.type(
            screen.getByLabelText('Quantity'),
            '{Backspace}-2',
        );
        await user.click(screen.getByText('Add to cart'));

        expect(onAddToCart).not.toHaveBeenCalled();
    });

    it('should not call the callback if the value is not a number', async () => {
        const user = userEvent.setup();

        const onAddToCart = jest.fn();

        render(
            <CatalogItem
                product={{
                    id: 'id',
                    name: 'name',
                    description: 'description',
                    price: 10,
                    slug: 'slug',
                    imgAlt: 'imgAlt',
                }}
                onAddToCart={onAddToCart}
            />,
            {
                wrapper: ThemeProvider,
            },
        );

        await userEvent.type(
            screen.getByLabelText('Quantity'),
            'of course this is not a number',
        );
        await user.click(screen.getByText('Add to cart'));

        expect(onAddToCart).not.toHaveBeenCalled();
    });
});
