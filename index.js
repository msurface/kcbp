const home = require('./routes/home');
const customer = require('./routes/customer');
const admin = require('./routes/admin');
const express = require('express');
const app = express();
const helmet = require('helmet');
const morgan = require('morgan');
const mongoose = require('mongoose');

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
}

// MONGODB CONNECTION

// connection options
const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
};

// actually connecting to MONGODB.
mongoose
  .connect('mongodb://localhost:27017/kcbp', connectionOptions)
  .then(console.log('MongoDB is connected...'))
  .catch(err => console.error('Could not connect to MongoDB', err.message));

// ROUTES
app.use('/', home);
// /api/customer
app.use('/api/customer', customer);
// /api/admin
app.use('/api/admin', admin);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`App is listening on Port ${PORT}`));
