import userModel from "../../models/userModel.js";

async function getAll(){
    try {
        const users = await userModel.findAll()
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
        console.error(error);
        return {error}
    }
}

async function update(id,userData){
    try {
        if(userData.user_name ===""){
            delete userData.user_name;
        }
        const newUser = await userModel.update(userData,
        {
            where:
            {
                id_user:id
            }
        }
    );
    return {data:newUser};
    } catch (error) {
        console.error(error);
        return {error}  
    }
}

async function remove(id){
    try {
        const result = await userModel.remove(id);
        return {data:result}
        
    } 
    catch (error) {
        console.error(error);
    }
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