import { PermisoEntity } from './../domain/permiso.entity';
import { FuncionalidadRepository } from './funcionalidad-repository';

export class FuncionalidadUseCase {
	constructor(private funcionalidadOperation: FuncionalidadRepository) {}

	async select(funcionalidadEntity: PermisoEntity): Promise<PermisoEntity[]> {
		const result = await this.funcionalidadOperation.getFuncionalidades(
			funcionalidadEntity
		);
		return result;
	}

	async getFuncionalidadesPorModulo(
		idModulo: number
	): Promise<PermisoEntity[]> {
		const result = await this.funcionalidadOperation.getFuncionalidadesPorModulo(
			idModulo
		);
		return result;
	}
}
