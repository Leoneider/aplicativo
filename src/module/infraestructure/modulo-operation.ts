import { Submodulo } from './models/submodulo.model';
import { ModuloRepository } from '../application/modulo-repository';

import { getManager } from 'typeorm';
import { SubmoduloEntity } from '../domain/submodulo.entity';

export class ModuloOperation implements ModuloRepository {
	async getModulos(): Promise<SubmoduloEntity[]> {
		const submoduloRepository = getManager().getRepository(Submodulo);
		const submodulo: SubmoduloEntity[] = await submoduloRepository.find({
			where: { is_modullo: true },
		});
		return submodulo;
	}
}
