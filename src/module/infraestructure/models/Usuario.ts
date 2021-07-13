import { Cargo } from './Cargo';
import { UsuarioRol } from './UsuarioRol';

import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum UsuarioEstado {
    ACTIVO = "ACTIVO",
    INACTIVO = "INACTIVO"
}

@Entity({ name: 'usuarios' })
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100
    })
    nombres: string;

    @Column()
    primer_apellido: string

    @Column()
    segundo_apellido: string

    @Column({
    unique: true
    })
    documento: string

    @Column()
    direccion: string

    @Column()
    email: string

    @Column()
    telefono: string

    @Column({nullable: true})
    path_imagen: string

    @Column({
        type: "enum",
        enum: UsuarioEstado,
        default: UsuarioEstado.ACTIVO
    })
    estado: string

    @Column()
    cargo_id: number;

    @Column({ type: "date" })
    has_doble_factor: Date;

    @CreateDateColumn({ name: 'created_at' }) 'created_at': Date;
    @UpdateDateColumn({ name: 'updated_at' }) 'updated_at': Date;

    @OneToMany(() => UsuarioRol, usuarioRol => usuarioRol.rol)
    usuarioRol: UsuarioRol[];

    @ManyToOne(() => Cargo, cargo => cargo.usuario)
    @JoinColumn({name: 'cargo_id', referencedColumnName: 'id'})
    cargo: Cargo;


}