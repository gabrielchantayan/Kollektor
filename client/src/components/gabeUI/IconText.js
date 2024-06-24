import { Icon } from '@iconify/react';

/**
 * Renders an icon and a text side by side.
 * The icon can be placed on the left or right side.
 *
 * @param {Object} props - The properties for the component.
 * @param {string} props.icon - The icon to display.
 * @param {string} props.string - The text to display.
 * @param {string} [props.side="left"] - The side to place the icon.
 * @returns {JSX.Element} The rendered component.
 */
export default function IconText({ icon, string, side="left" }) {

	/**
	 * Renders the icon and text components.
	 *
	 * @returns {JSX.Element} The rendered component.
	 */
	return (
		<div className='iconTextContainer'>
			{/* Render the icon if the side is 'left' */}
			{side === 'left' && (
				<div className='iconTextIcon'>
					<Icon className='icon' icon={icon} />
				</div>
			)}

			<div className='iconTextText'>
				{/* Render the text */}
				<p>{string}</p>
			</div>

			{/* Render the icon if the side is 'right' */}
			{side === 'right' && (
				<div className='iconTextIcon'>
					<Icon className='icon' icon={icon} />
				</div>
			)}
		</div>
	);
}
