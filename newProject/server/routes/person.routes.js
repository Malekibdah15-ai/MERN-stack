const ProductController = require('../controller/person.controller');
module.exports = function(app){
    // app.get('/api/hello', ProductController.index);
    app.post('/api/product', ProductController.createProduct);
    app.get('/api/all/product', ProductController.getAllProducts);
    app.get('/api/product/:id', ProductController.getProductById);
    app.delete('/api/product/:id', ProductController.deleteById);
    app.put('/api/product/:id', ProductController.updateProduct);
}

