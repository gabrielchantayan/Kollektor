import React, { useEffect } from 'react';
import FloatingLabelInput from '../../fragments/FloatingLabelInput';

export default function AppInfo({ name, uri, icon }) {
	const [sName, setSName] = React.useState(name);
	const [sUri, setSUri] = React.useState(uri);
	const [sIcon, setSIcon] = React.useState(icon);

	const setupEntries = () => {
		// entries.forEach((element) => {
		// });
	};

	useEffect(() => {
		setupEntries();
	}, []);

	return (
		<div className='appInfo'>
			<FloatingLabelInput label={'name'} value={sName} onChange={setSName} />
			<FloatingLabelInput label={'uri'} value={sUri} onChange={setSUri} />
			<FloatingLabelInput label={'icon'} value={sIcon} onChange={setSIcon} />
		</div>
	);
}
