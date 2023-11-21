const express = require('express');
const router = express.Router();
const sanPhamController = require('../controllers/sanPhamController');

// Define route handlers
router.get('/', sanPhamController.getAllsanPham);
router.get('/:id', sanPhamController.getSanPhamById);
router.post('/', sanPhamController.createSanPham);
//note: Khi làm bảng update thì vô hiệu hóa thẻ id
router.put('/:id', sanPhamController.updateSanPham);
router.delete('/:id', sanPhamController.deleteSanPham);

module.exports = router;