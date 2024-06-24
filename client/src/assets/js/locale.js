// import locale from '../locale.json' assert { type: `json` };
import locale from '../locale.json'
import { defaultConfig, getCookie } from './utils'


const defaultLocale = defaultConfig.defaultLocale || 'hy-AM';



const getLocales = () => {
    return locale['info']['locales']
}

const getLocale = () => {
    return localStorage.getItem('locale') || defaultLocale;
}


/**
 * Returns the language code of the current locale
 * e.g. 'fr' if the current locale is 'fr-FR'
 * @returns {string} The language code of the current locale
 */
const getLangCode = () => {
    // Returns the language code of the current locale
    // e.g. 'fr' if the current locale is 'fr-FR'
    return localStorage.getItem('locale')
        ? localStorage.getItem('locale').split('-')[0]
        : defaultLocale.split('-')[0];
}


/**
 * Translates text to the current locale
 * If the translation is not found, returns the original text wrapped in brackets
 * @param {string} text - The text to translate
 * @returns {string} The translated text
 */
const t = (text) => {
    // Returns the translation of text in the current locale, or the original text wrapped in brackets if not found
    const localeText = locale[getLocale()][text];

    return localeText || `[[${text}]]`;
}



/**
 * Translates text to the current locale without wrapping it in brackets
 * If the translation is not found, returns the original text
 * @param {string} text - The text to translate
 * @returns {string} The translated text
 */
const tNoBracket = (text) => {
	// Returns the translation of text in the current locale, or text itself if not found
	// This function does NOT wrap the translated text in brackets
	const localeText = locale[getLocale()][text];
	
	return localeText || text;
};


/**
 * Get all locales with their names
 * @param {string} text - Not used
 * @returns {Object} Locales with their names
 */
const getLocaleMappings = (text) => {
	// Returns an object containing all locales with their names
	// e.g. { 'en-US': 'English', 'fr-FR': 'Français', ...}
	return locale['info']['locales'];
};


export { t, tNoBracket, getLocaleMappings, defaultLocale, getLocales, getLocale, getLangCode };