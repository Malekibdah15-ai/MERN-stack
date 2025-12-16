const Joke = require('../model/joke.model');

module.exports.createJoke = (req, res)=>{
  Joke.create(req.body)
    .then((joke)=> {
        res.json(joke)
      })
    .catch((err)=> {
        res.json(err)
      })  
}


module.exports.findAllJokes = (req, res)=>{
    Joke.find()
      .then((jokes)=> {res.json(jokes)
      })
      .catch((err)=> {
        res.json(err)
      })
};
module.exports.findById = (req, res)=>{
    Joke.findOne({_id: req.params.id})
      .then((joke)=> {
        res.json(joke)
      })
      .catch((err)=> {
        res.json(err)
      })
};
module.exports.updateJoke = (req, res)=>{
    Joke.updateOne({name: "joke"}),{
      name: "jokes",
      $push:{hoppi:{name:"football"}}

    }
    .then((joke)=> {
        res.json(joke)
      })
    .catch((err)=> {
        res.json(err)
      })
}

module.exports.updateJokeByID = (req, res)=>{
  Joke.updateOne({_id: req.params.id}, req.body,{new: true, runValidators:true})
   .then((joke)=> {
    res.json(joke)
   })
  .catch((err)=> {
      res.json(err)
      })
}

module.exports.deleteJoke = (req, res)=>{
    Joke.deleteOne({_id: req.params.id})
      .then((joke)=> {
        res.json(joke)
      })
      .catch((err)=> {
        res.json(err)
      })
}