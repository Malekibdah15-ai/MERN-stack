const AuthorController = require('../controller/author.controller');
module.exports = function(app){
    app.post('/api/create/author', AuthorController.createAuthor );
    app.get('/api/author', AuthorController.getAllAuthors);
    app.get('/api/author/:id', AuthorController.getAuthorById);
    app.put('/api/update/:id', AuthorController.updateAuthor);
    app.delete('/api/delete/:id', AuthorController.deleteById);
}
