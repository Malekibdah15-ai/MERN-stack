const {plugin} = require("mongoose");
const Author = require('../model/author.model')

module.exports.createAuthor = (req, res)=>{
    const{name} = req.body;
    Author.create({
        name
    })
    .then(author=> res.json(author))
    .catch(error=> res.json(error));
}

module.exports.getAllAuthors = (req, res)=>{
    Author.find({})
    .then(product=> res.json(product))
    .catch(error=> res.json(error));

}
module.exports.getAuthorById = (req, res)=>{
    Author.findOne({_id: req.params.id})
     .then(author=> res.json(author))
     .catch(error=> res.json(error));
}

module.exports.deleteById = (req, res)=>{
    Author.findByIdAndDelete({_id: req.params.id})
     .then(author=> res.json(author))
     .catch(error=> res.json(error));
}
module.exports.updateAuthor = (req, res)=>{
    Author.findByIdAndUpdate({_id: req.params.id}, req.body,{new: true})
     .then(author=> res.json(author))
     .catch(error=> res.json(error));
}