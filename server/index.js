// requiring in other files
const keys = require('./config/dev');

const express = require('express');
const mongoose = require('mongoose');

require('./services/passport');

// setting up a local mongodb connecting
// Mongoose connection
const db = keys.mongoConnectString;
// Mongoose options to tune mongoose
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};
// mongoose connection method
mongoose
  .connect(db, options)
  .then(() => console.log('MongoDB is now connected...'))
  .catch(err => console.log(err));

// initiating the express app
const app = express();

require('./routes/authRoutes')(app);

// Setting up the port for production and development
const PORT = process.env.PORT || 3001;

// Logging which port the app is running on
app.listen(PORT, () =>
  console.log(`KCBP app is now listening on port ${PORT} `)
);
