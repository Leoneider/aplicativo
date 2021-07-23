/* eslint-disable no-use-before-define */
export class MenuEntity {
	label: string;
	icon: string;
	routerLink: string[];
	vistas: string[];
	items: MenuEntity[];

	constructor(ob: MenuBuilder) {
		this.label = ob.label;
		this.icon = ob.icon;
		this.routerLink = ob.routerLink;
		this.vistas = ob.vistas;
		this.items = ob.items;
	}
}

export class MenuBuilder {
	label: string;
	icon: string;
	routerLink: string[];
	vistas: string[];
	items: MenuEntity[];

	addlabel(label: string): this {
		this.label = label;
		return this;
	}

	addIcon(icon: string): this {
		this.icon = icon;
		return this;
	}

	addRouterLink(routerLink: string[]): this {
		this.routerLink = routerLink;
		return this;
	}

	addVistas(vistas: string[]): this {
		this.vistas = vistas;
		return this;
	}

	addItems(items: MenuEntity[]): this {
		this.items = items;
		return this;
	}

	build(): MenuEntity {
		return new MenuEntity(this);
	}
}
