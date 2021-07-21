import { FuncionalidadEntity } from './../domain/funcionalidad.entity';
import { FuncionalidadRepository } from './funcionalidad-repository';

export class FuncionalidadUseCase {
	constructor(private funcionalidadOperation: FuncionalidadRepository) {}

	async select(
		funcionalidadEntity: FuncionalidadEntity
	): Promise<FuncionalidadEntity[]> {
		const result = await this.funcionalidadOperation.getFuncionalidades(
			funcionalidadEntity
		);
		return result;
	}
}
