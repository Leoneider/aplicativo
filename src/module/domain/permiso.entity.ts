/* eslint-disable no-use-before-define */
export class PermisoEntity {
	id: number;
	nombre: string;
	path: string;
	is_funcionalidad: boolean;
	icon: string;
	funcionalidad_id: number;

	constructor(ob: PermisoBuilder) {
		this.id = ob.id;
		this.nombre = ob.nombre;
		this.path = ob.path;
		this.is_funcionalidad = ob.is_funcionalidad;
		this.icon = ob.icon;
		this.funcionalidad_id = ob.funcionalidad_id;
	}
}

export class PermisoBuilder {
	id: number;
	nombre: string;
	path: string;
	is_funcionalidad: boolean;
	icon: string;
	funcionalidad_id: number;

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

	addIsFuncionalidad(is_funcionalidad: boolean): this {
		this.is_funcionalidad = is_funcionalidad;
		return this;
	}

	addIcon(icon: string): this {
		this.icon = icon;
		return this;
	}

	addFuncionalidadId(funcionalidad_id: number): this {
		this.funcionalidad_id = funcionalidad_id;
		return this;
	}

	build(): PermisoEntity {
		return new PermisoEntity(this);
	}
}
