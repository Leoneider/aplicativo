/* eslint-disable no-use-before-define */
export class CargoEntity {
	id: number;
	nombre: string;

	constructor(ob: CargoBuilder) {
		this.nombre = ob.nombre;
	}
}

export class CargoBuilder {
	id: number;
	nombre: string;

	addId(id: number): this {
		this.id = id;
		return this;
	}

	addNombres(nombre: string): this {
		this.nombre = nombre;
		return this;
	}

	build(): CargoEntity {
		return new CargoEntity(this);
	}
}
