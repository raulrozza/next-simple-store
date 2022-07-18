import { FakeCustomersRepository } from '@/shared/domain/repositories/fakes/FakeCustomersRepository';
import { ICustomersRepository } from '@/shared/domain/repositories/ICustomersRepository';

let instance: ICustomersRepository | null = null;

export default function makeCustomersRepository(): ICustomersRepository {
    if (!instance) {
        instance = new FakeCustomersRepository();
    }

    return instance;
}
