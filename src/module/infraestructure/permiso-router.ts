import { PermisoEntity } from './../domain/permiso.entity';
import { PermisoUseCase } from './../application/permiso-usecase';
import { PermisoRepository } from './../application/permiso-repository';
import { PermisoOperation } from './permiso-operation';

import express, { Request, Response } from 'express';

import { Errors } from '../../helpers/errors.helper';

const PermisoRouter = express.Router();
const operation: PermisoRepository = new PermisoOperation();
const permisoUseCase: PermisoUseCase = new PermisoUseCase(operation);

PermisoRouter.get(
	'/:id',
	Errors.asyncError(async (req: Request, res: Response) => {
		const id = req.params.id;
		const result: PermisoEntity[] = await permisoUseCase.getPermisosPorFuncionalidad(
			Number(id)
		);
		res.status(200).send(result);
	})
);

export { PermisoRouter };
