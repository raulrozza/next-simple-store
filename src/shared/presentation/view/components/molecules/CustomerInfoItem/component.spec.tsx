import { render, screen } from '@testing-library/react';

import { ThemeProvider } from '@/shared/presentation/contexts';

import CustomerInfoItem from './index';

describe('CustomerInfoItem', () => {
    it('should render the component correctly, displaying its elements', () => {
        const view = render(
            <CustomerInfoItem
                customer={{
                    id: 'dshf9sdghsd',
                    name: 'Customer 1',
                    address: 'Address 1 of the initial customer named 1',
                    creditLimit: 100,
                    installmentLimit: 8,
                }}
            />,
            {
                wrapper: ThemeProvider,
            },
        );

        expect(screen.getByText('Customer 1')).toBeInTheDocument();
        expect(
            screen.getByText('Address 1 of the initial customer named 1'),
        ).toBeInTheDocument();
        expect(screen.getByText('Installment limit:')).toBeInTheDocument();
        expect(screen.getByText('8')).toBeInTheDocument();
        expect(screen.getByText('Credit limit:')).toBeInTheDocument();
        expect(screen.getByText('$100.00')).toBeInTheDocument();
        expect(view).toMatchSnapshot();
    });
});
