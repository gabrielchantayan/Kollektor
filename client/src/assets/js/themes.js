import * as api from './api.js';
import themes from '../styles/themes.json';
import { t } from './locale.js';
import { defaultConfig } from './utils.js';

// 'color-background': colors.background,'color-text-pri': colors.primary,'color-text-acc': colors.accent
let colOptions = ['color-background', 'color-primary', 'color-accent'];

const fontMap = {
	inter: 'InterVariable',
	geist: 'GeistMono',
	calson: 'LibreCaslonCondensed',
	polska: 'PoltawskiNowy',
	deustch: 'Texturina',
};

/**
 * Sets theme
 * @param {String} theme Theme
 */
const setTheme = (theme) => {
	localStorage.setItem('theme', theme);
    applyTheme(theme);
};

/**
 * Applies a theme to CSS
 * @param {String} theme Theme to apply
 */
const applyTheme = () => {

    let theme = localStorage.getItem('theme') || defaultConfig.defaultTheme || 'blackboard';

    if (!themes['themes'].hasOwnProperty(theme)) theme = defaultConfig.defaultTheme;

    for (const [key, color] of Object.entries(themes['themes'][theme]['colors'])){
        document.documentElement.style.setProperty(`--color-${key}`, color);
    }

};


/**
 * Gets a list of themes with their names in locale
 * @returns {Array} [[locale name, theme], [locale name, theme], [...]] Theme list
 */
const getThemeList = () => {
    
    // Create an empty array to store the theme locale map
    let themeLocaleMap = [];

    // Iterate through themes
    for (const [key, value] of Object.entries(themes['themes'])) {

        // Push localized theme name to themeLocaleMap
        themeLocaleMap.push([key, t(`theme_${key}`)]);
    }

    // Sort themeLocaleMap by key
    themeLocaleMap.sort((a, b) => a[1].localeCompare(b[1]));
    return themeLocaleMap;

}

const setFont = (font) => {
    localStorage.setItem('font', font);
    applyFont(font);
}

const applyFont = () => {

    let font = localStorage.getItem('font') || defaultConfig.defaultFont || 'inter';

    document.documentElement.style.setProperty(`--font-stack`, fontMap[font]);
}

const getFonts = () => {
    return fontMap;
}

export { setTheme, applyTheme, getThemeList, getFonts, applyFont, setFont };
