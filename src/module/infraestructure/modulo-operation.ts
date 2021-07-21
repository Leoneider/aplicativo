import { ModuloRepository } from '../application/modulo-repository';
import { ModuloEntity } from '../domain/modulo.entity';

import { getManager } from 'typeorm';
import { Modulo } from './models/modulo.model';

export class ModuloOperation implements ModuloRepository {
	async getModulos(): Promise<ModuloEntity[]> {
		const moduloRepository = getManager().getRepository(Modulo);

		const modulo: ModuloEntity[] = await moduloRepository.find();

		return modulo;
	}
}
