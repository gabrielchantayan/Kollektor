import { useState } from "react";

/**
 * Renders a floating label input component.
 *
 * @param {Object} props - The properties for the component.
 * @param {string} [props.type="text"] - The type of input.
 * @param {string} props.label - The label for the input.
 * @param {string} props.value - The value of the input.
 * @param {function} props.onChange - The function to call when the input value changes.
 * @return {JSX.Element} The rendered floating label input component.
 */
export default function FloatingLabelInput({type="text", label, value, onChange, size="medium"}) {
	
	const handleChange = (e) => {
		onChange(e.target.value)
	}

	return (
		<div className={`floatingLabelInputContainer ${size}`}>
			<input type={type} value={value} onChange={handleChange} />
			<label className={value && 'filled'}>{label}</label>
		</div>
	);


}
