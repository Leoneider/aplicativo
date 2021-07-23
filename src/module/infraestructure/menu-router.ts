import { MenuEntity } from './../domain/menu.entity';
import express, { Request, Response } from 'express';
import { Errors } from '../../helpers/errors.helper';
import { Repository } from '../application/menu-repository';
import { Operation } from './menu-operation';
import { UseCase } from '../application/menu-usecase';

const MenuRouter = express.Router();

const operation: Repository = new Operation();
const useCase: UseCase = new UseCase(operation);

MenuRouter.get(
	'/:documento',
	Errors.asyncError(async (req: Request, res: Response) => {
		const documento = req.params.documento;
		const result: MenuEntity[] = await useCase.select(documento);
		res.status(200).send(result);
	})
);

export { MenuRouter };
