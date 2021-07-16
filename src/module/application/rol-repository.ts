import { RolEntity } from './../domain/rol.entity';

export interface RolRepository {
	getRoles(rolEntity: RolEntity): Promise<RolEntity[]>;
}
