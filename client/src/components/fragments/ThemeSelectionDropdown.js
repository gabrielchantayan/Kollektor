import React from 'react';
import { getThemeList } from '../../assets/js/themes';

export default function ThemeSelectionDropdown({ handleThemeChange, selectedTheme }) {
	let themeSelect = [];

	const makeOptions = () => {
		let themes = getThemeList();

		themes.forEach((theme) => {
			themeSelect.push(<option value={theme[0]}>{theme[1]}</option>);
		});

		return;
	};

	makeOptions();

	return (
		<select onChange={handleThemeChange} defaultValue={selectedTheme} id='themeButtonSection'>
			{themeSelect}
		</select>
	);
}
