/* eslint-disable no-use-before-define */
export class SubmoduloEntity {
	id: number;
	nombre: string;
	path: string;
	is_modullo: boolean;
	icon: string;
	modulo_id: number;

	constructor(ob: SubmoduloBuilder) {
		this.id = ob.id;
		this.nombre = ob.nombre;
		this.path = ob.path;
		this.is_modullo = ob.is_modullo;
		this.icon = ob.icon;
		this.modulo_id = ob.modulo_id;
	}
}

export class SubmoduloBuilder {
	id: number;
	nombre: string;
	path: string;
	is_modullo: boolean;
	icon: string;
	modulo_id: number;

	addId(id: number): this {
		this.id = id;
		return this;
	}

	addNombre(nombre: string): this {
		this.nombre = nombre;
		return this;
	}

	addPath(path: string): this {
		this.path = path;
		return this;
	}

	addIsModulo(is_modullo: boolean): this {
		this.is_modullo = is_modullo;
		return this;
	}

	addModuloId(modulo_id: number): this {
		this.modulo_id = modulo_id;
		return this;
	}

	build(): SubmoduloEntity {
		return new SubmoduloEntity(this);
	}
}
