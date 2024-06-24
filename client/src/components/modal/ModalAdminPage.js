import React, { useEffect } from 'react';
import { t } from '../../assets/js/locale';
import { getThemeList } from '../../assets/js/themes';
import { defaultConfig, setDefault } from '../../assets/js/utils';
import Button from '../fragments/Button';
import FontSelection from '../fragments/FontSelection';
import LanguageSelection from '../fragments/LanguageSelection';
import ThemeSelectionDropdown from '../fragments/ThemeSelectionDropdown';

export default function ModalAdminPage({ changeTab }) {
	const [selectedLang, setSelectedLang] = React.useState(defaultConfig.defaultLocale || 'en-US');
	const [selectedFont, setSelectedFont] = React.useState(defaultConfig.defaultFont || 'inter');
	const [selectedTheme, setSelectedTheme] = React.useState(defaultConfig.defaultTheme || 'gazette');
	const [themeOptions, setThemeOptions] = React.useState([]);

	const handleLanguageChange = (e) => {
		setDefault('defaultLocale', e.target.value);
		setSelectedLang(e.target.value);
	};

	/**
	 * Handles change of the font selection dropdown
	 *
	 * @param {Event} e the change event of the select element
	 */
	const handleFontChange = (e) => {
		// Set the default font option in the settings
		setDefault('defaultFont', e.target.value);
		// Update the selected font variable
		setSelectedFont(e.target.value);
	};

	const handleThemeChange = (e) => {
		// Set the default font option in the settings
		setDefault('defaultTheme', e.target.value);
		// Update the selected font variable
		setSelectedTheme(e.target.value);
	};


	useEffect(() => {}, []);

	return (
		<div id='modalBody' className='center'>
			<div className='halfWidthContainer'>
				<div className='halfWidth'>
					<div className='optionSection'>
						<p className='optionHeader'>{t('defaultLanguage')}</p>

						<LanguageSelection handleLanguageChange={handleLanguageChange} selectedLang={selectedLang} />
					</div>

					<div className='optionSection'>
						<p className='optionHeader'>{t('defaultTheme')}</p>
						<ThemeSelectionDropdown handleThemeChange={handleThemeChange} selectedTheme={selectedTheme} />
					</div>

					<div className='optionSection'>
						<p className='optionHeader'>{t('defaultFont')}</p>
						<FontSelection handleFontChange={handleFontChange} selectedLang={selectedFont} />
					</div>
				</div>
				<div className='halfWidth'>
					{/* <div className='optionSection'>
						<Button
							clickFunction={() => {
								changeTab('editApps');
							}}
							startIcon={'mdi:view-dashboard-edit'}
							label={t('editApps')}
						/>
					</div>

					<div className='optionSection'>
						<Button
							clickFunction={() => {
								changeTab('editBookmarks');
							}}
							startIcon={'mdi:book-edit'}
							label={t('editBookmarks')}
						/>
					</div> */}
				</div>
			</div>
		</div>
	);
}
