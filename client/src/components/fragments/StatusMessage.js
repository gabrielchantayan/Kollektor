import * as React from 'react';
import { t } from '../../assets/js/locale';

/**
 * Renders a status message component with a loading bar and an error message.
 *
 * @param {Object} props - The properties for the component.
 * @param {boolean} [props.loading=false] - Whether the component is in a loading state.
 * @param {boolean} [props.showMessage=false] - Whether to show the message.
 * @param {boolean} [props.showHeader=true] - Whether to show the header.
 * @param {boolean} [props.success=false] - Whether the message is a success message.
 * @param {string} props.message - The message to display.
 * @return {JSX.Element} The rendered status message component.
 */
const StatusMessage = ({ loading = false, showMessage = false, showHeader = true, success = false, message }) => (
	<div className='statusMessageContainer'>
		{/* Loading bar */}
		{loading && (
			<div className='loadingBarContainer'>
				<div className='loadingBarBackground'></div>
				<div className='loadingBarValue'></div>
			</div>
		)}

		{/* Error */}
		{showMessage && (
			<div className='statusMessage'>
				{showHeader && (
					<p className={success ? 'success result' : 'error result'}>
						{success ? t('statusMessageSuccess') : t('statusMessageError')}
					</p>
				)}
				<p className='message'>{t(message)}</p>
			</div>
		)}
	</div>
);

export default StatusMessage;
