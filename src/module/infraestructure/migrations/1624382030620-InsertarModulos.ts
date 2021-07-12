import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertarModulos1624382030620 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`INSERT INTO modulos (id, nombre, descripcion) VALUES 
                                 (1,'aplicativo', 'Gestion de los permisos a los usuario registrados'), 
                                 (2,'comercial', 'Creacion de comercios y cuadrantes'),
                                 (3,'incidencias', 'Creacion y gestion de incidencias'),
                                 (4,'inventario', 'Gestion de terminales, sim card y demas accesorioS de una terminal'),
                                 (5,'laboratorio', 'Gestion de bodegas y laboratorios')`);

		await queryRunner.query(`INSERT INTO submodulos (nombre, "path", is_modullo, icon, modulo_id) VALUES 
                                 ('aplicativo', 'aplicativo', true, '',1), 
                                 ('comercial', 'comercial', true,'',2),
                                 ('incidencias', 'incidencias', true,'',3),
                                 ('inventario', 'inventario', true,'',4),
                                 ('laboratorio', 'laboratorio', true,'',5)`);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {}
}
