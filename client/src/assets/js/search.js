import { getLocale } from './locale';
import { isValidUrl } from './utils';

// Get searchOptions from localStorage
const searchOptions = JSON.parse(localStorage.getItem('searchOptions')) || {
	prefixes: ['$', '~'],
	providers: {},
};

const search = (value) => {
	// Check if value starts with one of the prefixes in searchOptions
	const prefix = searchOptions.prefixes.find((p) => value.startsWith(p));

	// Get the character(s) after the prefix before the query
	const providerPrefix = value.split(' ')[0].substring(prefix.length);

    // Get the query
	const searchQuery = value.substring(prefix.length + providerPrefix.length + 1);

	// If prefix is found
	if (prefix) {
		const prefixMap = JSON.parse(localStorage.getItem('prefixMap'));

        // Check if providerPrefix is in the prefixMap
        if ((providerPrefix in prefixMap)) {
            
                    // Using prefixmap from localStorage, get the URL query
                    const query = prefixMap[providerPrefix]['query'];
                    window.location.href = query + encodeURIComponent(searchQuery);

        } else {
			// Search value in Google
			window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
		}

	} else {
		// Check if the value is a valid URL
		if (isValidUrl(value)) {
			window.location.href = `//${value}`;
			return;
		} else {
			// Search value in Google
			window.location.href = `https://www.google.com/search?q=${encodeURIComponent(value)}`;
		}
	}
};

/**
 * Generates a prefix map
 * @param {JSON} searchOptions Search options
 * @returns {JSON} Prefix map
 */
const generatePrefixMap = (searchOptions) => {
	let prefixMap = {};

	const locale = getLocale();

	// Iterate through searchOptions providers
	for (const [key, data] of Object.entries(searchOptions.providers)) {
		// Check if the current locale is in the alternative prefix list
		if (locale in data['prefix-other-lang']) {
			// Add the alternative prefix to the prefix map
			prefixMap[data['prefix-other-lang'][locale]] = { query: data['query'], provider: data['name'] };
		}

		// Otherwise add the regular prefix
		else {
			prefixMap[data['prefix']] = { query: data['query'], provider: data['name'] };
		}
	}

	// Return the prefix map
	return prefixMap;
};

export { search, generatePrefixMap };
