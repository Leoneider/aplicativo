import { UserEntity } from '../domain/user.entity';

export interface Repository {
	getUsuario(userEntity: UserEntity): Promise<UserEntity>;
	getUsuarios(userEntity: UserEntity): Promise<UserEntity[]>;
	insert(userEntity: UserEntity): Promise<UserEntity>;
	update(id: number, orderEntity: Partial<UserEntity>): Promise<any>;
	delete(id: string): Promise<any>;
}
