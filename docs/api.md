# API Documentation



## ACCOUNTS

### Login

Logs in a user

**Type**: POST

**Call**: `/api/accounts/login`



## OPTIONS

### Get options

Gets the options file from the root directory

**Type**: GET

**Call**: `/api/options/getOptions`

**JSDoc**

 ``` /**
 * Retrieves the options from config.json
 * @function getOptions
 * @returns {JSON} The options from config.json
 */
const getOptions = async () 
 ``` 

### Update options

Updates the options file in the root directory

**Type**: POST

**Call**: `/api/options/updateOptions`

**JSDoc**

 ``` /**
 * Updates the option in config.json with the given key and new value.
 * @function updateOptions
 * @param {string} key The key of the option to update.
 * @param {string} option The new value to set the option to.
 * @returns {JSON} A success message.
 */
const updateOptions = async (data) 
 ``` 

### Check for updates

Checks for updates to the program

**Type**: GET

**Call**: `/api/options/checkForUpdates`

**JSDoc**

 ``` /**
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
const checkForUpdates = async () 
 ``` 

