const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const path = require('path')
// const statesArray = require(__dirname + path('./usaStates'))

const ConnCardSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Name is Required"
  },
  address: {
    street: {
      type: String,
      trim: true,
    },
    other: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      trim: true,
    },
    state: {
      type: String,
      trim: true,
      uppercase: true
      // enum: statesArray
    },
    zip: Number
  },
  email: {
    type: String,
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
