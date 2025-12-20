const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema(
  {
      name: {
    type: String,
    required: [true, "name is required"],
    minlength: [3, "name at least should be 3 chur"]
  },
  postion: {     
    type: String,
    required: [true, "postion is required"]
  },
  status:{
    type: String,
    lists:["playing", "not playing", "Undecided"],
    default: ["undesided"]
  }
});
  


module.exports = mongoose.model('Game', GameSchema);

