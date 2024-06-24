import React, { useEffect } from 'react';
import { tNoBracket } from '../../../assets/js/locale';
import Dropbox from '../../fragments/Dropbox';
import OrderableList from '../OrderableList';

export default function AppDropdown({ name, entries }) {
	const [apps, setApps] = React.useState([]);

	const setupEntries = () => {
		setApps([]);
        setApps((apps) => [...apps, <OrderableList entries={entries}/>]);

		// entries.forEach((element) => {
		// });
	};

	useEffect(() => {
		setupEntries();
	}, []);

	return <Dropbox label={tNoBracket(name)} content={apps} />;
}
