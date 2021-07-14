/* eslint-disable no-use-before-define */
export class RolEntity {
	id: number;
	nombres: string;

	constructor(ob: RolBuilder) {
		this.nombres = ob.nombres;
	}
}

export class RolBuilder {
	id: number;
	nombres: string;

	addId(id: number): this {
		this.id = id;
		return this;
	}

	addNombres(nombres: string): this {
		this.nombres = nombres;
		return this;
	}

	build(): RolEntity {
		return new RolEntity(this);
	}
}
