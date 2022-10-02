import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/contact.class';

const ContactForm = ({ add }) => {
	const nameRef = useRef('');
	const ageRef = useRef(0);
	const emailRef = useRef('');

	function addContact(e) {
		e.preventDefault();
		const newContact = new Contact(
			nameRef.current.value,
			ageRef.current.value,
			emailRef.current.value,
			false
		);
		add(newContact);
	}
	return (
		<form onSubmit={addContact} className="d-flex justify-content-center align-items-center mb-4">
			<div className="form-outline flex-fill">
				<input
					ref={nameRef}
					id="inputName"
					type="text"
					className="form-control form-control-lg mb-3"
					required
					autofocus
					placeholder="Contact name"
				/>
				<input
					ref={ageRef}
					id="inputAge"
					type="number"
					step="1"
					min="0"
					max="120"
					className="form-control form-control-lg mb-3"
					required
					placeholder="Contact age"
				/>
				<input
					ref={emailRef}
					id="inputEmail"
					type="text"
					className="form-control form-control-lg mb-3"
					required
					placeholder="Contact email"
				/>
				<button type="submit" className="btn btn-success btn-lg ms-2">
					Add contact
				</button>
			</div>
		</form>
	);
};

ContactForm.propTypes = {
	add: PropTypes.func.isRequired,
};

export default ContactForm;
