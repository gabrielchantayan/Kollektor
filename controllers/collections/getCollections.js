import asyncWrapper from '../../middleware/asyncWrapper.js';
import { getCollections as mainFunction } from '../../utils/collections/collections.js';

// Get collections
// Gets all collections
const getCollections = asyncWrapper(async (req, res) => {

    const ret = await mainFunction(req);

    res.status(200).json(ret);

});

export default getCollections;
