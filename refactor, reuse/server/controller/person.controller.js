
// const { plugin } = require('mongoose');
const  Product = require('../models/model');


module.exports.createProduct = (req, res)=>{
    const{title, price, discription} = req.body;
    Product.create({
        title,
        price,
        discription
    })
    .then(person=> res.json(person))
    .catch(error=> res.json(error));
}

module.exports.getAllProducts = (req, res)=>{
    Product.find({})
    .then(product=> res.json(product))
   
    .catch(error=> res.json(error));

}
module.exports.getProductById = (req, res)=>{
    Product.findOne({_id: req.params.id})
     .then(product=> res.json(product))
     .catch(error=> res.json(error));
}

module.exports.deleteById = (req, res)=>{
    Product.findByIdAndDelete({_id: req.params.id})
     .then(product=> res.json(product))
     .catch(error=> res.json(error));
}
module.exports.updateProduct = (req, res)=>{
    Product.findByIdAndUpdate({_id: req.params.id}, req.body,{new: true})
     .then(product=> res.json(product))
     .catch(error=> res.json(error));
}