import { CookiesProvider, useCookies } from 'react-cookie';

import * as api from './api.js';
import * as utils from './util.js';

const getListOfAllPermissiblePages = async () => {
	let user = utils.getCookie('username');
	let token = utils.getCookie('token');

	const ret = await api.post(['accounts', 'listAllPermissiblePages'], { username: user, token: token });

	return ret.data;
};

/**
 * Checks if the current user has the specified permission.
 * If the user is a superuser, this function always returns true.
 * @param {string} perm The permission to check
 * @returns {boolean} Whether the user has the permission
 */
const hasPerms = async (perm) => {
	// Get the username and token from the cookies
	const user = utils.getCookie('username');
	const token = utils.getCookie('token');

	// Send a post request to the api to get the user's permissions
	const ret = await api.post(['accounts', 'getUserPerms'], {
		username: user,
		token: token,
	});

	// If the user is a superuser, they have the permission
	if (ret.data.includes('Superuser')) return true;

	// Otherwise, check if the user has the specified permission
	return ret.data.includes(perm);
};




/**
 * Gets account data along with the token.
 * @returns {Object} The account data along with the token
 */
const getAccountDataWithToken = async () => {
	// Get the username and token from the cookies
	const user = utils.getCookie('username');
	const token = utils.getCookie('token');

	// Send a post request to the api to get the account data along with the token
	const ret = await api.post(['accounts', 'getAccountDataWithToken'], {
		username: user,
		token: token,
	});

	// Return the data
	return ret;
};


export { getListOfAllPermissiblePages, hasPerms, getAccountDataWithToken };
