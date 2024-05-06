const users = [
	{
		"user_id" : 1,
		"user_name" : "Lady Gaga",
        "user_password": 1234,
        "user_city": "Bilbao",
		"user_rol": "0"
	},
	{
		"user_id" : 2,
		"user_name" : "Evaristo",
        "user_password": 1234,
        "user_city": "Bilbao",
        "user_rol": "1"
		
	},
	{
		"user_id" : 3,
		"user_name" : "Nacho",
        "user_password": 1234,
        "user_city": "Bilbao",
        "user_rol": "1"
		
	}
]
async function getAll(){
    return {data:users}
}

async function getById(id){
    const user = users.find(user => user.user_id === id);
    if(!user){
        return {error:"El usuario no existe"};
    }
    return {data:user};
}

async function create(userData){
    const {user_id, user_name, user_password, user_city, user_rol} = userData;
    // get max user_id from users
    if(!user_name ){
        return {error:"Los usuarios deben tener nombre"};
    }
    if (!user_password){
        return {error:"Los usuarios deben tener contraseña"}
    }
    const maxId = Math.max(...users.map(user => user.user_id));
    const newId= maxId + 1;
    const newUser = {
        user_id:newId,
        user_name,
        user_password, 
        user_city,
        user_rol
    };
    users.push(newUser);
    return {data:newUser};
}

async function update(id,userData){
    const {user_id, user_name, user_password, user_city, user_rol} = userData;
    const user = users.find(user=>user.user_id===id);
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
    const artistIndex = users.findIndex(user=>user.user_id===id);
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