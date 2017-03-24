const express = require('express');
const router = express.Router();
const Note = require('../models/note');
/**
 * GET list of notes
 */
router.get("/notes", function(req, res, next){
    res.send({type: "GET"});
})

/**
 * ADD a new note to the database 
 */
router.post("/notes", function(req, res, next){
    //var note = new Note(req.body);
    //note.save();
    // create new instance and save it to the database
    Note.create(req.body).then(function(note){
        res.send(note);
    }).catch(next);
})

/**
 * UPDATE a specific note
 */
router.put("/notes/:id", function(req, res, next){
    res.send({type: "PUT"});
});

/**
 * DELETE a note from the database
 */
router.delete("/notes/:id", function(req, res, next){
    res.send({type: "DELETE"});
});

module.exports = router;

