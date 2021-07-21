import { ModuloEntity } from './../domain/modulo.entity';

export interface ModuloRepository {
	getModulos(moduloEntity: ModuloEntity): Promise<ModuloEntity[]>;
}
