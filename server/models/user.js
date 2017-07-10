var mongoose = require('mongoose');

// User model
// email property - Required and trimmed - type: string set min of 1
// custom validation later
var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

module.exports = {
  User
};
