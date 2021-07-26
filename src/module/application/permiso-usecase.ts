import { PermisoEntity } from './../domain/permiso.entity';
import { PermisoRepository } from './permiso-repository';

export class PermisoUseCase {
	// eslint-disable-next-line no-useless-constructor
	constructor(private permisoOperation: PermisoRepository) {}

	async getPermisosPorFuncionalidad(
		idPermiso: number
	): Promise<PermisoEntity[]> {
		const result = await this.permisoOperation.getPermisosPorFuncionalidad(
			idPermiso
		);
		return result;
	}
}
