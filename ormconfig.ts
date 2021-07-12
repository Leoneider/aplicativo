import { ConnectionOptions } from 'typeorm';
import yenv from 'yenv';
const env = yenv();

let dir = process.cwd();
let dirinfraestructure = `${dir}\\src\\module\\infraestructure`;

let dirMigrations = "src/module/infraestructure/migrations";

// dirMigrations.replace("\\", "/");

const config: ConnectionOptions = {
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
        migrationsDir: dirMigrations
    },
    synchronize: env.DATABASE.POSTGRES.SYNCHRONIZE, 
    logging: false,
};
 
export = config;