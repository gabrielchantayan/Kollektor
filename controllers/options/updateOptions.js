import asyncWrapper from '../../middleware/asyncWrapper.js';
import { updateOptions as mainFunction } from '../../utils/misc/options.js';

// Update options
// Updates the options file in the root directory
const updateOptions = asyncWrapper(async (req, res) => {

    const ret = await mainFunction(req);

    res.status(200).json(ret);

});

export default updateOptions;
