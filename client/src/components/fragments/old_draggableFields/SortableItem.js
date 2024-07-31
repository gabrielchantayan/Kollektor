import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Icon } from '@iconify/react';

/**
 * SortableItem component.
 *
 * This component renders a draggable item with a drag handle and content.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.id - The id of the item.
 * @param {ReactNode} props.content - The content to be displayed inside the item.
 * @return {ReactElement} The rendered SortableItem component.
 */
export function SortableItem(props) {
	// Use the useSortable hook to get the necessary attributes and listeners for drag-and-drop functionality.
	const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: props.id });

	// Generate the style object for the item.
	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	};

	/**
	 * Render the SortableItem component.
	 *
	 * @return {ReactElement} The rendered SortableItem component.
	 */
	return (
		<div className='draggableField' ref={setNodeRef} style={style} {...attributes}>
			{/* Render the drag handle */}
			<div className='draggableFieldControls'>
				<div className='draggableFieldControl drag'>
					<Icon icon='mdi:drag' {...listeners} />
				</div>
				<div className='draggableFieldControl close' onClick={props.handleRemove}>
					<Icon icon='mdi:close' />
				</div>
			</div>

			{/* Render the content */}
			<div className='draggableFieldContent'>{props.content}</div>
		</div>
	);
}
