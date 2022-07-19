import faker from 'faker';

import { ICreateCustomerDTO } from '@/shared/domain/dtos/CreateCustomerDTO';
import { FakeCustomersRepository } from '@/shared/domain/repositories/fakes/FakeCustomersRepository';

import GetSingleCustomer from './GetSingleCustomer';

const FakeCustomerDTO = (): ICreateCustomerDTO => ({
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    address: faker.address.streetAddress(),
    creditLimit: faker.datatype.number(),
    installmentLimit: faker.datatype.number(),
});

describe('CreateCustomer', () => {
    it('should return the existent customer', async () => {
        const repository = new FakeCustomersRepository();
        const getSingleCustomerUseCase = new GetSingleCustomer(repository);

        const customer = await repository.create(FakeCustomerDTO());

        const result = await getSingleCustomerUseCase.execute(customer.id);

        expect(result).toEqual(customer);
    });

    it('should return undefined if the customer cannot be found', async () => {
        const repository = new FakeCustomersRepository();
        const getSingleCustomerUseCase = new GetSingleCustomer(repository);

        const result = await getSingleCustomerUseCase.execute(
            'non-existent-id',
        );

        expect(result).toBeUndefined();
    });

    it('should throw if an error occurs', async () => {
        const repository = new FakeCustomersRepository();
        const getSingleCustomerUseCase = new GetSingleCustomer(repository);
        repository.getById = jest.fn(() => {
            throw new Error('An error occurred');
        });

        expect(getSingleCustomerUseCase.execute('id')).rejects.toThrow(
            'An error occurred',
        );
    });
});
