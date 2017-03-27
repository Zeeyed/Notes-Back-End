const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Create category Schema & model
 */
const CategorySchema = new Schema({
    title:{ type: String, required: [true, 'Title field is required'],},
    date: { type: Date, default: Date.now }
});

const Note = mongoose.model('note', NoteSchema);

module.exports = Note;