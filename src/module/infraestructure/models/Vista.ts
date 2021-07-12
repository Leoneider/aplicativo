import { Funcionalidad } from './Funcionalidad';
import { Permiso } from './Permiso';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'vistas' })
export class Vista {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    path: string

    @Column()
    is_funcionalidad: boolean

    @Column()
    icon: string

    @Column()
    funcionalidad_id: number;

    @OneToMany(() => Permiso, permiso => permiso.vista)
    permiso: Permiso[];

    @ManyToOne(() => Funcionalidad, funcionalidad => funcionalidad.vista)
    @JoinColumn({name: 'funcionalidad_id', referencedColumnName: 'id'})
    funcionalidad: Funcionalidad;

}