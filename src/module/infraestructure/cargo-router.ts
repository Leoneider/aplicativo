import { CargoEntity, CargoBuilder } from './../domain/cargo.entity';
import { CargoUseCase } from './../application/cargo-usecase';
import { CargoRepository } from './../application/cargo-repository';
import { CargoOperation } from './cargo-operation';
// import { DeleteResult } from 'typeorm';
// import { UpdateResult } from 'typeorm';
import express, { Request, Response } from 'express';

import { Errors } from '../../helpers/errors.helper';

const CargoRouter = express.Router();
const operation: CargoRepository = new CargoOperation();
const cargoUseCase: CargoUseCase = new CargoUseCase(operation);

CargoRouter.get(
	'/',
	Errors.asyncError(async (req: Request, res: Response) => {
		const cargoEntity: CargoEntity = new CargoBuilder();
		const result: CargoEntity[] = await cargoUseCase.select(cargoEntity);
		res.status(200).send(result);
	})
);




export { CargoRouter };
