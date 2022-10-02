import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

import '../../styles/contact.css';

function ContactComponent({ contact, connected, show, remove }) {
	function contactConnectBadge() {
		if (contact.connected) {
			return (
				<h6 className="mb-0">
					<span className="badge bg-success contact-action" onClick={() => connected(contact)}>
						Connected
					</span>
				</h6>
			);
		} else {
			return (
				<h6 className="mb-0">
					<span className="badge bg-danger contact-action" onClick={() => connected(contact)}>
						Disconnected
					</span>
				</h6>
			);
		}
	}

	return (
		<tr className="fw-normal">
			<th>
				<span className="ms-2">{contact.name}</span>
			</th>
			<td className="align-middle">{contactConnectBadge()}</td>

			<td className="align-middle">
				<i
					className="bi-search contact-action"
					style={{ color: 'blue', fontSize: '20px' }}
					onClick={() => show(contact)}
				></i>
				<i
					className="bi-trash contact-action"
					style={{ color: 'tomato', fontSize: '20px' }}
					onClick={() => remove(contact)}
				></i>
			</td>
		</tr>
	);
}

ContactComponent.propTypes = {
	contact: PropTypes.instanceOf(Contact).isRequired,
};

export default ContactComponent;
