import faker from 'faker';

import { ICreateCustomerDTO } from '@/shared/domain/dtos/CreateCustomerDTO';
import { ICustomer } from '@/shared/domain/entities/Customer';
import { FakeCustomersRepository } from '@/shared/domain/repositories/fakes/FakeCustomersRepository';

import CreateCustomer from './CreateCustomer';

describe('CreateCustomer', () => {
    it('should create a customer', async () => {
        const repository = new FakeCustomersRepository();
        const createCustomerUseCase = new CreateCustomer(repository);

        const customer: ICreateCustomerDTO = {
            name: `${faker.name.firstName()} ${faker.name.lastName()}`,
            address: faker.address.streetAddress(),
            creditLimit: faker.datatype.number(),
            installmentLimit: faker.datatype.number(),
        };
        const result = await createCustomerUseCase.execute(customer);

        expect(result).toEqual<ICustomer>({
            id: expect.any(String),
            name: customer.name,
            address: customer.address,
            creditLimit: customer.creditLimit,
            installmentLimit: customer.installmentLimit,
        });
    });

    it('should throw if an error occurs', async () => {
        const repository = new FakeCustomersRepository();
        const createCustomerUseCase = new CreateCustomer(repository);
        repository.create = jest.fn(() => {
            throw new Error('An error occurred');
        });

        const customer: ICreateCustomerDTO = {
            name: `${faker.name.firstName()} ${faker.name.lastName()}`,
            address: faker.address.streetAddress(),
            creditLimit: faker.datatype.number(),
            installmentLimit: faker.datatype.number(),
        };

        expect(createCustomerUseCase.execute(customer)).rejects.toThrow(
            'An error occurred',
        );
    });
});
