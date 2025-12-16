const JokeController = require('../controller/joke.controller');

module.exports = app =>{

    app.get("api/joke", JokeController.findAllJokes);
    app.get("api/joke/:id", JokeController.findById);
    app.put("api/joke/:id", JokeController.updateJokeByID)
    app.delete("api/joke/:id", JokeController.deleteJoke )
}