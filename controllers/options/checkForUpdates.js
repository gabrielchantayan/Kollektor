import asyncWrapper from '../../middleware/asyncWrapper.js';
import { checkForUpdates as mainFunction } from '../../utils/misc/update.js';

// Check for updates
// Checks for updates to the program
const checkForUpdates = asyncWrapper(async (req, res) => {

    const ret = await mainFunction(req);

    res.status(200).json(ret);

});

export default checkForUpdates;
