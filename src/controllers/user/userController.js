import userModel from "../../models/userModel.js";

async function getAll(){
    try {
        const users = await userModel.findAll({include:["usuarios"]})
        return {data:users}
    }
    catch (error) {
        console.error(error);
        return { error: error };
    }
}

async function getById(id){
    try {
        const user = await userModel.findByPk(id);
        if (!user) {
            return { error: "El usuario no existe"};
        }
        return {data: user};
    } catch (error) {
        console.error(error);
        return { error };
    }
}

async function create(userData){
    try {
        const newUser = await userModel.create(userData);
        console.log("newUser", newUser)
    } catch (error) {
        
    }
    const {id_user, user_name, user_password, user_city, user_rol} = userData;
    // get max id_user from users
    if(!user_name ){
        return {error:"Los usuarios deben tener nombre"};
    }
    if (!user_password){
        return {error:"Los usuarios deben tener contraseña"}
    }
    const maxId = Math.max(...users.map(user => user.id_user));
    const newId= maxId + 1;
    const newUser = {
        id_user:newId,
        user_name,
        user_password, 
        user_city,
        user_rol
    };
    users.push(newUser);
    return {data:newUser};
}

async function update(id,userData){
    const {id_user, user_name, user_password, user_city, user_rol} = userData;
    const user = users.find(user=>user.id_user===id);
    if(!user){
        return {error:"No se puede modificar un usuario que no existe, espabila!!"};
    }
    if(user_name){
        user.user_name = user_name;
    }
    if(user_password){
        user.user_password = user_password;
    }
    if(user_city){
        user.user_city = user_city
    }
    return {data:user};
}

async function remove(id){
    const artistIndex = users.findIndex(user=>user.id_user===id);
    if(artistIndex === -1){
        return {error:"no se pueden borrar usuarios que no existen"}
    }
    const deletedArtist = users.splice(artistIndex,1);
    return {data:deletedArtist};
}

export {
    getAll,
    getById,
    create,
    update,
    remove
};


export default {
    getAll,
    getById,
    create,
    update,
    remove
};