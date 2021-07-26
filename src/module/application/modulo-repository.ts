import { SubmoduloEntity } from './../domain/submodulo.entity';
export interface ModuloRepository {
	getModulos(moduloEntity: SubmoduloEntity): Promise<SubmoduloEntity[]>;
}
