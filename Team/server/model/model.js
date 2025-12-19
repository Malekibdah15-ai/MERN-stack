const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3
    },
    postion:{
        type: String,
        required: true,
        
    }
  },
  
);

module.exports = mongoose.model('Author', GameSchema);