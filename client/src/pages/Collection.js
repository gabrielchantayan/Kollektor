import React, { useEffect } from 'react';
import { getLocale } from '../assets/js/locale.js';
import { applyFont, applyTheme } from '../assets/js/themes.js';
import IconLink from '../components/gabeUI/IconLink.js';

export default function Collection(params) {

    const [collectionName, setCollectionName] = React.useState('Collection Name');

	useEffect(() => {
		applyTheme();
		applyFont();
		document.documentElement.lang = getLocale();
	}, []);

	return (
		<div id='mainContainer'>
			<div id='mainPage'>
				<h1>{collectionName}</h1>

				<div id='collectionList'>
					<ul>
						<li>
							<IconLink icon='mdi:home' string='Home' url='/' />
						</li>

					</ul>
				</div>
			</div>
		</div>
	);
}
