import { Usuario } from './Usuario';
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Rol } from './Rol';

@Entity({ name: 'usuario_roles' })
export class UsuarioRol {
    @PrimaryColumn()
    usuario_id: string;

    @PrimaryColumn()
    rol_id: string;

    @ManyToOne(() => Usuario, usuario => usuario.usuarioRol)
    @JoinColumn({name: 'usuario_id', referencedColumnName: 'id'})
    usuario: Usuario;

    @ManyToOne(() => Rol, rol => rol.usuarioRol)
    @JoinColumn({name: 'rol_id', referencedColumnName: 'id'})
    rol: Rol;
}