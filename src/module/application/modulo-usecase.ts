import { ModuloEntity } from './../domain/modulo.entity';
import { ModuloRepository } from './modulo-repository';

export class ModuloUseCase {
	constructor(private moduloOperation: ModuloRepository) {}

	async select(moduloEntity: ModuloEntity): Promise<ModuloEntity[]> {
		const result = await this.moduloOperation.getModulos(moduloEntity);
		return result;
	}
}
