import { Icon } from '@iconify/react';

/**
 * 
 * @param {{startIcon: string, endIcon: string, label: string, clickFunction: () => void}} param0 
 * @returns 
 */
export default function Button({ startIcon, endIcon, label, clickFunction }) {
	return (
		<button onClick={clickFunction}>
			{startIcon && <Icon className='startIcon' icon={startIcon} />}
			{label}
			{endIcon && <Icon className='endIcon' icon={endIcon} />}
		</button>
	);
}
