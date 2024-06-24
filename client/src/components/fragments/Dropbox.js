import { Icon } from '@iconify/react';
import React from 'react';


export default function Dropbox({ startIcon, endIcon, label, content }) {


    const [active, setActive] = React.useState(false);
    const [maxHeight, setMaxHeight] = React.useState('0px');
    const ref = React.useRef(null);

    const toggleActive = () => {

        if(!active) {
            setMaxHeight(ref.current.scrollHeight);
            console.log(ref)
        } else {
            setMaxHeight('0px');
        }


        setActive(!active);
    }

	return (
		<div className='dropboxContainer'>
			<div className='dropboxHeader' onClick={toggleActive}>
				<div className='dropboxHeaderContents'>
					{startIcon && <Icon className='startIcon' icon={startIcon} />}
					{label}
					{endIcon && <Icon className='endIcon' icon={endIcon} />}
				</div>
			</div>

			<div
				ref={ref}
				style={{ maxHeight: maxHeight }}
				className={active ? 'dropboxContent active' : 'dropboxContent'}>
				{content}
			</div>
		</div>
	);
}
