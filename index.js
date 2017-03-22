const express = require('express');
const routes = require('./routes/api');
// Setup express app
const app = express();

/**
 * Initialize routes
 */
app.use("/api", routes);

// Listen for requests
app.listen(process.env.port || 4000, function(){
    console.log("Listening for requests ...");
})