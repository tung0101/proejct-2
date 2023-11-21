const express = require('express');
const router = express.Router();
const tuVanController = require('../controllers/tuVanController');

// Define route handlers
router.get('/', tuVanController.getAlltuVan);
router.get('/:id', tuVanController.getTuVanById);
router.post('/', tuVanController.createTuVan);
//note: Khi làm bảng update thì vô hiệu hóa thẻ id
router.put('/:id', tuVanController.updateTuVan);
router.delete('/:id', tuVanController.deleteTuVan);

module.exports = router;