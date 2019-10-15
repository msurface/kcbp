const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// initiate the customeSchema
const customerSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone: String,
  hasPurchased: Boolean
});

// initiate a new model
const Customer = mongoose.model('Customer', customerSchema);

// export the model for controller use
module.exports = Customer;
