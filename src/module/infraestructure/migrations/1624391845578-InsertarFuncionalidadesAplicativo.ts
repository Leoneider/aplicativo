import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertarFuncionalidadesAplicativo1624391845578
	implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		// CREAR ROLES
		await queryRunner.query(`INSERT INTO funcionalidades (nombre, submodulo_id) VALUES
                                                             ('crear roles', 1)`);
		await queryRunner.query(`INSERT INTO vistas (nombre, "path", is_funcionalidad, icon, funcionalidad_id) VALUES
                                                    ('crear roles', 'crear-roles', true, '', 1)`);

		await queryRunner.query(`INSERT INTO vistas (nombre, "path", is_funcionalidad, icon, funcionalidad_id) VALUES
                                                    ('editar roles', 'crear-roles', false, '', 1)`);
		await queryRunner.query(`INSERT INTO vistas (nombre, "path", is_funcionalidad, icon, funcionalidad_id) VALUES
                                                    ('eliminar roles', 'crear-roles', false, '', 1)`);

		// CREAR USUARIOS
		await queryRunner.query(`INSERT INTO funcionalidades (nombre, submodulo_id) VALUES
															 ('crear usuario', 2)`);
		await queryRunner.query(`INSERT INTO vistas (nombre, "path", is_funcionalidad, icon, funcionalidad_id) VALUES
													('crear usuario', 'crear-usuario', true, '', 2)`);

		await queryRunner.query(`INSERT INTO vistas (nombre, "path", is_funcionalidad, icon, funcionalidad_id) VALUES
													('editar usuario', 'crear-usuario', false, '', 2)`);
		await queryRunner.query(`INSERT INTO vistas (nombre, "path", is_funcionalidad, icon, funcionalidad_id) VALUES
													('Eliminar usuario', 'crear-usuario', false, '', 2)`);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {}
}
