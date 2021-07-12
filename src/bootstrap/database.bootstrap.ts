import { Initialize } from './initialize.interface';
import { createConnection } from "typeorm";
import "reflect-metadata";
import yenv from 'yenv';
const env = yenv();

export class DatabaseBootstrap implements Initialize {
	async initialize(): Promise<any> {
		let dir = process.cwd();
		let dirinfraestructure = `${dir}\\src\\module\\infraestructure`;

		const promiseInitialize = new Promise((resolve, reject) => {
			createConnection({
				name: "default",
				type: "postgres",
				host: env.DATABASE.POSTGRES.HOST,
				port: env.DATABASE.POSTGRES.PORT,
				username: env.DATABASE.POSTGRES.USER,
				password: env.DATABASE.POSTGRES.PASS,
				database: env.DATABASE.POSTGRES.DATABASE,
				schema: env.DATABASE.POSTGRES.SCHEMA,
				entities: [dirinfraestructure + "\\models\\*"],
				migrationsRun: true,
				migrationsTableName: "migrations",
				migrations: [dirinfraestructure + "\\migrations\\*"],
				cli: {
					"migrationsDir": "src/module/infraestructure/migrations"
				},
				synchronize: env.DATABASE.POSTGRES.SYNCHRONIZE, 
				logging: false
			}).then(connection => {
				console.log(`Conexion successful to Database Postgres: ${env.NODE_ENV}`);
				resolve('Connection Database successful');
			}).catch(error => {
				console.log(error)
				reject(error);
			});
		});
		await promiseInitialize;
	}
}
