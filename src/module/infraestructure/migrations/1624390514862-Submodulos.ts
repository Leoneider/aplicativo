import { MigrationInterface, QueryRunner } from 'typeorm';

export class Submodulos1624390514862 implements MigrationInterface {
	async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`INSERT INTO submodulos (nombre, "path", is_modullo, icon, modulo_id) VALUES 
        ('aplicativo', 'aplicativo', true, '',1), 
        ('comercial', 'comercial', true,'',2),
        ('incidencias', 'incidencias', true,'',3),
        ('inventario', 'inventario', true,'',4),
        ('laboratorio', 'laboratorio', true,'',5)`);
	}

	async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(``);
	}
}
