import { Router } from 'express';
const router = Router();

import accounts from '../controllers/accounts/index.js';

// Login
// Logs in a user
router.post('/login', (req, res) => {
    return accounts.login(req, res);
});
export default router;