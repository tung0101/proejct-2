const express = require('express');
const router = express.Router();
const datLichController = require('../controllers/datLichController');

// Define route handlers
router.get('/', datLichController.getAllDatLich);
router.get('/:id', datLichController.getDatLichById);
router.post('/', datLichController.createDatLich);
//note: Khi làm bảng update thì vô hiệu hóa thẻ id
router.put('/:id', datLichController.updateDatLich);
router.delete('/:id', datLichController.deleteDatLich);

module.exports = router;