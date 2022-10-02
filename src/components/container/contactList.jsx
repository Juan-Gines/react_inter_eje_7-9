import React, { useState } from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';
import ContactForm from '../pure/forms/contactForm';

const ContactListComponent = () => {
	const defaultContact1 = new Contact('Juan Ginés', 48, 'juan@hotmail.com', true);
	const defaultContact2 = new Contact('Raquel', 35, 'raquel@hotmail.com', false);
	const defaultContact3 = new Contact('Ariadna', 17, 'ariadna@hotmail.com', false);

	const [contacts, setContacts] = useState([defaultContact1, defaultContact2, defaultContact3]);

	const [displayContact, setDisplayContact] = useState(defaultContact1);

	function swichConnectedContact(contact) {
		const index = contacts.indexOf(contact);
		const tempContacts = [...contacts];
		tempContacts[index].connected = !tempContacts[index].connected;
		setContacts(tempContacts);
	}

	function deleteContact(contact) {
		const index = contacts.indexOf(contact);
		const tempContacts = [...contacts];
		tempContacts.splice(index, 1);
		setContacts(tempContacts);
	}

	function addContact(contact) {
		const tempContacts = [...contacts];
		tempContacts.push(contact);
		setContacts(tempContacts);
	}

	function showContact(contact) {
		setDisplayContact(contact);
	}
	return (
		<div>
			<div className="col-12">
				<div className="card mb-3">
					<div className="card-header p-3">
						<h4>Contacts</h4>
					</div>
					<div
						className="card-body"
						data-mdb-perfect-scrollbar="true"
						style={{ position: 'relative', height: '400px' }}
					>
						<table className="mb-3">
							<thead>
								<tr>
									<th scope="col">Name</th>
									<th scope="col">Connected</th>
									<th scope="col">Actions</th>
								</tr>
							</thead>
							<tbody>
								{contacts.map((contact, index) => {
									return (
										<ContactComponent
											key={index}
											contact={contact}
											connected={swichConnectedContact}
											show={showContact}
											remove={deleteContact}
										></ContactComponent>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
				<div className="card mb-3">
					<div
						className="card-body text-start"
						data-mdb-perfect-scrollbar="true"
						style={{ position: 'relative', height: '200px' }}
					>
						<div>
							<span className="badge rounded-pill text-bg-primary">Name</span>
							<span>{displayContact.name}</span>
						</div>
						<div>
							<span className="badge rounded-pill text-bg-primary">Age</span>
							<span>{displayContact.age}</span>
						</div>
						<div>
							<span className="badge rounded-pill text-bg-primary">Email</span>
							<span>{displayContact.email}</span>
						</div>
						<div>
							<span className="badge rounded-pill text-bg-primary">Status</span>
							<span>{displayContact.connected ? 'Connected' : 'Disconnected'}</span>
						</div>
					</div>
				</div>

				<ContactForm add={addContact}></ContactForm>
			</div>
		</div>
	);
};

export default ContactListComponent;
