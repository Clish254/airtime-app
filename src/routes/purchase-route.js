const express = require('express');
const router = express.Router();
const purchaseController = require('../controllers/purchasecontroller');
const providerController = require('../controllers/providercontroller')

//create a new subscriber
router.post('/purchase',purchaseController.purchase);

router.post('/providers',providerController.provider);
module.exports = router