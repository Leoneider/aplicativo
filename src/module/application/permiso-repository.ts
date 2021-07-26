import { PermisoEntity } from './../domain/permiso.entity';

export interface PermisoRepository {
	getPermisosPorFuncionalidad(idPermiso: number): Promise<PermisoEntity[]>;
}
