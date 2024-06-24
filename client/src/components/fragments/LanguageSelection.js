import React from 'react';
import { getLocales } from '../../assets/js/locale';

export default function LanguageSelection({handleLanguageChange, selectedLang}) {

	let localeList = getLocales();
	let localeSelect = [];

	for (const [locale, name] of Object.entries(localeList)) {
		localeSelect.push(<option value={locale}>{name}</option>);
	}


	return (
		<select onChange={handleLanguageChange} defaultValue={selectedLang} id='themeButtonSection'>
			{localeSelect}
		</select>
	);
}
