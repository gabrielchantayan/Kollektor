import { useState } from "react";


export default function FloatingLabelInput({type="text", label, value, onChange}) {
	
	const handleChange = (e) => {
		onChange(e.target.value)
	}

	return (
		<div className='floatingLabelInputContainer'>
			<input type={type} value={value} onChange={handleChange} />
			<label className={value && 'filled'}>{label}</label>
		</div>
	);


}
