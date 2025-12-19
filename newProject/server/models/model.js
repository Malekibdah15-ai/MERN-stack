const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    title: { type: String },
    price: { type: String },
    discription: { type: String }
    
}, )
module.exports = mongoose.model('Product', AuthorSchema);
