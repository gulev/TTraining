var mongoose = require('mongoose');


var ProgramSchema =  new mongoose.Schema({
  name: { type : String, required: true },
  desc: { type : String },
  days: { type : Number, required: true },
  data: { type : Array , "default" : [] }
});

var Program = mongoose.model('Program', ProgramSchema)

module.exports = Program;