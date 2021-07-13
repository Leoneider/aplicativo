import { Repository } from '../application/UsuarioRepository';
import { UserEntity } from '../domain/user.entity';

import { DeleteResult, getConnection, getManager, UpdateResult } from "typeorm";
import { Usuario } from './models/Usuario';

Usuario
export class Operation implements Repository {

	async getUsuarios(): Promise<UserEntity[]> {
		let usuarioRepository = getManager().getRepository(Usuario);

		const user: UserEntity[] = await usuarioRepository
			.createQueryBuilder('user')
			.select()
			.getRawMany();

		return user;
	}

	async getUsuario(userEntity: Partial<UserEntity>): Promise<UserEntity> {
		let usuarioRepository = getManager().getRepository(Usuario);

		const user: UserEntity = await usuarioRepository.findOne({ where: userEntity })
		

		return user;
	}



	async insert(userEntity: UserEntity): Promise<UserEntity> {
		let usuarioRepository = getConnection().getRepository(Usuario);
		let usuario = new Usuario();

		usuario.nombres = userEntity.nombres;
		usuario.primer_apellido =userEntity.primer_apellido;
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

	async update(id: number, userEntity: Partial<UserEntity>): Promise<UpdateResult> {
		let usuarioRepository = getManager().getRepository(Usuario);
		const user: UpdateResult = await usuarioRepository.update({id: id},userEntity);
		return user;
	}

	async delete(id: string): Promise<DeleteResult> {
		let usuarioRepository = getConnection().getRepository(Usuario);
		return await usuarioRepository.delete(id);
	}
}
