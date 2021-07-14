import { Modulo } from './modulo.model';
import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Funcionalidad } from './funcionalidad.model.';

@Entity({ name: 'submodulos' })
export class Submodulo {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	nombre: string;

	@Column()
	path: string;

	@Column()
	is_modullo: boolean;

	@Column()
	icon: string;

	@Column()
	modulo_id: number;

	@OneToMany(() => Funcionalidad, funcionalidad => funcionalidad.submodulo)
	funcionalidad: Funcionalidad[];

	@ManyToOne(() => Modulo, modulo => modulo.submodulo)
	@JoinColumn({ name: 'modulo_id', referencedColumnName: 'id' })
	modulo: Modulo;
}
