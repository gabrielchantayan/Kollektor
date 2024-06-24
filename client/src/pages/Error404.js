import React, { useEffect } from 'react';
import { getLocale } from '../assets/js/locale.js';
import { applyFont, applyTheme } from '../assets/js/themes.js';

export default function Error404(params) {
	useEffect(() => {
		applyTheme();
		applyFont();
		document.documentElement.lang = getLocale();
	}, []);

	return <div id='mainContainer'>
        
        <h1>404</h1>
    </div>;
}
