import React from 'react';
import { t } from '../../assets/js/locale';
import ThemeButton from './ThemeButton';
import themes from '../../assets/styles/themes.json';
import { getThemeList } from '../../assets/js/themes';

export default function ThemeButtonSection(props) {


    let themeButtons = []

		let themeLocaleMap = getThemeList();

		themeLocaleMap.forEach((theme) => {

			themeButtons.push(<ThemeButton themeName={theme[0]} data={themes['themes'][theme[0]]} />);

		})

        // for (const [key, data] of Object.entries(themes['themes'])){
        //     themeButtons.push(<ThemeButton themeName={key} data={data} />);
        // }


    
	return (
		<div>
			<h1 className='modalSectionHeader'>{t('themes')}</h1>
			<div id='themeButtonSection'>{themeButtons}</div>
		</div>
	);
}
