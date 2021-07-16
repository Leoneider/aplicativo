import { RolEntity, RolBuilder } from './../domain/rol.entity';
import { RolUseCase } from './../application/rol-usecase';
import { RolRepository } from './../application/rol-repository';
// import { CargoOperation } from './rol-operations';
// import { DeleteResult } from 'typeorm';
// import { UpdateResult } from 'typeorm';
import express, { Request, Response } from 'express';

import { Errors } from '../../helpers/errors.helper';
import { RolOperation } from './rol-operations';

const RolRouter = express.Router();
const operation: RolRepository = new RolOperation();
const rolUseCase: RolUseCase = new RolUseCase(operation);

RolRouter.get(
	'/',
	Errors.asyncError(async (req: Request, res: Response) => {
		const cargoEntity: RolEntity = new RolBuilder();
		const result: RolEntity[] = await rolUseCase.select(cargoEntity);
		res.status(200).send(result);
	})
);

export { RolRouter };
