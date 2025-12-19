
const Author = require('../model/author.model')

module.exports.createAuthor = (req, res)=>{
    const{name} = req.body;
    Author.create({
        name
    })
    .then(author=> res.json(author))
    .catch(err => res.status(400).json(err));

}

module.exports.getAllAuthors = (req, res)=>{
    Author.find()
    .then(product=> res.json(product))
    .catch(err => res.status(400).json(err));
    
}
module.exports.getAuthorById = (req, res)=>{
    Author.findOne({_id: req.params.id})
     .then(author=> res.json(author))
     .catch(err => res.status(400).json(err));
;
}

module.exports.deleteById = (req, res)=>{
    Author.findByIdAndDelete({_id: req.params.id})
     .then(author=> res.json(author))
     .catch(err => res.status(400).json(err));

}
module.exports.updateAuthor = (req, res)=>{
    Author.findByIdAndUpdate({_id: req.params.id}, req.body,{new: true})
     .then(author=> res.json(author))
     .catch(err => res.status(400).json(err));

}