// import { DeleteResult } from 'typeorm';
// import { UpdateResult } from 'typeorm';
import express, { Request, Response } from 'express';
import { UserBuilder, UserEntity } from '../domain/user.entity';
import { Errors } from '../../helpers/errors.helper';
import { Repository } from '../application/usuario-repository';
import { Operation } from './usuario-operation';
import { UseCase } from '../application/usuario-usecase';

const UsuarioRouter = express.Router();
const operation: Repository = new Operation();
const useCase: UseCase = new UseCase(operation);

UsuarioRouter.get(
	'/',
	Errors.asyncError(async (req: Request, res: Response) => {
		const userEntity: UserEntity = new UserBuilder();
		const result: UserEntity[] = await useCase.select(userEntity);
		res.status(200).send(result);
	})
);
UsuarioRouter.get(
	'/:id',
	Errors.asyncError(async (req: Request, res: Response) => {
		const id = req.params.id;
		const userEntity: UserEntity = new UserBuilder().addId(Number(id));

		const result: UserEntity = await useCase.selectUsuario(userEntity);
		res.status(200).send(result);
	})
);

UsuarioRouter.get(
	'/email/:email',
	Errors.asyncError(async (req: Request, res: Response) => {
		const email = req.params.email;
		const userEntity: UserEntity = new UserBuilder().addEmail(email);

		const result: UserEntity = await useCase.selectUsuario(userEntity);
		res.status(200).send(result);
	})
);

UsuarioRouter.post(
	'/',
	Errors.asyncError(async (req: Request, res: Response) => {
		const {
			nombres,
			primer_apellido,
			segundo_apellido,
			documento,
			direccion,
			email,
			telefono,
			cargo_id,
		} = req.body;

		const date: Date = new Date();

		const userEntity: UserEntity = new UserBuilder()
			.addNombres(nombres)
			.addPrimerApellido(primer_apellido)
			.addSegundoApellido(segundo_apellido)
			.addDocumento(documento)
			.addDireccion(direccion)
			.addEmail(email)
			.addTelefono(telefono)
			.addCargoId(cargo_id)
			.addHasDobleFactor(date);

		const result: UserEntity = await useCase.insert(userEntity);

		res.status(201).send({
			status: 200,
			message: 'Usuario creado correctamente',
			result,
		});
	})
);

UsuarioRouter.patch(
	'/:id',
	Errors.asyncError(async (req: Request, res: Response) => {
		const userEntity: UserEntity = req.body;
		const result: any = await useCase.update(Number(req.params.id), userEntity);

		res.status(200).send({
			status: 200,
			message: 'Usuario actualizado correctamente',
			affected: result.affected,
		});
	})
);

UsuarioRouter.delete(
	'/:id',
	Errors.asyncError(async (req: Request, res: Response) => {
		const result: any = await useCase.delete(req.params.id);

		res.status(200).send({
			status: 200,
			message: 'Usuario eliminado correctamente',
			affected: result.raw,
		});
	})
);

UsuarioRouter.post(
	'/disponible',
	Errors.asyncError(async (req: Request, res: Response) => {
		const { documento, email } = req.body;

		const userEntity: UserEntity = new UserBuilder()
			.addDocumento(documento)
			.addEmail(email);

		const result: UserEntity = await useCase.selectUsuario(userEntity);

		const isDsiponible: boolean = result ? false : true;

		res.status(200).send({
			isDsiponible,
		});
	})
);

export { UsuarioRouter };
