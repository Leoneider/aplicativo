import { RolEntity } from './../domain/rol.entity';
import { RolRepository } from './rol-repository';

export class RolUseCase {
	constructor(private rolOperation: RolRepository) {}

	async select(rolEntity: RolEntity): Promise<RolEntity[]> {
		const result = await this.rolOperation.getRoles(rolEntity);
		return result;
	}
}
