const Game = require('../model/model')

module.exports.createGame = (req, res)=>{
    const{name} = req.body;
    Game.create({
        name
    })
    .then(author=> res.json(author))
    .catch(error=> res.json(error));
}

module.exports.getAllGame  = (req, res)=>{
    Game.find({})
    .then(game=> res.json(game))
    .catch(error=> res.json(error));

}
module.exports.getGameById = (req, res)=>{
    Game.findOne({_id: req.params.id})
     .then(game=> res.json(game))
     .catch(error=> res.json(error));
}

module.exports.deleteById = (req, res)=>{
    Game.findByIdAndDelete({_id: req.params.id})
     .then(game=> res.json(game))
     .catch(error=> res.json(error));
}
module.exports.updateGame  = (req, res)=>{
    Game.findByIdAndUpdate({_id: req.params.id}, req.body,{new: true})
     .then(game=> res.json(game))
     .catch(error=> res.json(error));
}