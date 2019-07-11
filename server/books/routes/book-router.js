const express = require('express');

const BookCtrl = require('../controllers/book-ctrl');

const router = express.Router()

router.get('/healthCheck', function(){
    console.log('healthCheck is 200 OK')
})
router.post('/book', BookCtrl.createBook)
router.put('/book/:id', BookCtrl.updateBook)
router.delete('/book/:id', BookCtrl.deleteBook)
router.get('/book/:id', BookCtrl.getBookById)
router.get('/books', BookCtrl.getBooks)

module.exports = router
