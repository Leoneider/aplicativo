export class RolBuilder {
	id: number;
	nombres: string;

	addId(id: number) {
		this.id = id;
		return this;
	}
	
	addNombres(nombres: string) {
		this.nombres = nombres;
		return this;
	}

	build() {
		return new RolEntity(this);
	}
}

export class RolEntity {
	id: number;
	nombres: string;

	constructor(ob: RolBuilder) {
		this.nombres = ob.nombres;
	}
}
