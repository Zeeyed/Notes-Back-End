const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Create note Schema & model
 */
const NoteSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title field is required'],
    },
    content:{
        type: String,
        required: [true, 'Content field is required']
    },
    draft:{
        type: Boolean,
        default: false
    }
});

const Note = mongoose.model('note', NoteSchema);

module.exports = Note;