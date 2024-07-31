import { Router } from 'express';
const router = Router();

import collections from '../controllers/collections/index.js';

// Get collections
// Gets all collections
router.get('/getCollections', (req, res) => {
    return collections.getCollections(req, res);
});

// Get collection
// Gets a collection
router.get('/getCollection', (req, res) => {
    return collections.getCollection(req, res);
});

// Create collection
// Creates a collection
router.post('/createCollection', (req, res) => {
    return collections.createCollection(req, res);
});

// Update collection
// Updates a collection
router.post('/updateCollection', (req, res) => {
    return collections.updateCollection(req, res);
});

// Delete collection
// Deletes a collection
router.post('/deleteCollection', (req, res) => {
    return collections.deleteCollection(req, res);
});
export default router;