import React from 'react';
import { getLocales, t } from '../../assets/js/locale';
import LanguageSelection from '../fragments/LanguageSelection';

export default function CurrentLanguageSelection(props) {
	let selectedLang = localStorage.getItem('locale') || 'en-US';

	const handleLanguageChange = (e) => {
		localStorage.setItem('locale', e.target.value);
		window.location.reload();
	};

	return (
		<div className='halfWidth'>
			<h1 className='modalSectionHeader'>{t('langSettings')}</h1>
			<LanguageSelection handleLanguageChange={handleLanguageChange} selectedLang={selectedLang} />
		</div>
	);
}
