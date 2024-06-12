const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Rutas
router.post('/api/users', UserController.createUser);           // Crear un usuario
router.get('/api/users', UserController.findAllUsers);          // Obtener todos los usuarios
router.get('/api/users/:id', UserController.findOneUser);       // Obtener un usuario por su id
router.put('/api/users/:id', UserController.updateUser);        // Actualizar un usuario con su id
router.delete('/api/users/:id', UserController.logicDeleteUser); // Borrar usuario lógicamente
router.post('/api/users/login', UserController.loginUser);      // Auth de login
router.post('/api/users/signup', UserController.registerUser);  // Registro de usuario para signup

module.exports = router;
