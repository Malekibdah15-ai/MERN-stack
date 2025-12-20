const GameController = require('../controller/controller');
module.exports = function(app){
    app.post('/api/create/game', GameController.createGame );
    app.get('/api/games', GameController.getAllGame);
    app.get('/api/game/:id', GameController.getGameById);
    app.put('/api/update/:id', GameController.updateGame);
    app.delete('/api/delete/:id', GameController.deleteById);
    
}

