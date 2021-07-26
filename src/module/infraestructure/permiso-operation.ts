import { Vista } from './models/vista.model';
import { PermisoEntity } from './../domain/permiso.entity';
import { getManager, Not } from 'typeorm';
import { PermisoRepository } from '../application/permiso-repository';
export class PermisoOperation implements PermisoRepository {
	async getPermisosPorFuncionalidad(id: number): Promise<PermisoEntity[]> {
		const permisoRepository = getManager().getRepository(Vista);
		const permiso: PermisoEntity[] = await permisoRepository.find({
			where: { funcionalidad_id: id, is_funcionalidad: Not(true) },
		});
		return permiso;
	}
}
