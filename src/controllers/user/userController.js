import userModel from "../../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

async function getByUser(user_name){
    try {
        const user = await userModel.findOne({where:{user_name:user_name}})
        return {data:user};
        
    } catch (error) {
        console.error(error);
        return {error};
    }
}

async function create(userData){
    try {
        // Encripta la contraseña antes de crear el usuario
        const {data:oldUser} = await getByUser(userData.user_name);
        if(oldUser){
            return {error:"el usuario ya existe"};
        }
        const hash = await bcrypt.hash(userData.user_password, 10);
        userData.user_password = hash;

        const newUser = await userModel.create(userData);
        return { data: newUser };
    } catch (error) {
        console.error(error);
        return { error };
    }
}

async function register(user_name,password,passwordRepeat,user_city){
    try {
        if(!user_name || !password || !passwordRepeat){
            return {error:"falta usuario o contraseña"};
        }
        if(password !== passwordRepeat){
            return {error:"las contraseñas no coinciden"};
        }
        const {data:oldUser} = await getByUser(user_name);
        if(oldUser){
            return {error:"el usuario ya existe"};
        }
        const userData = {
            user_name,
            user_password:password,
            user_city
        }
        const newUser = await create(userData);
        return {data:newUser};
    } catch (error) {
        console.error(error);
        return {error:"ha habido un error en el registro"}
    }
}

async function login(user_name,password){
    try {
        if(!user_name || !password ){
            return {error:"falta ususario o contraseña"};
        }
        const {data:oldUser} = await getByUser(user_name);
        if(!oldUser){
            return {error:"la combinación de usuario y contraseña es errónea"};
        }
        const isPasswordCorrect = await bcrypt.compare(password,oldUser.user_password);
        if(isPasswordCorrect){
            const token = jwt.sign({id:oldUser.id_user,user_name:oldUser.user_name},process.env.JWT_SECRET,{expiresIn: 60 * 60})
            const user = {
                id_user:oldUser.id_user,
                user_rol:oldUser.user_rol,
                user_name:oldUser.user_name
            }
            return {token, data:user};
        }
        else{
            return {error:"la combinación de usuario y contraseña es errónea"}
        }
    } catch (error) {
        console.error(error);
        return {error:"Ha habido un error en el login"}
    }
}

async function logout(){

}

async function update(id, userData) {
    try {
        if (userData.user_password) {
            const hash = await bcrypt.hash(userData.user_password, 10);
            userData.user_password = hash;
        }

        const newUser = await userModel.update(userData, {
            where: {
                id_user: id
            }
        });

        // Retorna el nuevo usuario actualizado
        return { data: newUser };
    } catch (error) {
        console.error(error);
        return { error: "Ha ocurrido un error al actualizar el usuario" };
    }
}

async function remove(id){
    try {
        const user = await userModel.findByPk(id);
        await user.destroy();
        return {data:user};
    } 
    catch (error) {
        console.error(error);
        return{error}
    }
}

export {
    getAll,
    getById,
    getByUser,
    create,
    register,
    login,
    update,
    remove
};

export default {
    getAll,
    getById,
    getByUser,
    create,
    register,
    login,
    update,
    remove
};