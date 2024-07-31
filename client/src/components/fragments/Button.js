import { Icon } from '@iconify/react';

/**
 * A button component that can have an icon at the start, end or both.
 *
 * @param {Object} props - The props object containing the following:
 * @param {string} props.startIcon - The icon to show at the start of the button.
 * @param {string} props.endIcon - The icon to show at the end of the button.
 * @param {string} props.label - The label to show on the button.
 * @param {function} props.clickFunction - The function to call when the button is clicked.
 * @param {string} [props.size='medium'] - The size of the button.
 * @param {string} [props.color='primary'] - The color of the button.
 * @param {boolean} [props.noBorder=false] - Whether to remove the border from the button.
 * @returns {JSX.Element} - The button component.
 */
export default function Button({ startIcon, endIcon, label, clickFunction, size = 'medium', color = 'primary', noBorder= false }) {
	return (
		// The button element
		<button 
			className={`${size} color_${color} ${noBorder ? 'noBorder' : ''}`} 
			onClick={clickFunction}
		>
			{/* The start icon if provided */}
			{startIcon && <Icon className='startIcon' icon={startIcon} />}
			{/* The label */}
			{label}
			{/* The end icon if provided */}
			{endIcon && <Icon className='endIcon' icon={endIcon} />}
		</button>
	);
}
