import asyncWrapper from '../../middleware/asyncWrapper.js';
import { updateCollection as mainFunction } from '../../utils/collections/collections.js';

// Update collection
// Updates a collection
const updateCollection = asyncWrapper(async (req, res) => {

    const ret = await mainFunction(req);

    res.status(200).json(ret);

});

export default updateCollection;
