import React, { useEffect } from 'react';
import { t } from '../../assets/js/locale';
import AppDropdown from './appEditor/appDropdown';
import Button from '../fragments/Button';

export default function ModalEditApps({ changeTab }) {
	const [apps, setApps] = React.useState({});
	const [cats, setCats] = React.useState([]);

	const getApps = () => {
		setCats([]);
		let lSApps = JSON.parse(localStorage.getItem('apps'))['applications'];

		setApps(lSApps);

		lSApps.forEach((element) => {
			setCats((cats) => [...cats, <AppDropdown name={element['name']} entries={element['entries']} />]);
		});
	};

	const save = async () => {
		
	};

	useEffect(() => {
		getApps();
	}, []);

	return (
		<div id='modalBody'>
			<div className='optionSection'>
				<a href='https://icon-sets.iconify.design/' target='_blank' rel='noreferrer'>
					{t('viewAvailableIcons')}
				</a>

				{cats}
			</div>

			<div className='centerContents'>
				<Button text={t('save')} onClick={() => save()} />
			</div>
		</div>
	);
}
