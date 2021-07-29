/* eslint-disable no-use-before-define */
export class FuncionalidadEntity {
	id: number;
	nombre: string;
	submodulo_id: number;

	constructor(ob: FuncionalidadBuilder) {
		this.nombre = ob.nombre;
		this.submodulo_id = ob.submodulo_id;
	}
}

export class FuncionalidadBuilder {
	id: number;
	nombre: string;
	submodulo_id: number;

	addId(id: number): this {
		this.id = id;
		return this;
	}

	addNombre(nombre: string): this {
		this.nombre = nombre;
		return this;
	}

	addSubmoduloId(submodulo_id: number): this {
		this.submodulo_id = submodulo_id;
		return this;
	}

	build(): FuncionalidadEntity {
		return new FuncionalidadEntity(this);
	}
}
