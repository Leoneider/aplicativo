import { RolRepository } from '../application/rol-repository';
import { RolEntity } from '../domain/rol.entity';
import { getManager } from 'typeorm';
import { Rol } from './models/rol.model';

export class RolOperation implements RolRepository {
	async getRoles(): Promise<RolEntity[]> {
		const rolRepository = getManager().getRepository(Rol);
		const rol: RolEntity[] = await rolRepository.find();
		return rol;
	}
}
