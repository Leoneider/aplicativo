import { CargoEntity } from './../domain/cargo.entity';
import { CargoRepository } from './cargo-repository';

export class CargoUseCase {
	constructor(private operation: CargoRepository) {}

	async select(cargoEntity: CargoEntity): Promise<CargoEntity[]> {
		const result = await this.operation.getCargo(cargoEntity);
		return result;
	}
}
