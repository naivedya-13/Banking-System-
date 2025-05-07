const express = require('express');
const customerController = require('../controllers/customer.controller');
const authMiddleware = require('../middleware/auth.middleware');
const router = express.Router();
// Apply authentication middleware to all customer routes
router.use(authMiddleware.authenticate);
router.use(authMiddleware.checkRole('customer'));

router.get('/accounts', customerController.getAccounts);
router.get('/accounts/:accountId/transactions', customerController.getTransactions);
router.post('/accounts/:accountId/deposit', customerController.deposit);
router.post('/accounts/:accountId/withdraw', customerController.withdraw);

module.exports = router;