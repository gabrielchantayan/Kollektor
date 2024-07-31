import React, { useEffect, useState } from 'react';
import { getLocale, t } from '../assets/js/locale.js';
import { applyFont, applyTheme } from '../assets/js/themes.js';
import { toURLSlug } from '../assets/js/utils.js';
import AddCollectionFieldsContainer from '../components/createCollection/draggableFields/AddCollectionFieldsContainer.js';
import Button from '../components/fragments/Button.js';
import FloatingLabelInput from '../components/fragments/FloatingLabelInput.js';

export default function AddCollection() {
	const [collectionName, setCollectionName] = useState(''); // The name of the collection
	const [collectionSlug, setCollectionSlug] = useState(''); // The slug of the collection
	const [customSlug, setCustomSlug] = useState(false); // Whether the slug is custom or not
	const [fieldData, setFieldData] = useState([
		{ key: 0, uuid: 0, name: t('placeholder_itemName'), dataType: 'string' },
		{ key: 1, uuid: 1, name: t('placeholder_purchasePrice'), dataType: 'currency' },
	]); // The data for the fields in the collection

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

	const handleSetFieldData = (value) => {
		setFieldData(value);
	};

	useEffect(() => {
		applyTheme();
		applyFont();
		document.documentElement.lang = getLocale();
	}, []);

	const handleAddField = (e) => {
		e.preventDefault();
		setFieldData([...fieldData, { key: `${Date.now()}`, uuid: `${Date.now()}`, name: '', dataType: '' }]);
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
					</div>
				</form>
			</div>
		</div>
	);
}
