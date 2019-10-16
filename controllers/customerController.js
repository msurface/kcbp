const Customer = require('../models/Customer');

// GET all customers
exports.allCustomers = async (req, res) => {
  try {
    // query the database for all customers and sort by name
    const customers = await Customer.find().sort('name');

    // validation of customers in the database
    if (customers.length === 0)
      return res
        .status(400)
        .send('Currently no customers, lets get you added!');

    // Send back to the client
    res.send(customers);
  } catch (err) {
    if (err) {
      res.status(400).send('Could not find customers.');
      console.error(err.message);
    }
  }
};

// GET one customer
exports.oneCustomer = async (req, res) => {
  // validation
  if (!req.params.id)
    return res.status(400).send('No id to search for a customer');

  try {
    // find the customer by id
    const customer = await Customer.findById(req.params.id);

    // send back to the client
    res.send(customer);
  } catch (err) {
    if (err) {
      res
        .status(400)
        .send('Sorry, we could not find this customer. Try again?');
      console.error(err.message);
    }
  }
};

// POST create a new customer
exports.newCustomer = async (req, res) => {
  if (!req.body.name || req.body.name.length < 3) {
    res.status(400).send('Name must be at least 3 characters, please update!');
  }

  try {
    // create a new customer
    let customer = new Customer({
      name: req.body.name,
      email: req.body.email,
      address: req.body.address,
      phone: req.body.address,
      hasPurchased: false
    });

    // adding _id to the new customer
    customer = await customer.save();

    // sending back to the client
    res.send(customer);
  } catch (err) {
    res.status(400).send('could not create a new customer');
    console.error(err.message);
  }
};

// PUT update one customer
exports.updateCustomer = async (req, res) => {
  // name validation
  if (!req.body.name || req.body.name.length < 3) {
    res.status(400).send('Name must be at least 3 characters, please update!');
  }

  console.log(req.params.id);

  try {
    // querying the database
    let customer = await Customer.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      email: req.body.email,
      address: req.body.address,
      phone: req.body.phone,
      hasPurchased: false
    });

    // validate customer
    if (!customer)
      return res.status(400).send('Could not update the customer, try again?');

    // send to the client
    res.send(customer);
  } catch (err) {
    res.status(400).send('Could not update, try again?');
    console.error(err.message);
  }
};

// DELETE one customer
exports.deleteCustomer = async (req, res) => {
  try {
    // finding the customer and deleting
    const customer = await Customer.findByIdAndDelete(req.params.id);

    // sending to the client
    res.send(customer);
  } catch (err) {
    res.status(400).send('Not able to delete this customer, try again?');
    console.error(err.message);
  }
};
