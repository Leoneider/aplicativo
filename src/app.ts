import express from 'express';
import { Errors } from './helpers/errors.helper';
import { CargoRouter } from './module/infraestructure/cargo-router';
import { ModuloRouter } from './module/infraestructure/modulo-router';
import { RolRouter } from './module/infraestructure/rol-router';
import { UsuarioRouter } from './module/infraestructure/usuario-router';
import { FuncionalidadRouter } from './module/infraestructure/funcionalidad-router';
import { MenuRouter } from './module/infraestructure/menu-router';
import { PermisoRouter } from './module/infraestructure/permiso-router';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/usuario', UsuarioRouter);
app.use('/cargo', CargoRouter);
app.use('/rol', RolRouter);
app.use('/menu', MenuRouter);

app.use('/modulos', ModuloRouter);
app.use('/funcionalidades', FuncionalidadRouter);
app.use('/permisos', PermisoRouter);

app.get('/health-check', (req: Request, res: any) => res.send('I am alive'));

app.use(Errors.pathNotFoundError);
app.use(Errors.genericError);

export default app;
