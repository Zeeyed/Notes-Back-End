const express = require('express');

// Setup express app
const app = express();

app.get("/api", function(req, res){
    console.log("GET request")
    res.send({name: "zee"});
})

// Listen for requests
app.listen(process.env.port || 4000, function(){
    console.log("Listening for requests ...");
})