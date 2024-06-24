import { Router } from 'express';
const router = Router();

import options from '../controllers/options/index.js';

// Get options
// Gets the options file from the root directory
router.get('/getOptions', (req, res) => {
    return options.getOptions(req, res);
});

// Update options
// Updates the options file in the root directory
router.post('/updateOptions', (req, res) => {
    return options.updateOptions(req, res);
});

// Check for updates
// Checks for updates to the program
router.get('/checkForUpdates', (req, res) => {
    return options.checkForUpdates(req, res);
});
export default router;