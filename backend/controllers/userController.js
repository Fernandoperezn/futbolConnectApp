const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Users = require('../models/users');

// Iniciar sesión
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Buscar el usuario por email
        const user = await Users.findOneByEmail(email);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        // Comparar la contraseña proporcionada con la almacenada en la base de datos
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Contraseña incorrecta' });
        }

        // Generar un token JWT
        const token = jwt.sign({ id: user.user_id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token, user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al iniciar sesión' });
    }
};

// Registrar un nuevo usuario
const registerUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Todos los campos son requeridos' });
    }

    try {
        // Hashear la contraseña proporcionada
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = { email, password: hashedPassword, is_active: true };

        // Crear el nuevo usuario en la base de datos
        const createdUser = await Users.create(newUser);

        res.status(201).json({ message: 'Usuario registrado con éxito', user: createdUser });
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        res.status(500).json({ message: 'Error al registrar usuario' });
    }
};

// Crear un usuario
const createUser = async (req, res) => {
    try {
        const user = req.body;

        // Hashear la contraseña si está presente en los datos del usuario
        if (user.password) {
            user.password = await bcrypt.hash(user.password, 10);
        }

        // Crear el nuevo usuario en la base de datos
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
        // Obtener todos los usuarios activos de la base de datos
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

        // Buscar el usuario por ID
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

        // Hashear la nueva contraseña si está presente en los datos a actualizar
        if (bodyToUpdate.password) {
            bodyToUpdate.password = await bcrypt.hash(bodyToUpdate.password, 10);
        }

        // Actualizar el usuario en la base de datos
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

        // Marcar el usuario como inactivo en la base de datos
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
