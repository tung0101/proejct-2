const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define route handlers
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/register', userController.createUser);// đăng ký (gồm userName, password, email, còn role tự đổi)
router.post('/login', userController.loginUser);// đăng nhập (gồm userName và password)
//note: Khi làm bảng update thì vô hiệu hóa thẻ id
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;