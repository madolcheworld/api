const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Mendapatkan semua pengguna
router.get('/', userController.getAllUsers);

// Mendapatkan pengguna berdasarkan ID
router.get('/:id', userController.getUserById);

// Membuat pengguna baru
router.post('/', userController.createUser);

// Memperbarui pengguna berdasarkan ID
router.put('/:id', userController.updateUser);

// Menghapus pengguna berdasarkan ID
router.delete('/:id', userController.deleteUser);

module.exports = router;
