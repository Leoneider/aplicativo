export class UserEntity {
	id: number;
	nombres: string;
	primer_apellido: string;
	segundo_apellido: string;
	documento: string;
	direccion: string;
	email: string;
	telefono: string;
	path_imagen: string;
	estado: string;
	has_doble_factor: Date;
	cargo_id: number;
	// eslint-disable-next-line no-use-before-define
	constructor(ob: UserBuilder) {
		this.nombres = ob.nombres;
		this.primer_apellido = ob.primer_apellido;
		this.segundo_apellido = ob.segundo_apellido;
		this.documento = ob.documento;
		this.direccion = ob.direccion;
		this.email = ob.email;
		this.telefono = ob.telefono;
		this.path_imagen = ob.path_imagen;
		this.estado = ob.estado;
		this.has_doble_factor = ob.has_doble_factor;
		this.cargo_id = ob.cargo_id;
	}
}

export class UserBuilder {
	id: number;
	nombres: string;
	primer_apellido: string;
	segundo_apellido: string;
	documento: string;
	direccion: string;
	email: string;
	telefono: string;
	path_imagen: string;
	estado: string;
	has_doble_factor: Date;
	cargo_id: number;

	addId(id: number): this {
		this.id = id;
		return this;
	}

	addNombres(nombres: string): this {
		this.nombres = nombres;
		return this;
	}

	addPrimerApellido(primer_apellido: string): this {
		this.primer_apellido = primer_apellido;
		return this;
	}

	addSegundoApellido(segundo_apellido: string): this {
		this.segundo_apellido = segundo_apellido;
		return this;
	}

	addDocumento(documento: string): this {
		if(documento) this.documento = documento;
		return this;
	}

	addDireccion(direccion: string): this {
		this.direccion = direccion;
		return this;
	}

	addEmail(email: string): this {
		if(email) this.email = email;
		return this;
	}

	addTelefono(telefono: string): this {
		this.telefono = telefono;
		return this;
	}

	addPathImagen(path_imagen: string): this {
		this.path_imagen = path_imagen;
		return this;
	}

	addEstado(estado: string): this {
		this.estado = estado;
		return this;
	}

	addHasDobleFactor(has_doble_factor: Date): this {
		this.has_doble_factor = has_doble_factor;
		return this;
	}

	addCargoId(cargo: number): this {
		this.cargo_id = cargo;
		return this;
	}

	build(): UserEntity {
		return new UserEntity(this);
	}
}
