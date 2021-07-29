import { PermisoEntity } from './../domain/permiso.entity';
import { Vista } from './models/vista.model';
import { FuncionalidadRepository } from '../application/funcionalidad-repository';
import { getManager } from 'typeorm';

export class FuncionalidadOperation implements FuncionalidadRepository {
	async getFuncionalidades(): Promise<PermisoEntity[]> {
		const funcionalidadRepository = getManager().getRepository(Vista);

		const funcionalidad: PermisoEntity[] = await funcionalidadRepository.find();

		return funcionalidad;
	}

	async getFuncionalidadesPorModulo(
		idModulo: number
	): Promise<PermisoEntity[]> {
		const vistaRepository = getManager().getRepository(Vista);
		const funcionalidad: PermisoEntity[] = await vistaRepository
			.createQueryBuilder('vista')
			.leftJoin('vista.funcionalidad', 'funcionalidad')
			.where('funcionalidad.submodulo_id = :idModulo', { idModulo: idModulo })
			.andWhere('is_funcionalidad = true')
			.getMany();
		return funcionalidad;
	}
}
