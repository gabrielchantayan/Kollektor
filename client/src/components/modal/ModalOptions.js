import React from 'react';
import CurrentLanguageSelection from './CurrentLanguageSelection';
import SearchOptions from '../SearchOptions';
import ThemeButtonSection from './ThemeButtonSection';
import CurrentFontSelection from './CurrentFontSelection';
import LocaleTest from '../LocaleTest';

export default function ModalOptions() {
	return (
		<div id='modalBody'>
			<ThemeButtonSection />

			<div className='halfWidthContainer'>
				<SearchOptions />

				<div className='fullWidth'>
					<CurrentLanguageSelection />
					<CurrentFontSelection />
				</div>
			</div>
		</div>
	);
}
