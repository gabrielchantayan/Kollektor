import React from 'react';
import { t } from '../../assets/js/locale';
import Button from '../fragments/Button';
import FloatingLabelInput from '../fragments/FloatingLabelInput';
import StatusMessage from '../fragments/StatusMessage';
import { post } from '../../assets/js/api.js';

export default function ModalAdminLogin({changeTab}) {
	const [password, setPassword] = React.useState();
	const [loading, setLoading] = React.useState(false);
	const [message, setMessage] = React.useState('');
	const [showMessage, setShowMessage] = React.useState(false);
	const [success, setSuccess] = React.useState(false);


	const login = async () => {
		setShowMessage(false);
		setLoading(true);

		const loginRet = await post(['accounts','login'], { password: password })

		setLoading(false);

		if (loginRet.success) {
			changeTab('adminSettings');
		}
		else {
			setShowMessage(true);
			setSuccess(false);
			setMessage(loginRet.message);
			console.log(loginRet)
		}
	}

	return (
		<div id='modalBody' className='center'>
			<div id='adminLoginScreen' className='centerContentsV'>
				<form
					onSubmit={(event) => {
						event.preventDefault();
						login();
					}}>
					<div className='centerContentsV'>
						<FloatingLabelInput
							label={t('password')}
							type='password'
							value={password}
							onChange={setPassword}
						/>

						<Button label={t('login')} endIcon={'mdi:login-variant'} />
					</div>
				</form>

				<StatusMessage loading={loading} showMessage={showMessage} success={success} message={message} />
			</div>
		</div>
	);
}
