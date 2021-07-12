import { Funcionalidad } from './Funcionalidad';
import { Permiso } from './Permiso';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UsuarioRol } from "./UsuarioRol";

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