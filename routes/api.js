const express = require('express');
const router = express.Router();
const Note = require('../models/note');

/** GET All list of notes */
router.get("/notes", function(req, res, next){
    //res.send({type: "GET"}).catch(ext);
    Note.find({}, function(err, notes){
        if(err) { res.send('Something wrong !').next(); }
        res.send(notes);
    });
})

/** ADD a new note to the database */
router.post("/notes", function(req, res, next){
    //var note = new Note(req.body);
    //note.save();
    // create new instance and save it to the database
    Note.create(req.body).then(function(note){
        res.send(note);
    }).catch(next);
})

/** GET one element of note */
router.get("/notes/:id", function(req, res, next){
    Note.findById(req.params.id)
    .then(note => {
        if(!note) { return res.status(404).end(); }
        return res.status(200).send(note);
    })
    .catch(err => next(err));
})

/** UPDATE a specific note */
router.put("/notes/:id", function(req, res, next){
    var condition = { _id: req.params.id };

    Note.update(condition, req.body)
    .then(note => {
        if(!note) { return res.status(404).end(); }
        return res.status(200).send(note);
    })
    .catch(err => next(err));
})

/** DELETE a note from the database */
router.delete("/notes/:id", function(req, res){
    Note
    .findByIdAndRemove({_id: req.params.id})
    .exec()
    .then(note => {
        if (!note) { return res.status(404).end(); }
        return res.status(200).send(note).end();
    })
    .catch(err => next(err));
});

module.exports = router;

