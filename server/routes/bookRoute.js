const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Define route handlers
router.get('/', bookController.getAllBook);
router.get('/:id', bookController.getBookById);
router.post('/', bookController.createBook);
//note: Khi làm bảng update thì vô hiệu hóa thẻ id
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;