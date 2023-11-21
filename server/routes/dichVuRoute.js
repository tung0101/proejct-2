const express = require('express');
const router = express.Router();
const dichVuController = require('../controllers/dichVuController');

// Define route handlers
router.get('/', dichVuController.getAlldichVu);
router.get('/:id', dichVuController.getDichVuById);
router.post('/', dichVuController.createDichVu);
//note: Khi làm bảng update thì vô hiệu hóa thẻ id
router.put('/:id', dichVuController.updateDichVu);
router.delete('/:id', dichVuController.deleteDichVu);

module.exports = router;