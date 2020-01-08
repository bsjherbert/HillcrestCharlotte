const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SermonSchema = new Schema({

    sermonDate: { type: Date, default: Date.now },
    bookBible: { type: String, trim: true, required: "Bible book is Required" },
    verses: { type: String, trim: true, required: "Bible verse is Required" },
    title: { type: String, trim: true, required: "Sermon Title is Required" },
    speaker: String,
    audioFileLink: {type: String, trim: true}
});

let Sermon = mongoose.model('Sermon', SermonSchema);

module.exports = Sermon;
