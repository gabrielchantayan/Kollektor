import React, { useState } from 'react';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import {
	arrayMove,
	SortableContext,
	sortableKeyboardCoordinates,
	verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import { SortableItem } from './SortableItem.js';
import AddCollectionFields from './AddCollectionFields.js';

/**
 * Component for adding and reordering collection fields.
 * @param {Object} fieldData - The field data object.
 * @param {Function} handleSetFieldData - The function to set field data.
 * @returns {React.Component} The AddCollectionFieldsContainer component.
 */
export default function AddCollectionFieldsContainer({ fieldData, handleSetFieldData }) {
	// State for storing the items in the list
	const [items, setItems] = useState([1, 2, 3]);

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
	function handleDragEnd(event) {
		const { active, over } = event;

		if (active.id !== over.id) {
			setItems((items) => {
				const oldIndex = items.indexOf(active.id);
				const newIndex = items.indexOf(over.id);

				return arrayMove(items, oldIndex, newIndex);
			});
		}
	}

	return (
		<DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
			{/* Context for sorting */}
			<SortableContext items={items} strategy={verticalListSortingStrategy}>
				{/* Map over the items and render a SortableItem component for each */}
				{items.map((id) => (
					<SortableItem key={id} id={id} content={<AddCollectionFields />} />
				))}
			</SortableContext>
		</DndContext>
	);
}
