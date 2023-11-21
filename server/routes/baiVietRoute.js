const express = require('express');
const router = express.Router();
const baiVietController = require('../controllers/baiVietController');

// Define route handlers
router.get('/', baiVietController.getAllBaiViet);
router.get('/:id', baiVietController.getBaiVietById);
router.post('/', baiVietController.createBaiViet);
//note: Khi làm bảng update thì vô hiệu hóa thẻ id
router.put('/:id', baiVietController.updateBaiViet);
router.delete('/:id', baiVietController.deleteBaiViet);

module.exports = router;