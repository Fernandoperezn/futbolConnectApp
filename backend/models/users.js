const db = require('../config/config')

//Crear usuario
const create = (bodyUser) =>{
    return db
        .insert(bodyUser)
        .into('users')
        .returning(['email','password'])
    }
    
//Obtener todos los usuarios
const findAll = () => {
    return db
    .select('*')
    .from('users')
    .where({ is_active :true });
}

//Modelo buscar un user por id
const findOne = (idUser) => {
    return db
    .select('*')
    .from('users')
    .where({ user_id: idUser, is_active: true})
    .returning(['first_name'])
}

//Modelo actualizar una usuario por id
const update = (idUser, bodyToUpdate) => {
    return db
    .update(bodyToUpdate)
    .from( 'users' )
    .where({user_id: idUser, is_active: true})
    .returning(['first_name'])
}

//Modelo eliminar una mascota por id
const logicDelete = (idUser) => {
    return db
    .update({ is_active: false })
    .from('users')
    .where({ user_id: idUser})
}

//Encontrar uno por email
const findOneByEmail = (idEmail) =>{
    return db
    .select('*')
    .from('users')
    .where({ email: idEmail, is_active: true })
    .first()
}

module.exports = {
    create,
    findAll,
    findOne,
    update,
    logicDelete,
    findOneByEmail,
}