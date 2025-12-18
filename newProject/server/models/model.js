const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: { type: String },
    price: { type: String },
    discription: { type: String }
    
}, )
module.exports = mongoose.model('Product', ProductSchema);
