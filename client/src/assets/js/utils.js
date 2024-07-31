import { get, post } from './api';
import { getLocale } from './locale';


const protocolRegex = /^.*?:\/\//

// let defaultConfig = get(['options', 'getOptions']).then((data) => data.data) || {
// 	defaultLocale: 'fr-FR',
// 	defaultTheme: 'blackboard',
// };

let defaultConfig = await get(['options', 'getOptions']).then((data) => data.data);

// Gets a cookie
const getCookie = (key) => {
	var b = document.cookie.match('(^|;)\\s*' + key + '\\s*=\\s*([^;]+)');
	return b ? b.pop() : '';
};

// import * as locale from './localeManager.js'; // Import Locale manager



/**
 *
 * @param {Array} fileData The filedata in [an array]
 * @param {String} fileName The name of the file to download
 * @param {String} fileType The file type
 */
const makeFile = (fileData, fileName, fileType) => {
	let tempFile = new File(fileData, fileName, { type: fileType });
	let fileURL = window.URL.createObjectURL(tempFile);

	const a = document.createElement('a');
	a.style = 'display: none';
	document.body.appendChild(a);
	a.href = fileURL;
	a.download = fileName;
	a.click();
	window.URL.revokeObjectURL(fileURL);
};

/**
 * Strips a protocol from a link
 * @param {String} link Link to strip from
 * @returns {String}
 */
const stripProtocol = (link) => {
	return link.replace(protocolRegex, '');
}

// Check if URL is valid
const isValidUrl = (urlString) => {
	var urlPattern = new RegExp(
		'^(https?:\\/\\/)?' + // validate protocol
			'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
			'((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
			'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
			'(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
			'(\\#[-a-z\\d_]*)?$',
		'i'
	); // validate fragment locator
	return !!urlPattern.test(urlString);
};


const setDefault = async (key, value) => {
	
	await post(['options', 'updateOptions'], { key: key, value: value });

}

let init = async () => {
	const config = await get(['options', 'getOptions']).then((data) => data.data)
	defaultConfig = config
}

init ();

/**
 * Convert a string to a URL slug.
 *
 * @param {string} str - The string to convert.
 * @return {string} The converted URL slug.
 */
const toURLSlug = (str) => {
  // Convert the string to a string.
  // Trim any leading or trailing whitespace.
  // Normalize the string using the 'NFD' normalization form.
  // Remove any characters with diacritical marks.
  // Replace any characters that are not alphanumeric or hyphens with hyphens.
  // Convert the string to lowercase.
  return str
    .toString()
    .trim()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]/g, '-')
    .toLowerCase();
}



export { getCookie, makeFile, stripProtocol, isValidUrl, setDefault, toURLSlug, defaultConfig };
