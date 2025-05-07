const express = require('express');
const bankerController = require('../controllers/banker.controller');
const authMiddleware = require('../middleware/auth.middleware');
const router = express.Router();

// Apply authentication middleware to all banker routes
router.use(authMiddleware.authenticate);
router.use(authMiddleware.checkRole('banker'));

router.get('/customers', bankerController.getAllCustomers);
router.get('/accounts', bankerController.getAllAccounts);
router.get('/accounts/:accountId/transactions', bankerController.getCustomerTransactions);

module.exports = router;
