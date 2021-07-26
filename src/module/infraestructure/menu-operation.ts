import { Submodulo } from './models/submodulo.model';
import { SubmoduloEntity } from './../domain/submodulo.entity';
import { DataMenu } from './../domain/data-menu.entity';
import { MenuEntity, MenuBuilder } from './../domain/menu.entity';
import { Repository } from '../application/menu-repository';
import { getManager } from 'typeorm';

export class Operation implements Repository {
	async getMenu(documento: string): Promise<MenuEntity[]> {
		let menu: MenuEntity;
		const menus: MenuEntity[] = [];

		const dataMenu: DataMenu[] = await this.getDataMenu(documento);
		const modulos: SubmoduloEntity[] = await this.getModulos();

		modulos.forEach(modulo => {
			let hasModulo = false;
			let pathModule: string;
			const moduloId = modulo.id;
			let path: MenuEntity;
			const paths: MenuEntity[] = [];

			let vista: MenuEntity;
			let vistas: MenuEntity[] = [];
			let funcionalidadIdTmp: number;

			let label: string;
			let icon: string;
			let routerLink: string;

			dataMenu.forEach(dataItem => {
				if (dataItem.modulo_id === moduloId) {
					hasModulo = true;
					pathModule = modulo.path;
					// Agrega funcionalidad
					if (dataItem.vista_is_funcionalidad) {
						if (
							funcionalidadIdTmp &&
							funcionalidadIdTmp !== dataItem.vista_funcionalidad_id
						) {
							path = new MenuBuilder()
								.addlabel(label)
								.addIcon(icon)
								.addRouterLink([routerLink])
								.addPermisos(vistas);
							paths.push(path);
							vistas = [];
							label = '';
							icon = '';
							routerLink = '';
						}
						funcionalidadIdTmp = dataItem.vista_funcionalidad_id;
						label = dataItem.vista_nombre;
						icon = dataItem.vista_icon;
						routerLink = pathModule + '/' + dataItem.vista_path;
					} else {
						// Agrega vistas a la funcionalidad
						path = undefined;
						vista = new MenuBuilder()
							.addlabel(dataItem.vista_nombre)
							.addIcon(dataItem.vista_icon)
							.addRouterLink([pathModule + '/' + dataItem.vista_path]);
						vistas.push(vista);
					}
				}
			});

			path = new MenuBuilder()
				.addlabel(label)
				.addIcon(icon)
				.addRouterLink([routerLink])
				.addPermisos(vistas);
			paths.push(path);
			vistas = [];
			label = '';
			icon = '';
			routerLink = '';

			if (hasModulo) {
				menu = new MenuBuilder()
					.addlabel(modulo.nombre)
					.addIcon(modulo.icon)
					.addRouterLink([modulo.path])
					.addItems(paths);

				menus.push(menu);
			}
		});
		return menus;
	}

	async getModulos(): Promise<SubmoduloEntity[]> {
		const submoduloRepository = getManager().getRepository(Submodulo);
		const submodulo: SubmoduloEntity[] = await submoduloRepository.find({
			where: { is_modullo: true },
		});
		return submodulo;
	}

	async getDataMenu(documento: string): Promise<any[]> {
		const entityManger = getManager();
		return entityManger.query(
			`select v.id as vista_id,v.funcionalidad_id as vista_funcionalidad_id, v.nombre as vista_nombre, v.path as vista_path, v.is_funcionalidad as vista_is_funcionalidad, v.icon as vista_icon, s.id as modulo_id , s.nombre as modulo_nombre, s.is_modullo as modulo_is_modulo , s.path as modulo_path from vistas v 
			inner join permisos p on p.vista_id = v.id 
			inner join roles r on r.id  = p.rol_id 
			inner join funcionalidades f on f.id = v.funcionalidad_id 
			inner join submodulos s on s.id = f.submodulo_id 
			where r.id in (select r.id from roles r 
			inner join usuario_roles ur on r.id = ur.rol_id 
			inner join usuarios u on u.id = ur.usuario_id 
			where u.documento = $1)
			order by s.id, v.id asc `,
			[documento]
		);
	}
}
