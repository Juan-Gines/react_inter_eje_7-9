export class Contact {
	name = '';
	age = 0;
	email = '';
	connected = false;

	constructor(name, age, email, connected) {
		this.name = name;
		this.age = age;
		this.email = email;
		this.connected = connected;
	}
}
