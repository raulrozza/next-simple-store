import faker from 'faker';

import { ICreateCustomerDTO } from '@/shared/domain/dtos/CreateCustomerDTO';
import { FakeCustomersRepository } from '@/shared/domain/repositories/fakes/FakeCustomersRepository';

import GetCustomers from './GetCustomers';

const FakeCustomerDTO = (): ICreateCustomerDTO => ({
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    address: faker.address.streetAddress(),
    creditLimit: faker.datatype.number(),
    installmentLimit: faker.datatype.number(),
});

describe('CreateCustomer', () => {
    it('should list all created customers', async () => {
        const repository = new FakeCustomersRepository();
        const getCustomersUseCase = new GetCustomers(repository);

        const customers = Array.from({ length: 3 }, () => FakeCustomerDTO());

        const createdCustomers = await Promise.all(
            customers.map(customer => repository.create(customer)),
        );

        const result = await getCustomersUseCase.execute();

        expect(result).toEqual(createdCustomers);
    });

    it('should return only the customers with the given name', async () => {
        const repository = new FakeCustomersRepository();
        const getCustomersUseCase = new GetCustomers(repository);

        const customers = Array.from({ length: 3 }, () => FakeCustomerDTO());

        const createdCustomers = await Promise.all(
            customers.map(customer => repository.create(customer)),
        );

        const result = await getCustomersUseCase.execute({
            name: createdCustomers[0].name,
        });

        expect(result).toEqual([createdCustomers[0]]);
    });

    it('should throw if an error occurs', async () => {
        const repository = new FakeCustomersRepository();
        const getCustomersUseCase = new GetCustomers(repository);
        repository.getAll = jest.fn(() => {
            throw new Error('An error occurred');
        });

        expect(getCustomersUseCase.execute()).rejects.toThrow(
            'An error occurred',
        );
    });
});
