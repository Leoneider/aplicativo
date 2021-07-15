import { Permiso } from './permiso.model';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UsuarioRol } from './usuario-rol.model';
// import { Funcionalidad } from './Funcionalidad';

@Entity({ name: 'roles' })
export class Rol {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	nombre: string;

	@OneToMany(() => UsuarioRol, usuarioRol => usuarioRol.usuario)
	usuarioRol: UsuarioRol[];

	@OneToMany(() => Permiso, permiso => permiso.vista)
	permiso: Permiso[];
}
