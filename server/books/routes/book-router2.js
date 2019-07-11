const BookCtrl = require('../controllers/book-ctrl');

module.exports = function(router){
    router.get('/', function(req, res){
        res.send('healthCheck is 200 OK')
    })
    router.post('/book', BookCtrl.createBook)
    router.put('/book/:id', BookCtrl.updateBook)
    router.delete('/book/:id', BookCtrl.deleteBook)
    router.get('/book/:id', BookCtrl.getBookById)
    router.get('/books', BookCtrl.getBooks)    
}
