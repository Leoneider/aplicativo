/* eslint-disable no-use-before-define */
export class RolEntity {
	id: number;
	nombre: string;

	constructor(ob: RolBuilder) {
		this.nombre = ob.nombre;
	}
}

export class RolBuilder {
	id: number;
	nombre: string;

	addId(id: number): this {
		this.id = id;
		return this;
	}

	addNombres(nombres: string): this {
		this.nombre = nombres;
		return this;
	}

	build(): RolEntity {
		return new RolEntity(this);
	}
}
