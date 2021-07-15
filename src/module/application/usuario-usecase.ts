import { UserEntity } from '../domain/user.entity';
import { Repository } from './usuario-repository';

export class UseCase {
	constructor(private operation: Repository) {}

	async select(userEntity: UserEntity): Promise<UserEntity[]> {
		const result = await this.operation.getUsuarios(userEntity);
		return result;
	}

	async selectUsuario(userEntity: UserEntity): Promise<UserEntity> {
		const result = await this.operation.getUsuario(userEntity);
		return result;
	}

	async insert(userEntity: UserEntity): Promise<UserEntity> {
		const result = await this.operation.insert(userEntity);
		return result;
	}

	async update(id: number, userEntity: UserEntity): Promise<UserEntity[]> {
		const result = await this.operation.update(id, userEntity);
		return result;
	}

	async delete(id: string): Promise<UserEntity[]> {
		const result = await this.operation.delete(id);
		return result;
	}
}
