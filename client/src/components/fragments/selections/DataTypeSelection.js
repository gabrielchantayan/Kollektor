import React from 'react';
import { t } from '../../../assets/js/locale';

export default function DataTypeSelection({handleDataTypeChange, selectedDataType}) {

	let dataTypeList = ['text', 'number', 'color', 'currency', 'date', 'boolean', 'image'];
	let dataTypeSelect = [];

	// Sort the data types alphabetically based on the current locale
	dataTypeList.sort((a, b) => t(`dataType_${a}`).localeCompare(t(`dataType_${b}`)));

	for (const [font] of Object.entries(dataTypeList)) {


		dataTypeSelect.push(<option value={dataTypeList[font]}>{t(`dataType_${dataTypeList[font]}`)}</option>);
	}


	return (
		<select className='small' onChange={handleDataTypeChange} defaultValue={selectedDataType} id='fontButtonSection'>
			<option value="" disabled selected>{t('selectDataType')}</option>
			{dataTypeSelect}
		</select>
	);
}
