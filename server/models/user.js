const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: true,
    // validate: [
    //   function (input) {
    //     return input.charAt(0).toUppercase() + input.slice(1)
    //   }
    // ]
  },
  lastName: {
    type: String,
    trim: true,
    required: true,
    // validate: [
    //   function (input) {
    //     return input.charAt(0).toUppercase() + input.slice(1)
    //   }
    // ]
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    required: [true, 'Email address is required']
  },
  password: {
    type: String,
    trim: true,
    required: 'A password is required',
    validate: [
      function (input) {
        return input.length >= 6 && input.length <= 120
      },
      'Password should be between 6 and 120 characters.'
    ]
  },
})

class newUser {
  constructor({ id, firstName, lastName, email, password }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }

  comparePassword(challenge) {
    return this.password === challenge;
  }
}

UserSchema.loadClass(newUser);
let User = mongoose.model('User', UserSchema);

module.exports = User;
