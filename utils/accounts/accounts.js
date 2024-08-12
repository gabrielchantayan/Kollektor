import { successHandler } from '../misc/miscUtils.js';

const adminPortalPassword = process.env.ADMIN_PASSWORD || 'password';


/**
 * This function checks if the provided password is correct for the admin portal.
 *
 * @param {Object} password - An object containing the password to be checked.
 * @param {string} password.body.password - The password to be checked.
 *
 * @returns {Object} - An object indicating if the password was correct and a success message.
 */
const login = (password) => {
	// Check if the provided password matches the admin portal password.
	// TODO: Add something more robust than this.
	if (password.body.password == adminPortalPassword) {
		// If the password is correct, return a success message.
		return successHandler(true);
	} else {
		// If the password is incorrect, return a failure message.
		return successHandler(false, 'passIncorrect');
	}
}


export { login }