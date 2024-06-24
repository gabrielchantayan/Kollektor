import asyncWrapper from '../../middleware/asyncWrapper.js';
import { getOptions as mainFunction } from '../../utils/misc/options.js';

// Get options
// Gets the options file from the root directory
const getOptions = asyncWrapper(async (req, res) => {

    const ret = await mainFunction(req);

    res.status(200).json(ret);

});

export default getOptions;
