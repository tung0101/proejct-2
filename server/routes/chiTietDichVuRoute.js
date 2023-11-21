const express = require('express');
const router = express.Router();
const chiTietDichVuController = require('../controllers/chiTietDichVuController');

// Define route handlers
router.get('/', chiTietDichVuController.getAllChiTietDichVu);
router.get('/:id', chiTietDichVuController.getChiTietDichVuById);
router.post('/', chiTietDichVuController.createChiTietDichVu);
//note: Khi làm bảng update thì vô hiệu hóa thẻ id
router.put('/:id', chiTietDichVuController.updateChiTietDichVu);
router.delete('/:id', chiTietDichVuController.deleteChiTietDichVu);

module.exports = router;