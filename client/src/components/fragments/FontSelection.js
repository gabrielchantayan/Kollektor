import React from 'react';
import { t } from '../../assets/js/locale';
import { getFonts } from '../../assets/js/themes';

export default function FontSelection({handleFontChange, selectedFont}) {

	let fontList = getFonts();
	let fontSelect = [];


	for (const [font, name] of Object.entries(fontList)) {
		fontSelect.push(<option value={font}>{t(`font_${font}`)}</option>);
	}


	return (
		<select onChange={handleFontChange} defaultValue={selectedFont} id='fontButtonSection'>
			{fontSelect}
		</select>
	);
}
