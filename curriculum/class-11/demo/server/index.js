'use strict'; // this file will run when you type npm run start

require('dotenv').config();
// .env -> process.env

// Start up DB Server
const mongoose = require('mongoose');
// Vinicio - mongoose will complain if you you don't have this
const options = {
  useNewUrlParser:true,
  useCreateIndex: true,
};
mongoose.connect(process.env.MONGODB_URI, options);

// Start the web server
require('./src/app.js').start(process.env.PORT);
