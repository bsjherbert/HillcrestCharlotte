const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConnCardSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Name is Required"
      },
    address: {
        type: String,
        trim: true,
        required: "Name of Exercise is Required"
      },
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
      },
    telephone: {
        type: String,
        trim: true
    },
      dateCreated: Date,
      contactMethod: String,
      speakPastor: Boolean,
      moreInfo: Boolean,
      questions: Boolean
    });

let ConnCard = mongoose.model('ConnectionCard', ConnCardSchema);

module.exports = ConnCard;
