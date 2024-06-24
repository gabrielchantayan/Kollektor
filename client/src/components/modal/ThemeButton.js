import { Icon } from '@iconify/react';
import { t } from '../../assets/js/locale';
import { setTheme } from '../../assets/js/themes';

export default function ThemeButton(props) {

	const navigate = () => {
		window.location.href = props.data.url;
	};

	return (
		<div
			className='themeButton'
			style={{
				backgroundColor: props.data.colors.background,
				border: `0.4em solid ${props.data.colors.accent}`
			}}
			
			onClick={() => {setTheme(props.themeName)}}
			>

			
			<p style={{ color: props.data.colors.primary }}>{t(`theme_${props.themeName}`)}</p>
		</div>
	);
}
