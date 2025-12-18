const mongoose = require("express");
const AuthorSchema = new mongoose.Schema({

    name : {
        type: String,
        required: [true, "Name is required"]
    }
},)
module.exports - mongoose.model("Author", AuthorSchema);