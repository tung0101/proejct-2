const express = require('express');
const router = express.Router();
const loaiSanPhamController = require('../controllers/loaiSanPhamController');

// Define route handlers
router.get('/', loaiSanPhamController.getAllloaiSanPham);
router.get('/:id', loaiSanPhamController.getLoaiSanPhamById);
router.post('/', loaiSanPhamController.createLoaiSanPham);
//note: Khi làm bảng update thì vô hiệu hóa thẻ id
router.put('/:id', loaiSanPhamController.updateLoaiSanPham);
router.delete('/:id', loaiSanPhamController.deleteLoaiSanPham);

module.exports = router;