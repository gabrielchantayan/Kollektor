import React, { useState } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Icon } from '@iconify/react';
import { t } from '../../../assets/js/locale';
import DataTypeSelection from '../../fragments/selections/DataTypeSelection';

/**
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
	// State hooks to manage the column name and selected data type
	const [value, setValue] = useState(props.data.name);
	const [selectedDataType, setSelectedDataType] = useState(props.data.dataType);

	/**
	 * Handles the change event of the data type selection.
	 * Updates the selected data type and calls the handleFieldUpdate function.
	 *
	 * @param {Object} e - The event object.
	 */
	const handleDataTypeChange = (e) => {
		setSelectedDataType(e.target.value);
		props.handleFieldUpdate(props.uuid, 'dataType', e.target.value);
	};

	/**
	 * Handles the change event of the column name input.
	 * Updates the column name and calls the handleFieldUpdate function.
	 *
	 * @param {Object} e - The event object.
	 */
	const handleColumnNameChange = (e) => {
		setValue(e.target.value);
		props.handleFieldUpdate(props.uuid, 'name', e.target.value);
	};

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
				<div className='draggableFieldControl close' onClick={() => props.handleRemoveField(props.uuid)}>
					<Icon icon='mdi:close' />
				</div>
			</div>

			{/* Render the content */}
			<div className='draggableFieldContent'>
				<div className='draggableField'>
					{/* Render the column name input */}
					<input
						className='small'
						type='text'
						placeholder={t('columnName')}
						value={value}
						onChange={handleColumnNameChange}
					/>
					{/* Render the data type selection */}
					<DataTypeSelection
						selectedDataType={selectedDataType}
						handleDataTypeChange={handleDataTypeChange}
					/>
				</div>
			</div>
		</div>
	);
}
