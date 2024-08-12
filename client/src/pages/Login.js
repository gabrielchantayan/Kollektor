import React, { useEffect, useState } from 'react';
import { getLocale, t } from '../assets/js/locale.js';
import { applyFont, applyTheme } from '../assets/js/themes.js';
import { post } from '../assets/js/api.js';
import { toURLSlug } from '../assets/js/utils.js';
import AddCollectionFieldsContainer from '../components/createCollection/draggableFields/AddCollectionFieldsContainer.js';
import Button from '../components/fragments/Button.js';
import FloatingLabelInput from '../components/fragments/FloatingLabelInput.js';
import StatusMessage from '../components/fragments/StatusMessage.js';

export default function Login() {

	const [username, setUsername] = useState(''); // The username of the user
	const [password, setPassword] = useState(''); // The password of the user

	const [loading, setLoading] = useState(false); // Whether the page is loading or not
	const [showMessage, setShowMessage] = useState(false); // Whether to show the message
	const [success, setSuccess] = useState(false); // Whether the message is a success message
	const [message, setMessage] = useState(''); // The message to display

	const handleSetUsername = (value) => {
		setUsername(value);
	};
	const handleSetPassword = (value) => {
		setPassword(value);
	};

	const handleLogin = async (e) => {
		e.preventDefault();

		
		setShowMessage(false);
		setSuccess(false);
		setLoading(true);
		

		// Contact the server
		const ret = await post(['accounts', 'login'], {
			username: username,
			password: password
		})

		setLoading(false);

		if (ret.success) {
			// window.location = '/';
		}
		else {
			setShowMessage(true);
			setSuccess(false);
			setMessage(ret.message);
		}



	};
	
		useEffect(() => {
			applyTheme();
			applyFont();
			document.documentElement.lang = getLocale();
		}, []);

	return (
		<div id='mainContainer'>
			<div id='mainPage'>
				<h1 className='pageTitle'>{t('login')}</h1>

				<form action=''>
					<div>
						<FloatingLabelInput
							label={t('username')}
							value={username}
							onChange={handleSetUsername}
							size='medium'
						/>

						<FloatingLabelInput
							label={t('password')}
							value={password}
							onChange={handleSetPassword}
							size='small'
							type='password'
						/>


						<Button
							size='small'
							color='primary'
							noBorder
							startIcon='material-symbols:book-5'
							label={t('login')}
							clickFunction={handleLogin}
						/>
					</div>

					<StatusMessage
						loading={loading}
						success={success}
						showMessage={showMessage}
						message={message}
						color='primary'
					/>
				</form>
			</div>
		</div>
	);
}
