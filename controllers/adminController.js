const Inventory = require('../models/Inventory');

// get remaining inventory
exports.getInventory = async (req, res) => {
  try {
    const inventory = await Inventory.find();

    // send back to the client
    res.send(inventory);
  } catch (err) {
    res.status(400).send('Could not retrieve total inventory');

    console.error(err.message);
  }
};
