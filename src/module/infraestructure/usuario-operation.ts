import { Repository } from '../application/usuario-repository';
import { UserEntity } from '../domain/user.entity';

import { DeleteResult, getConnection, getManager, UpdateResult } from 'typeorm';
import { Usuario } from './models/user.model';

export class Operation implements Repository {
	async getUsuarios(): Promise<UserEntity[]> {
		const usuarioRepository = getManager().getRepository(Usuario);

		const user: UserEntity[] = await usuarioRepository
			.createQueryBuilder('user')
			.select()
			.getRawMany();

		return user;
	}

	async insert(userEntity: UserEntity): Promise<UserEntity> {
		const usuarioRepository = getConnection().getRepository(Usuario);
		const usuario = new Usuario();

		usuario.nombres = userEntity.nombres;
		usuario.primer_apellido = userEntity.primer_apellido;
		usuario.segundo_apellido = userEntity.segundo_apellido;
		usuario.documento = userEntity.documento;
		usuario.direccion = userEntity.direccion;
		usuario.email = userEntity.email;
		usuario.telefono = userEntity.telefono;
		usuario.cargo_id = userEntity.cargo_id;
		usuario.has_doble_factor = userEntity.has_doble_factor;

		const user: UserEntity = await usuarioRepository.save(usuario);
		return user;
	}

	async update(
		id: number,
		userEntity: Partial<UserEntity>
	): Promise<UpdateResult> {
		const usuarioRepository = getManager().getRepository(Usuario);
		const user: UpdateResult = await usuarioRepository.update(
			{ id: id },
			userEntity
		);
		return user;
	}

	async delete(id: string): Promise<DeleteResult> {
		const usuarioRepository = getConnection().getRepository(Usuario);
		return await usuarioRepository.delete(id);
	}
}
