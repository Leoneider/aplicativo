import {MigrationInterface, QueryRunner} from "typeorm";

export class InsertarCargos1624396403239 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO cargos(id, nombre)VALUES
                               (1, 'ejecutivo comercial'),
                               (2, 'técnico'),
                               (3, 'asesor línea agente'),
                               (4, 'jefe comercial'),
                               (5, 'técnico en campo'),
                               (6, 'personal almacen nivel 1'),
                               (7, 'supervisor general de logistica'),
                               (8, 'supervisor general agentes corresponsales'),
                               (9, 'supervisor general almacen'),
                               (10, 'supervisor general centro de reparaciones'),
                               (11, 'gerente servicios sst'),
                               (12, 'técnico lider de zona'),
                               (13, 'personal almacen nivel 2'),
                               (14, 'supervisor agentes correspónsales'),
                               (15, 'supervisor reparaciones agentes corresponsales'),
                               (16, 'staff'),
                               (17, 'administrador'),
                               (18, 'supervisor línea agente')`);                   
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}



