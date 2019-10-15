const customerController = require('../controllers/customerController');
const express = require('express');
const router = express.Router();

// GET all customers
// @ /api/customer
router.get('/', customerController.allCustomers);

// GET one customer
// @ /api/customer/:id
router.get('/:id', customerController.oneCustomer);

// POST create one customer
//  @ /api/customer
router.post('/', customerController.newCustomer);

// PUT update one customer
// @ /api/customer/:id
router.put('/:id', customerController.updateCustomer);

module.exports = router;
