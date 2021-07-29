import { MenuEntity } from './../domain/menu.entity';

export interface Repository {
	getMenu(documento: string): Promise<MenuEntity[]>;
}
