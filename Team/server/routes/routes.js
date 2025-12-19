const GameController = require('../controller/controller');
module.exports = function(app){
    app.post('/api/create/game', AuthorController.createGame );
    app.get('/api/game', AuthorController.getAllGame);
    app.get('/api/game/:id', AuthorController.getGameById);
    app.put('/api/update/:id', AuthorController.updateGame);
    app.delete('/api/delete/:id', AuthorController.deleteById);
    
}