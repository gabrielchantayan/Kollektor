import React, { useEffect } from 'react';
import { getLocale } from '../assets/js/locale.js';
import { applyFont, applyTheme } from '../assets/js/themes.js';
import IconLink from '../components/gabeUI/IconLink.js';

export default function PageOne(params) {
	useEffect(() => {
		applyTheme();
		applyFont();
		document.documentElement.lang = getLocale();
	}, []);

	return <div id='mainContainer'>
		<div id="mainPage">
		<h1>Collections</h1>

		<div id="collectionList">
			<ul>

				<li><IconLink icon='mdi:coin' string='Coins' url='/collection/coins' /></li>
				<li><IconLink icon='mdi:money' string="Banknotes" url='/collection/banknotes' /></li>
				<li><IconLink icon='mdi:stamp' string='Stamps' url='/collection/stamps' /></li>

			</ul>
		</div>

		</div>
	</div>;
}
