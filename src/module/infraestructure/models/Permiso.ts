import { Rol } from './Rol';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Vista } from './Vista';

@Entity({ name: 'permisos' })
export class Permiso {
    @PrimaryColumn()
    rol_id: number;

    @PrimaryColumn()
    vista_id: number;

    @ManyToOne(() => Rol, rol => rol.permiso)
    @JoinColumn({name: 'rol_id', referencedColumnName: 'id'})
    rol: Rol;

    @ManyToOne(() => Vista, vista => vista.permiso)
    @JoinColumn({name: 'vista_id', referencedColumnName: 'id'})
    vista: Vista;

}