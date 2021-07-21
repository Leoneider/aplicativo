import {
	FuncionalidadEntity,
	FuncionalidadBuilder,
} from './../domain/funcionalidad.entity';
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
		const funcionalidadEntity: FuncionalidadEntity = new FuncionalidadBuilder();
		const result: FuncionalidadEntity[] = await funcionalidadUseCase.select(
			funcionalidadEntity
		);
		res.status(200).send(result);
	})
);

export { FuncionalidadRouter };
