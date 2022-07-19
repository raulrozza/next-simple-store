import { FC } from 'react';

import Link from 'next/link';

import { ICustomer } from '@/shared/domain/entities/Customer';
import { Button } from '@/shared/presentation/view/components/atoms';

import { Container } from './styles';

interface CustomerInfoItemProps {
    customer: ICustomer;
}

const CustomerInfoItem: FC<CustomerInfoItemProps> = ({ customer }) => (
    <Container>
        <h4>{customer.name}</h4>

        <p className="address">{customer.address}</p>

        <p className="installment">
            Installment limit: <strong>{customer.installmentLimit}</strong>
        </p>

        <p className="credit">
            Credit limit: <strong>${customer.creditLimit}</strong>
        </p>

        <Link href={`/customers/edit/${customer.id}`} passHref>
            <Button variant="secondary" icon="edit" asAnchor>
                Edit
            </Button>
        </Link>
    </Container>
);

export default CustomerInfoItem;
