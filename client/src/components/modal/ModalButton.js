import { Icon } from '@iconify/react';
import React from 'react';
import Modal from './Modal';

export default function ModalButton(props) {
	const [showModal, setShowModal] = React.useState(false); // Password

	// Toggle modal
	const toggleModal = () => {

		// Set overflow
		// Treat showModal as the opposite of what it is
		// If the modal is being closed, set overflow to 'hidden'
		if (showModal) {
			document.body.style.overflow = 'inherit';
		}
		// Else if the modal is being opened, set overflow to 'hidden'
		else {
			document.body.style.overflow = 'hidden';
		}

		// Set showModal
		setShowModal(!showModal);
	};

	return (
		<>
			<div id='modalToggleButton' onClick={toggleModal}>
				<Icon id='modalToggleButtonIcon' icon='mdi-xbox-controller-menu' />
			</div>

			<Modal showModalToggle={toggleModal} show={showModal} />
		</>
	);
}
