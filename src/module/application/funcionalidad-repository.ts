import { FuncionalidadEntity } from './../domain/funcionalidad.entity';

export interface FuncionalidadRepository {
	getFuncionalidades(
		funcionalidadEntity: FuncionalidadEntity
	): Promise<FuncionalidadEntity[]>;
}
