var mongoose = require('mongoose');


var UserSchema =  new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
  programId : { type: mongoose.Schema.Types.ObjectId, ref: 'Program'}
});

var User = mongoose.model('User', UserSchema)

module.exports = User;