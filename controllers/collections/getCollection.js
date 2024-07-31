import asyncWrapper from '../../middleware/asyncWrapper.js';
import { getCollection as mainFunction } from '../../utils/collections/collections.js';

// Get collection
// Gets a collection
const getCollection = asyncWrapper(async (req, res) => {

    const ret = await mainFunction(req);

    res.status(200).json(ret);

});

export default getCollection;
