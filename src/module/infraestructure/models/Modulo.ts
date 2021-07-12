import { Submodulo } from './Submodulo';
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity({ name: 'modulos' })
export class Modulo {
    @PrimaryColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;

    @OneToMany(() => Submodulo, submodulo => submodulo.modulo)
    submodulo: Submodulo[];

}