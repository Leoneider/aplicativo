import { DeleteResult } from 'typeorm';
import { UpdateResult } from 'typeorm';
import express, { Request, Response } from 'express';
import { UserBuilder, UserEntity } from '../domain/user.entity';
import { Errors } from '../../helpers/errors.helper';
import { Repository } from '../application/UsuarioRepository';
import { Operation } from './UsuarioOperation';
import { UseCase } from '../application/UsuarioUsecase';

const UsuarioRouter = express.Router();
const operation: Repository = new Operation();
const useCase: UseCase = new UseCase(operation);

UsuarioRouter.get(
	'/',
	Errors.asyncError(async (req: Request, res: Response) => {
		const userEntity: UserEntity = new UserBuilder()
		const result: UserEntity[] = await useCase.select(userEntity);
		res.status(200).send(result);
	})
);

UsuarioRouter.get(
	'/:email',
	Errors.asyncError(async (req: Request, res: Response) => {
		let email = req.params.email
		const userEntity: UserEntity = new UserBuilder()
		.addEmail(email);
		
		const result: UserEntity = await useCase.selectUsuario(userEntity);
		res.status(200).send(result);
	})
);

UsuarioRouter.post(
	'/',
	Errors.asyncError(async (req: Request, res: Response) => {
		const { nombres, primer_apellido, segundo_apellido, documento, direccion, email, telefono, cargo_id } = req.body;

		let date: Date = new Date();
        	
		const userEntity: UserEntity = new UserBuilder()
			.addNombres(nombres)
			.addPrimerApellido(primer_apellido)
			.addSegundoApellido(segundo_apellido)
			.addDocumento(documento)
			.addDireccion(direccion)
			.addEmail(email)
			.addTelefono(telefono)
			.addCargoId(cargo_id)
			.addHasDobleFactor(date)

		const result: UserEntity = await useCase.insert(userEntity);
		res.status(201).send(result);
	})
);

UsuarioRouter.patch(
	'/:id',
	Errors.asyncError(async (req: Request, res: Response) => {
	  const userEntity: UserEntity = req.body
      const result:UpdateResult = await useCase.update( Number(req.params.id) , userEntity)
	
	  res.status(200).send({
		status: 200,
		message: 'Usuario actualizado correctamente',
		affected: result.affected
	  });

	})
);

UsuarioRouter.delete(
	'/:id',
	Errors.asyncError(async (req: Request, res: Response) => {
		const result:DeleteResult = await useCase.delete(req.params.id);

		 res.status(200).send({
			status: 200,
			message: 'Usuario eliminado correctamente',
			affected: result.affected
		  });
	})
);

export { UsuarioRouter };