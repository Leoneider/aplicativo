/* eslint-disable no-use-before-define */
export class ModuloEntity {
	id: number;
	nombre: string;
	descripcion: string;

	constructor(ob: ModuloBuilder) {
		this.nombre = ob.nombre;
		this.descripcion = ob.descripcion;
	}
}

export class ModuloBuilder {
	id: number;
	nombre: string;
	descripcion: string;

	addId(id: number): this {
		this.id = id;
		return this;
	}

	addNombre(nombre: string): this {
		this.nombre = nombre;
		return this;
	}

	addDescripcion(descripcion: string): this {
		this.descripcion = descripcion;
		return this;
	}

	build(): ModuloEntity {
		return new ModuloEntity(this);
	}
}
