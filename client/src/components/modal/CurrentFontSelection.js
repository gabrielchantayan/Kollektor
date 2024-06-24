import React from 'react';
import { getLocales, t } from '../../assets/js/locale';
import LanguageSelection from '../fragments/LanguageSelection';
import FontSelection from '../fragments/FontSelection';
import { setFont } from '../../assets/js/themes';

export default function CurrentFontSelection(props) {
	let selectedFont = localStorage.getItem('font') || 'inter';

	const handleFontChange = (e) => {
		setFont(e.target.value);
	};

	return (
		<div className='halfWidth'>
			<h1 className='modalSectionHeader'>{t('fontSettings')}</h1>
			<FontSelection handleFontChange={handleFontChange} selectedFont={selectedFont} />
		</div>
	);
}
