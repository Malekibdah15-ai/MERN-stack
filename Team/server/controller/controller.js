const Game = require('../model/model')

module.exports.createGame = (req, res)=>{
    const{name, postion, status} = req.body;
    Game.create({
        name,
        postion,
        status
    })
    .then(author=> res.json(author))
    .catch(error => res.status(500).json({ message: "Server error", error: error.message }));
}

module.exports.getAllGame  = (req, res)=>{
    Game.find({})
    .then(game=> res.json(game))
    .catch(error => res.status(500).json({ message: "Server error", error: error.message }));

}
module.exports.getGameById = (req, res)=>{
    Game.findOne({_id: req.params.id})
     .then(game=> res.json(game))
      .catch(error => res.status(500).json({ message: "Server error", error: error.message }));
}

module.exports.deleteById = (req, res)=>{
    Game.findByIdAndDelete({_id: req.params.id})
     .then(game=> res.json(game))
      .catch(error => res.status(500).json({ message: "Server error", error: error.message }));
}
module.exports.updateGame  = (req, res)=>{
    Game.findByIdAndUpdate({_id: req.params.id}, req.body,{new: true})
     .then(game=> res.json(game))
    .catch(error => res.status(500).json({ message: "Server error", error: error.message }));
}
