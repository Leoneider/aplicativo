export class UserBuilder {
	id: number;
	nombres: string;
	primer_apellido: string;
	segundo_apellido: string;
	documento: string;
	direccion: string;
	email: string;
	path_imagen: string;
	estado: string;
	has_doble_factor: Date;
	cargo_id: number;

	addId(id: number) {
		this.id = id;
		return this;
	}
	
	addNombres(nombres: string) {
		this.nombres = nombres;
		return this;
	}

	addPrimerApellido(primer_apellido: string) {
		this.primer_apellido = primer_apellido;
		return this;
	}
	addSegundoApellido(segundo_apellido: string) {
		this.segundo_apellido = segundo_apellido;
		return this;
	}
	addDocumento(documento: string) {
		this.documento = documento;
		return this;
	}
	addDireccion(direccion: string) {
		this.direccion = direccion;
		return this;
	}
	addEmail(email: string) {
		this.email = email;
		return this;
	}

	addPathImagen(path_imagen: string) {
		this.path_imagen = path_imagen;
		return this;
	}

	addEstado(estado: string) {
		this.estado = estado;
		return this;
	}

	addHasDobleFactor(has_doble_factor: Date) {
		this.has_doble_factor = has_doble_factor;
		return this;
	}

	addCargoId(cargo: number) {
		this.cargo_id = cargo;
		return this;
	}

	build() {
		return new UserEntity(this);
	}
}

export class UserEntity {
	id: number;
	nombres: string;
	primer_apellido: string;
	segundo_apellido: string;
	documento: string;
	direccion: string;
	email: string;
	path_imagen: string;
	estado: string;
	has_doble_factor: Date;
	cargo_id: number;
	constructor(ob: UserBuilder) {
		this.nombres = ob.nombres;
		this.primer_apellido = ob.primer_apellido;
		this.segundo_apellido = ob.segundo_apellido;
		this.documento = ob.documento;
		this.direccion = ob.direccion;
		this.email = ob.email;
		this.path_imagen = ob.path_imagen;
		this.estado = ob.estado;
		this.has_doble_factor = ob.has_doble_factor;
		this.cargo_id = ob.cargo_id ;
	}
}
