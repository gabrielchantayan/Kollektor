import React from 'react';
import { t } from '../../../assets/js/locale';

/**
 * DataTypeSelection component.
 *
 * This component renders a select dropdown for selecting a data type.
 *
 * @param {Object} props - The properties object.
 * @param {Function} props.handleDataTypeChange - The function to be called when the data type is changed.
 * @param {string} props.selectedDataType - The currently selected data type.
 * @return {ReactElement} The rendered DataTypeSelection component.
 */
export default function DataTypeSelection({ handleDataTypeChange, selectedDataType }) {
	// List of supported data types
	const dataTypeList = ['text', 'number', 'color', 'currency', 'date', 'boolean', 'image'];
	// Array to store the select options
	const dataTypeSelect = [];

	// Sort the data types alphabetically based on the current locale
	dataTypeList.sort((a, b) => t(`dataType_${a}`).localeCompare(t(`dataType_${b}`)));

	// Generate the select options
	for (const [dataType] of Object.entries(dataTypeList)) {
		dataTypeSelect.push(
			<option value={dataTypeList[dataType]} key={dataTypeList[dataType]}>
				{t(`dataType_${dataTypeList[dataType]}`)}
			</option>
		);
	}

	// Render the component
	return (
		<select
			className='small'
			onChange={handleDataTypeChange}
			defaultValue={selectedDataType}
			id='fontButtonSection'>
			<option value='' disabled selected>
				{t('selectDataType')}
			</option>
			{dataTypeSelect}
		</select>
	);
}
