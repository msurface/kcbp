const Inventory = require('../models/Inventory');
const adminController = require('../controllers/adminController');
const express = require('express');
const router = express.Router();

// GET route for to display remaining inventory
// @ /api/admin
router.get('/', adminController.getInventory);

// POST create amount of inventory
// @ /api/admin
router.post('/');
module.exports = router;
