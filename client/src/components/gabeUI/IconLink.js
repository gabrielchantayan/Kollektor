import IconText from "./IconText";

export default function IconLink({ icon, string, side = 'left', url }) {
	const navigate = () => {
		window.location.href = url;
	};

	return (
		<div className='iconLink' onClick={navigate}>
			<IconText icon={icon} string={string} side={side} />
		</div>
	);
}
