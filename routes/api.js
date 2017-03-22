const express = require('express');
const router = express.Router();

/**
 * GET list of notes
 */
router.get("/notes", function(req, res){
    res.send({type: "GET"});
})

/**
 * ADD a new note to the database 
 */
router.post("/notes", function(req, res){
    res.send({type: "POST"});
})

/**
 * UPDATE a specific note
 */
router.put("/notes/:id", function(req, res){
    res.send({type: "PUT"});
});

/**
 * DELETE a note from the database
 */
router.delete("/notes/:id", function(req, res){
    res.send({type: "DELETE"});
});

module.exports = router;

