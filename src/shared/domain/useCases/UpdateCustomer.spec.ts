import faker from 'faker';

import { ICreateCustomerDTO } from '@/shared/domain/dtos/CreateCustomerDTO';
import { ICustomer } from '@/shared/domain/entities/Customer';
import { FakeCustomersRepository } from '@/shared/domain/repositories/fakes/FakeCustomersRepository';

import UpdateCustomer from './UpdateCustomer';

describe('UpdateCustomer', () => {
    it('should update a customer', async () => {
        const repository = new FakeCustomersRepository();
        const updateCustomerUseCase = new UpdateCustomer(repository);

        const originalCustomer: ICreateCustomerDTO = {
            name: `${faker.name.firstName()} ${faker.name.lastName()}`,
            address: faker.address.streetAddress(),
            creditLimit: faker.datatype.number(),
            installmentLimit: faker.datatype.number(),
        };
        const customer = await repository.create(originalCustomer);

        const result = await updateCustomerUseCase.execute({
            ...customer,
            name: 'Edited name',
        });

        expect(result).toEqual<ICustomer>({
            id: expect.any(String),
            name: 'Edited name',
            address: customer.address,
            creditLimit: customer.creditLimit,
            installmentLimit: customer.installmentLimit,
        });
    });

    it('should throw an error if the customer does not exist', async () => {
        const repository = new FakeCustomersRepository();
        const updateCustomerUseCase = new UpdateCustomer(repository);

        expect(
            updateCustomerUseCase.execute({
                id: faker.datatype.uuid(),
                name: `${faker.name.firstName()} ${faker.name.lastName()}`,
                address: faker.address.streetAddress(),
                creditLimit: faker.datatype.number(),
                installmentLimit: faker.datatype.number(),
            }),
        ).rejects.toThrow('Customer not found');
    });

    it('should throw if an error occurs', async () => {
        const repository = new FakeCustomersRepository();
        const updateCustomerUseCase = new UpdateCustomer(repository);
        repository.update = jest.fn(() => {
            throw new Error('An error occurred');
        });

        const customer = await repository.create({
            name: `${faker.name.firstName()} ${faker.name.lastName()}`,
            address: faker.address.streetAddress(),
            creditLimit: faker.datatype.number(),
            installmentLimit: faker.datatype.number(),
        });

        expect(updateCustomerUseCase.execute(customer)).rejects.toThrow(
            'An error occurred',
        );
    });
});
