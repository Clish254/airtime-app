const express = require('express');
const router = express.Router();
const purchaseController = require('../controllers/purchasecontroller');

//make a purchase
router.post('/purchase',purchaseController.purchase);

module.exports = router