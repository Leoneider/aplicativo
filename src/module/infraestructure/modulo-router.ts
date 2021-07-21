import { ModuloEntity, ModuloBuilder } from './../domain/modulo.entity';
import { ModuloUseCase } from './../application/modulo-usecase';
import { ModuloRepository } from './../application/modulo-repository';
import express, { Request, Response } from 'express';

import { Errors } from '../../helpers/errors.helper';
import { ModuloOperation } from './modulo-operation';

const ModuloRouter = express.Router();
const operation: ModuloRepository = new ModuloOperation();
const moduloUseCase: ModuloUseCase = new ModuloUseCase(operation);

ModuloRouter.get(
	'/',
	Errors.asyncError(async (req: Request, res: Response) => {
		const moduloEntity: ModuloEntity = new ModuloBuilder();
		const result: ModuloEntity[] = await moduloUseCase.select(moduloEntity);
		res.status(200).send(result);
	})
);

export { ModuloRouter };
