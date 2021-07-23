import { MenuEntity } from './../domain/menu.entity';
import { Repository } from './menu-repository';

export class UseCase {
	// eslint-disable-next-line no-useless-constructor
	constructor(private operation: Repository) {}

	async select(documento: string): Promise<MenuEntity[]> {
		const result = await this.operation.getMenu(documento);
		return result;
	}
}
