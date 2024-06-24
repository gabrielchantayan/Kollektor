import { Icon } from '@iconify/react';
import React, { useEffect } from 'react';
import { t } from '../../assets/js/locale';
import ModalAdminLogin from './ModalAdminLogin';
import ModalOptions from './ModalOptions';
import ModalAdminPage from './ModalAdminPage';
import ModalEditApps from './ModalEditApps';
import { get } from '../../assets/js/api';

export default function Modal(props) {
	const [tab, setTab] = React.useState('options'); // Password
	const [history, setHistory] = React.useState(['options']);
	const [updateInfo, setUpdateInfo] = React.useState({ updateAvailable : false});

	const handleChildElementClick = (e) => {
		e.stopPropagation();
		// Do other stuff here
	};

	const github = () => {
		window.location.href = 'https://github.com/gabrielchantayan/toun-2';
	};

	const changeTab = (tab) => {
		setHistory([...history, tab]);
		setTab(tab);
	};

	/**
	 * Handles the close event of the modal.
	 *
	 * It closes the modal and resets the tab to 'options' if the current tab is not 'options'.
	 */
	const handleModalClose = () => {
		// Call the showModalToggle function from props to toggle the modal visibility
		props.showModalToggle();

		// If the current tab is not 'options', set the tab to 'options'
		if (tab !== 'options') {
			setTab('options');
		}
	};

	/**
	 * Handles the back button click in the modal.
	 *
	 * Sets the tab to the previous tab in the history, or to 'options' if there
	 * is no previous tab. Updates the history by removing the current tab.
	 */
	const handleModalTabBack = () => {
		// Get the previous tab from the history, or 'options' if there is no previous tab
		const previousTab = history[history.length - 2] || 'options';

		// Update the tab and the history
		setTab(previousTab);
		setHistory(history.slice(0, -1));
	};

	const checkForUpdates = async () => {
		const ret = await get(['options', 'checkForUpdates']);
		setUpdateInfo(ret.data);
	};

	useEffect(() => {
		checkForUpdates();
	}, []);

	return (
		props.show && (
			<div id='modalBackground' onClick={handleModalClose}>
				<div id='modal' onClick={handleChildElementClick}>
					<div id='modalHeader'>
						<h1>{t(tab)}</h1>

						{tab == 'options' ? (
							<Icon className='icon' onClick={handleModalClose} icon='mdi:close' />
						) : (
							<div>
								<Icon className='icon' onClick={handleModalTabBack} icon='mdi:arrow-back' />
								<Icon className='icon' onClick={handleModalClose} icon='mdi:close' />
							</div>
						)}
					</div>

					<div className='mainTab'>
						{tab === 'options' ? (
							<ModalOptions />
						) : tab === 'adminLogin' ? (
							<ModalAdminLogin changeTab={changeTab} />
						) : tab === 'adminSettings' ? (
							<ModalAdminPage changeTab={changeTab} />
						) : tab === 'editApps' ? (
							<ModalEditApps changeTab={changeTab} />
						) : (
							''
						)}
					</div>

					<div id='modalFooter'>

						{updateInfo.updateAvailable && (
							<div
								className='modalFooterContainer'
								onClick={() => {
									window.location.href = 'https://github.com/gabrielchantayan/toun-2';
								}}>
								<Icon className='icon' icon='mdi:package-variant' />
								<a className='modalFooterText' href='#'>
									{t('updateAvailable').replace('{{old}}', updateInfo.version).replace('{{new}}', updateInfo.latestVersion)}
								</a>
							</div>
						)}

						<div className='modalFooterContainer' onClick={github}>
							<Icon className='icon' icon='jam:github' />
							<a className='modalFooterText' href='https://github.com/gabrielchantayan/toun-2'>
								Github
							</a>
						</div>

						{tab == 'options' && (
							<div
								className='modalFooterContainer'
								onClick={() => {
									changeTab('adminLogin');
								}}>
								<Icon className='icon' icon='mdi:account-supervisor-circle' />
								<a className='modalFooterText' href='#'>
									{t('adminLogin')}
								</a>
							</div>
						)}
					</div>
				</div>
			</div>
		)
	);
}
