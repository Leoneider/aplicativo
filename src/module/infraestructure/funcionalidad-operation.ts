import { FuncionalidadRepository } from '../application/funcionalidad-repository';
import { FuncionalidadEntity } from '../domain/funcionalidad.entity';

import { getManager } from 'typeorm';
import { Funcionalidad } from './models/funcionalidad.model.';

export class FuncionalidadOperation implements FuncionalidadRepository {
	async getFuncionalidades(): Promise<FuncionalidadEntity[]> {
		const funcionalidadRepository = getManager().getRepository(Funcionalidad);

		const funcionalidad: FuncionalidadEntity[] = await funcionalidadRepository.find();

		return funcionalidad;
	}
}
