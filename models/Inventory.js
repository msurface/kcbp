const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// writing up a Schema for inventory
// two properties 1) Inventory: Number 2) isSoldOut: Boolean

const inventorySchema = new Schema({
  quantity: {
    type: Number,
    required: true,
    min: 1
  },
  isSoldOut: Boolean
});

// initiating a model
const Inventory = mongoose.model('Inventory', inventorySchema);

// exporting the model for routes use.
module.exports = Inventory;
