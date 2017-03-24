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

/**
 * Error handling middleware
 */
app.use(function(error, req, res, next){
    res.status(422).send({error: error.message});
});

// Listen for requests
app.listen(process.env.port || 4000, function(){
    console.log("Listening for requests ...");
})