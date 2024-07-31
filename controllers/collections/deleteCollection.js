import asyncWrapper from '../../middleware/asyncWrapper.js';
import { deleteCollection as mainFunction } from '../../utils/collections/collections.js';

// Delete collection
// Deletes a collection
const deleteCollection = asyncWrapper(async (req, res) => {

    const ret = await mainFunction(req);

    res.status(200).json(ret);

});

export default deleteCollection;
