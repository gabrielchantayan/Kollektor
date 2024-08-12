import { t } from "../assets/js/locale";

export default function AppBar() {
	
	return (
		<div id='appBar'>
			<div id='appTitle'>
				<h1 onClick={() => window.location.href = '/'}>{t('kollektor')}</h1>
			</div>
			<div id="accountButton">
				<h1>{t('login')}</h1>
			</div>
		</div>
	);
}
