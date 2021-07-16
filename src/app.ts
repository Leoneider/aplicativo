import express from 'express';
import { Errors } from './helpers/errors.helper';
import { CargoRouter } from './module/infraestructure/cargo-router';
import { UsuarioRouter } from './module/infraestructure/usuario-router';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/usuario', UsuarioRouter);
app.use('/cargo', CargoRouter);
app.get('/health-check', (req: Request, res: any) => res.send('I am alive'));

app.use(Errors.pathNotFoundError);
app.use(Errors.genericError);

export default app;
