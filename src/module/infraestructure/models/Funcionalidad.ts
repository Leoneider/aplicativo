import { Vista } from './Vista';
import { Rol } from './Rol';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Submodulo } from './Submodulo';

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
    @JoinColumn({name: 'submodulo_id', referencedColumnName: 'id'})
    submodulo: Submodulo;

}