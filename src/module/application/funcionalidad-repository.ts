import { PermisoEntity } from './../domain/permiso.entity';
export interface FuncionalidadRepository {
	getFuncionalidades(
		funcionalidadEntity: PermisoEntity
	): Promise<PermisoEntity[]>;

	getFuncionalidadesPorModulo(idModulo: number): Promise<PermisoEntity[]>;
}
