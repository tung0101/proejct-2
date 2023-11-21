const express = require('express');
const router = express.Router();
const binhLuanController = require('../controllers/binhLuanController');

// Define route handlers
router.get('/', binhLuanController.getAllBinhLuan);
router.get('/:id', binhLuanController.getBinhLuanById);
router.post('/', binhLuanController.createBinhLuan);
//note: Khi làm bảng update thì vô hiệu hóa thẻ id
router.put('/:id', binhLuanController.updateBinhLuan);
router.delete('/:id', binhLuanController.deleteBinhLuan);

module.exports = router;