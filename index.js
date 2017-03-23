const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Setup express app
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/easynote');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

/**
 * Initialize routes
 */
app.use("/api", routes);

// Listen for requests
app.listen(process.env.port || 4000, function(){
    console.log("Listening for requests ...");
})