import { Vista } from './vista.model';
// import { Rol } from './rol.model';
import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Submodulo } from './submodulo.model';

@Entity({ name: 'funcionalidades' })
export class Funcionalidad {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	nombre: string;

	@Column()
	submodulo_id: number;

	@OneToMany(() => Vista, vista => vista.funcionalidad)
	vista: Vista[];

	@ManyToOne(() => Submodulo, submodulo => submodulo.funcionalidad)
	@JoinColumn({ name: 'submodulo_id', referencedColumnName: 'id' })
	submodulo: Submodulo;
}
