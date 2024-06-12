const db = require('../config/config')

//Crear usuario
const create = (bodyUser) =>{
    return db
        .insert(bodyUser)
        .into('users')
        .returning(['nickname','first_name','email','password'])
    }
    
//Obtener todos los usuarios
const findAll = () => {
    return db
    .select('*')
    .from('users')
    .where({ is_active :true });
}

//Modelo buscar una mascota por id
const findOne = (idUser) => {
    return db
    .select("*")
    .from('users')
    .where({ user_id: idUser, active: true})
}

//Modelo actualizar una mascota por id
const update = (idUser, bodyToUpdate) => {
    return db
    .update(bodyToUpdate)
    .from( 'users' )
    .where({user_id: idUser, active: true})
    .returning(['nickname','first_name','email','password'])
}

//Modelo eliminar una mascota por id
const logicDelete = (idUser) => {
    return db
    .update({ active: false })
    .from('users')
    .where({ user_id: idUser})
}

//Encontrar uno por email
const findOneByEmail = (idEmail) =>{
    return db
    .select('*')
    .from('users')
    .where({ email: idEmail, active: true })
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