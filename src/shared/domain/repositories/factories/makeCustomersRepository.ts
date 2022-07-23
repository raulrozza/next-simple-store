import { ICustomersRepository } from '@/shared/domain/repositories/ICustomersRepository';
import { PrismaCustomersRepository } from '@/shared/infra/database/repositories/PrismaCustomersRepository';

let instance: ICustomersRepository | null = null;

export default function makeCustomersRepository(): ICustomersRepository {
    if (!instance) {
        instance = new PrismaCustomersRepository();
    }

    return instance;
}
