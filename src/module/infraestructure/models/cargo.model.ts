import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Usuario } from './user.model';

@Entity({ name: 'cargos' })
export class Cargo {
	@PrimaryColumn() id: number;
	@Column() nombre: string;
	@OneToMany(() => Usuario, usuario => usuario.cargo) usuario: Usuario[];
}
