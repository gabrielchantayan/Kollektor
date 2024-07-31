import React, { useEffect, useState } from 'react';
import { getLocale, t } from '../assets/js/locale.js';
import { applyFont, applyTheme } from '../assets/js/themes.js';
import { toURLSlug } from '../assets/js/utils.js';
import AddCollectionFieldsContainer from '../components/createCollection/draggableFields/AddCollectionFieldsContainer.js';
import Button from '../components/fragments/Button.js';
import FloatingLabelInput from '../components/fragments/FloatingLabelInput.js';
import StatusMessage from '../components/fragments/StatusMessage.js';

export default function AddCollection() {
	const [collectionName, setCollectionName] = useState(''); // The name of the collection
	const [collectionSlug, setCollectionSlug] = useState(''); // The slug of the collection
	const [customSlug, setCustomSlug] = useState(false); // Whether the slug is custom or not
	const [fieldData, setFieldData] = useState([
		{ key: 0, uuid: 0, name: t('placeholder_itemName'), dataType: 'text' },
		{ key: 1, uuid: 1, name: t('placeholder_purchasePrice'), dataType: 'currency' },
	]); // The data for the fields in the collection. Comes default with Name and Purchase Price

	const [loading, setLoading] = useState(false); // Whether the page is loading or not
	const [showMessage, setShowMessage] = useState(false); // Whether to show the message
	const [success, setSuccess] = useState(false); // Whether the message is a success message
	const [message, setMessage] = useState(''); // The message to display

	/**
	 * Handles changes to the collection name and updates the slug accordingly.
	 *
	 * @param {string} value - The new value of the collection name.
	 * @return {void}
	 */
	const handleSetCollectionName = (value) => {
		setCollectionName(value);
		// If the slug is not custom, update the slug to be the same as the collection name.
		if (!customSlug) {
			setCollectionSlug(value.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase());
		}
	};

	/**
	 * Handles changes to the collection slug.
	 *
	 * If the slug is empty, resets the slug to the collection name and sets the customSlug flag to false.
	 * Otherwise, sets the customSlug flag to true.
	 *
	 * @param {string} value - The new value of the collection slug.
	 * @return {void}
	 */
	const handleSetCollectionSlug = (value) => {
		// Set the collection slug to the slugified version of the input value.
		setCollectionSlug(toURLSlug(value));

		// If the slug is empty, reset the slug to the collection name and set the customSlug flag to false.
		if (value.length === 0) {
			setCustomSlug(false);
			setCollectionSlug(toURLSlug(collectionName));
		}
		// Otherwise, set the customSlug flag to true.
		else {
			setCustomSlug(true);
		}
	};

	/**
	 * Handles changes to the field data.
	 *
	 * @param {Array} value - The new value of the field data.
	 * @return {void}
	 */
	const handleSetFieldData = (value) => {
		// Set the field data to the provided value.
		setFieldData(value);
	};

	useEffect(() => {
		applyTheme();
		applyFont();
		document.documentElement.lang = getLocale();
	}, []);

	/**
	 * Handles the event when the "Add Field" button is clicked.
	 *
	 * @param {Event} e - The event object.
	 * @return {void}
	 */
	const handleAddField = (e) => {
		e.preventDefault();

		// Create a new field object with a unique key and uuid, empty name and dataType.
		// The key and uuid are generated using the current timestamp.
		const newField = {
			key: `${Date.now()}`,
			uuid: `${Date.now()}`,
			name: '',
			dataType: '',
		};

		// Add the new field to the fieldData array using the spread operator.
		// The spread operator creates a new array with the existing elements of fieldData
		// and the new field appended to the end.
		setFieldData([...fieldData, newField]);
	};

	/**
	 * Handles the event when the "Create Collection" button is clicked.
	 *
	 * @param {Event} e - The event object.
	 * @return {void}
	 */
	const handleCreateCollection = (e) => {
		e.preventDefault();

		// If already loading, return
		if (loading) return;

		// Reset the message
		setMessage('');
		setShowMessage(false);

		// Validate the data entered in the form
		if (!validateData()) {
			// If the data is invalid, show the error message and return
			setShowMessage(true);
			setSuccess(false);
			return;
		}

		// Set the loading state to true
		setLoading(true);




		
	};

	/**
	 * Validates the data entered in the form.
	 *
	 * @return {boolean} - Returns true if all fields are valid, false otherwise.
	 */
	const validateData = () => {
		// Check if the collection name is empty
		if (collectionName.length === 0) {
			setMessage('error_fillCollectionName');
			return false;
		}

		// Check if the collection slug is empty
		if (collectionSlug.length === 0) {
			setMessage('error_fillCollectionSlug');
			return false;
		}

		// Check if there exists at least one field
		if (fieldData.length === 0) {
			setMessage('error_addFields');
			return false;
		}

		// Iterate through the fields
		for (const field of fieldData) {
			// Check if the field name is empty
			if (field.name.length === 0) {
				setMessage('error_fillFieldNames');
				return false;
			};

			// Check if the field data type is empty
			if (field.dataType.length === 0) {
				setMessage('error_fillFieldDataTypes');
				return false;
			};

			// Check if the field UUID or key is empty
			if (field.uuid.length === 0 || field.key.length === 0) {
				return false;
			};
		}

		// If all fields are valid, return true
		return true;
	};

	return (
		<div id='mainContainer'>
			<div id='mainPage'>
				<h1 className='pageTitle'>{t('addCollection')}</h1>

				<form action=''>
					<div>
						<FloatingLabelInput
							label={t('collectionName')}
							value={collectionName}
							onChange={handleSetCollectionName}
							size='medium'
						/>

						<FloatingLabelInput
							label={t('collectionSlug')}
							value={collectionSlug}
							onChange={handleSetCollectionSlug}
							size='small'
						/>

						<h2>{t('fields')}</h2>
						<AddCollectionFieldsContainer fieldData={fieldData} handleSetFieldData={handleSetFieldData} />

						<Button
							size='small'
							color='accent'
							noBorder
							startIcon='mdi:plus'
							label={t('addField')}
							clickFunction={handleAddField}
						/>

						<Button
							size='small'
							color='primary'
							noBorder
							startIcon='material-symbols:book-5'
							label={t('createCollection')}
							clickFunction={handleCreateCollection}
						/>
					</div>

					<StatusMessage
						loading={loading}
						success={success}
						showMessage={showMessage}
						message={message}
						color='primary'
					/>
				</form>
			</div>
		</div>
	);
}
