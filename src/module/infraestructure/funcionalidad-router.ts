import { PermisoEntity, PermisoBuilder } from './../domain/permiso.entity';
import { FuncionalidadUseCase } from './../application/funcionalidad-usecase';
import { FuncionalidadRepository } from './../application/funcionalidad-repository';
import express, { Request, Response } from 'express';

import { Errors } from '../../helpers/errors.helper';
import { FuncionalidadOperation } from './funcionalidad-operation';

const FuncionalidadRouter = express.Router();
const operation: FuncionalidadRepository = new FuncionalidadOperation();
const funcionalidadUseCase: FuncionalidadUseCase = new FuncionalidadUseCase(
	operation
);

FuncionalidadRouter.get(
	'/',
	Errors.asyncError(async (req: Request, res: Response) => {
		const funcionalidadEntity: PermisoEntity = new PermisoBuilder();
		const result: PermisoEntity[] = await funcionalidadUseCase.select(
			funcionalidadEntity
		);
		res.status(200).send(result);
	})
);

FuncionalidadRouter.get(
	'/modulo/:id',
	Errors.asyncError(async (req: Request, res: Response) => {
		const moduloId = req.params.id;
		const result: PermisoEntity[] = await funcionalidadUseCase.getFuncionalidadesPorModulo(
			Number(moduloId)
		);
		res.status(200).send(result);
	})
);

export { FuncionalidadRouter };
