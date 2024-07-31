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
 * @param {Object} fieldData - The field data object.
 * @param {Function} handleSetFieldData - The function to set field data.
 * @returns {React.Component} The AddCollectionFieldsContainer component.
 */
export default function AddCollectionFieldsContainer({ fieldData, handleSetFieldData }) {
	// State for storing the items in the list


	// Set up the sensors for drag and drop functionality
	const sensors = useSensors(
		useSensor(PointerSensor), // Sensor for pointer input (mouse or touch)
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
		console.log(fieldData);

		const { active, over } = event;

		if (active.id !== over.id) {
			handleSetFieldData((fieldData) => {
				const oldIndex = fieldData.indexOf(active.id);
				const newIndex = fieldData.indexOf(over.id);

				return arrayMove(fieldData, oldIndex, newIndex);
			});
		}
	};


	// TODO
	// Function called handleFieldUpdate taking the arguments "key" and "value"
	// It finds the index of the item in the fieldData array and updates the value of the item with the new value
	const handleFieldUpdate = (uuid, type, value) => {
		handleSetFieldData((fieldData) => {
			const index = fieldData.findIndex((item) => item.uuid === uuid);
			console.log(index);
			fieldData[index][type] = value;
			return fieldData;
		});
	}

	const handleRemoveField = (uuid) => {
		handleSetFieldData((fieldData) => {
			return fieldData.filter((item) => item.uuid !== uuid);
		});
	};

	return (
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
