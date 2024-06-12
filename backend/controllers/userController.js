const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Users = require('../models/users');

// Iniciar sesión
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await Users.findOneByEmail(email);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Contraseña incorrecta' });
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token, user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al iniciar sesión' });
    }
};

// Registrar un nuevo usuario
const registerUser = async (req, res) => {
    const { nickname, name, email, password } = req.body;

    if (!nickname || !name || !email || !password) {
        return res.status(400).json({ message: 'Todos los campos son requeridos' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = { nickname, name, email, password: hashedPassword, active: true };

        await Users.create(newUser);

        res.status(201).json({ message: 'Usuario registrado con éxito' });
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        res.status(500).json({ message: 'Error al registrar usuario' });
    }
};

// Crear un usuario
const createUser = async (req, res) => {
    try {
        const user = req.body;
        const newUser = await Users.create(user);
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Error al crear un nuevo usuario' });
    }
};

// Obtener todos los usuarios
const findAllUsers = async (req, res) => {
    try {
        const allUsers = await Users.findAll();
        res.status(200).json(allUsers);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Error al buscar todos los usuarios' });
    }
};

// Encontrar un usuario por id
const findOneUser = async (req, res) => {
    try {
        const idUser = req.params.id;
        const user = await Users.findOne(idUser);
        if (!user) {
            return res.status(404).json({ message: 'No se encontró el usuario con el ID dado' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Error al buscar el usuario' });
    }
};

// Actualizar un usuario por id
const updateUser = async (req, res) => {
    try {
        const idUser = req.params.id;
        const bodyToUpdate = req.body;
        const updatedUser = await Users.update(idUser, bodyToUpdate);
        res.status(200).json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Error al actualizar el usuario' });
    }
};

// Eliminar lógicamente un usuario por id
const logicDeleteUser = async (req, res) => {
    try {
        const idUser = req.params.id;
        await Users.logicDelete(idUser);
        res.status(204).json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Error al eliminar el usuario' });
    }
};

module.exports = {
    createUser,
    findAllUsers,
    findOneUser,
    updateUser,
    logicDeleteUser,
    loginUser,
    registerUser,
};
