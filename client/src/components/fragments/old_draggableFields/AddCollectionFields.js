import { useState } from 'react';
import { t } from '../../../assets/js/locale';
import DataTypeSelection from '../../fragments/selections/DataTypeSelection';

export default function AddCollectionFields({ setData }) {
	const [value, setValue] = useState('');

	const [selectedDataType, setSelectedDataType] = useState();



	const handleDataTypeChange = (e) => {
		setSelectedDataType(e.target.value);
		setData('type', e.target.value);
	};

	const handleColumnNameChange = (e) => {
		setValue(e.target.value);
		setData();
	}

	return (
		<div className='draggableField'>
			<input
				className='small'
				type='text'
				placeholder={t('columnName')}
				value={value}
				onChange={handleColumnNameChange}
			/>
			<DataTypeSelection
				selectedDataType={selectedDataType}
				handleDataTypeChange={handleDataTypeChange}
			/>
		</div>
	);
}
