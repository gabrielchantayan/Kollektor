import asyncWrapper from '../../middleware/asyncWrapper.js';
import { createCollection as mainFunction } from '../../utils/collections/collections.js';

// Create collection
// Creates a collection
const createCollection = asyncWrapper(async (req, res) => {

    const ret = await mainFunction(req);

    res.status(200).json(ret);

});

export default createCollection;
