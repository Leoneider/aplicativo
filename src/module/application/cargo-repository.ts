import { CargoEntity } from './../domain/cargo.entity';


export interface CargoRepository {
	getCargo(userEntity: CargoEntity): Promise<CargoEntity[]>;
}
