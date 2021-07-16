import { Cargo } from './models/cargo.model';
import { CargoEntity } from './../domain/cargo.entity';
import { CargoRepository } from './../application/cargo-repository';

import {
	// DeleteResult,
	// getConnection,
	getManager,
	// UpdateResult
} from 'typeorm';

export class CargoOperation implements CargoRepository {
	async getCargo(): Promise<CargoEntity[]> {
		const cargoRepository = getManager().getRepository(Cargo);

		const cargo: CargoEntity[] = await cargoRepository.find();

		return cargo;
	}
}
