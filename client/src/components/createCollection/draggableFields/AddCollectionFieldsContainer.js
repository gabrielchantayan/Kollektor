import { DndContext, KeyboardSensor, PointerSensor, closestCenter, useSensor, useSensors } from '@dnd-kit/core';
import {
	SortableContext,
	arrayMove,
	sortableKeyboardCoordinates,
	verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import React, { useState } from 'react';

import { SortableItem } from './SortableItem.js';

/**
 * Component for adding and reordering collection fields.
 * @param {Object} props - The component props.
 * @param {Object} props.fieldData - The field data object.
 * @param {Function} props.handleSetFieldData - The function to set field data.
 * @returns {React.Component} The AddCollectionFieldsContainer component.
 */
export default function AddCollectionFieldsContainer({ fieldData, handleSetFieldData }) {
	// State for storing the items in the list

	// Set up the sensors for drag and drop functionality
	// PointerSensor for mouse or touch input
	// KeyboardSensor for keyboard input
	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates, // Coordinate getter for keyboard input
		})
	);

	/**
	 * Handles the end of a drag event.
	 * Reorders the items in the list if the active item is dragged over a different item.
	 * @param {Object} event - The drag end event.
	 */
	const handleDragEnd = (event) => {
		const { active, over } = event;

		// If the active item and over item are different, update the field data
		if (active.id !== over.id) {
			handleSetFieldData((fieldData) => {
				const oldIndex = fieldData.indexOf(active.id);
				const newIndex = fieldData.indexOf(over.id);

				return arrayMove(fieldData, oldIndex, newIndex);
			});
		}
	};

	/**
	 * Updates a field in the field data array.
	 * @param {string} uuid - The UUID of the field.
	 * @param {string} type - The type of the field.
	 * @param {any} value - The new value of the field.
	 */
	const handleFieldUpdate = (uuid, type, value) => {
		handleSetFieldData((fieldData) => {
			const index = fieldData.findIndex((item) => item.uuid === uuid);
			fieldData[index][type] = value;
			return fieldData;
		});
	};

	/**
	 * Removes a field from the field data array.
	 * @param {string} uuid - The UUID of the field.
	 */
	const handleRemoveField = (uuid) => {
		handleSetFieldData((fieldData) => {
			return fieldData.filter((item) => item.uuid !== uuid);
		});
	};

	return (
		// Context for drag and drop functionality
		<DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
			{/* Context for sorting */}
			<SortableContext items={fieldData} strategy={verticalListSortingStrategy}>
				{/* Map over the items and render a SortableItem component for each */}
				{fieldData.map((id) => (
					<SortableItem
						key={id.key}
						id={id}
						uuid={id.key}
						data={id}
						handleFieldUpdate={handleFieldUpdate}
						handleRemoveField={handleRemoveField}
					/>
				))}
			</SortableContext>
		</DndContext>
	);
}
