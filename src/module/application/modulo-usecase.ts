import { SubmoduloEntity } from './../domain/submodulo.entity';
import { ModuloRepository } from './modulo-repository';

export class ModuloUseCase {
	constructor(private moduloOperation: ModuloRepository) {}

	async select(moduloEntity: SubmoduloEntity): Promise<SubmoduloEntity[]> {
		const result = await this.moduloOperation.getModulos(moduloEntity);
		return result;
	}
}
