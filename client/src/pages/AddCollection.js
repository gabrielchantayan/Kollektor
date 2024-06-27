import React, { useEffect, useState } from 'react';
import { getLocale, t } from '../assets/js/locale.js';
import { applyFont, applyTheme } from '../assets/js/themes.js';
import IconLink from '../components/gabeUI/IconLink.js';
import { useParams } from 'react-router-dom';
import FloatingLabelInput from '../components/fragments/FloatingLabelInput.js';

export default function AddCollection() {
	const [collectionName, setCollectionName] = useState('');
	const [collectionSlug, setCollectionSlug] = useState('');
	const [customSlug, setCustomSlug] = useState(false);

	const handleSetCollectionName = (value) => {
		setCollectionName(value);
		if (!customSlug) {
			setCollectionSlug(value.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase());
		}
	};

	const handleSetCollectionSlug = (value) => {
		setCollectionSlug(value.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase());
		if (value.length === 0) {
			setCustomSlug(false);
			setCollectionSlug(collectionName.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase());
		} else {
			setCustomSlug(true);
		}
	};

	useEffect(() => {
		applyTheme();
		applyFont();
		document.documentElement.lang = getLocale();
	}, []);

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
					</div>
				</form>
			</div>
		</div>
	);
}
