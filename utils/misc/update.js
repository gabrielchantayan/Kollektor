import { successHandler } from "./miscUtils.js";
import { readFile } from 'fs/promises';

/**
 * Checks if a new version is available.
 *
 * @param {string} currentVersion - The current version of the application.
 * @param {string} newVersion - The new version to check against.
 * @return {boolean} - True if there is a new version available, false otherwise.
 */
const checkVersion = (currentVersion, newVersion) => {
    // Split the version strings into their respective components.
    currentVersion = currentVersion.split('.');
    newVersion = newVersion.split('.');

    // Check major version
    // If the major version of the new version is greater than the current version,
    // then a new version is available.
    if (currentVersion[0] < newVersion[0]) return true;

    // Check minor version
    // If the minor version of the new version is greater than the current version,
    // and the major versions are equal, then a new version is available.
    else if (currentVersion[1] < newVersion[1]) return true;

    // Check patch version
    // If the patch version of the new version is greater than the current version,
    // and both the major and minor versions are equal, then a new version is available.
    else if (currentVersion[2] < newVersion[2]) return true;

    // If none of the conditions are met, then there is no new version available.
    return false;
}


/**
 * Checks for updates by comparing the current version with the latest version from the GitHub repository.
 *
 * @return {Promise<Object>} An object containing information about the update status.
 * @property {boolean} updateAvailable - True if there is a new version available, false otherwise.
 * @property {string} version - The current version of the application.
 * @property {string} latestVersion - The latest version available on the GitHub repository.
 */
const checkForUpdates = async () => {
	// Log the start of the update check
	console.log('Checking for updates...');

	// Get the current version from 'package.json'
	const version = await readFile('./package.json').then((data) => JSON.parse(data).version);

    // Get the latest version from the GitHub repository
    const latestResponse = await fetch('https://raw.githubusercontent.com/gabrielchantayan/toun-2/main/package.json');
    const latestData = await latestResponse.json();
    const latestVersion = latestData.version;

	// Check if there is a new version available
	const updateAvailable = checkVersion(version, latestVersion);

    // Log the update status
    (updateAvailable) ? console.log(`New version available: ${latestVersion}`) : console.log('No new version available');

	// Return the update status as a success handler
	return successHandler(true, 'checkedForUpdates', {
		updateAvailable: updateAvailable,
		version: version,
		latestVersion: latestVersion,
	});
};

export { checkForUpdates };