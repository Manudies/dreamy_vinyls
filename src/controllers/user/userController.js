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
        const user = userModel.findOne({where:{user_name:user_name}})
        return {data:user};
        
    } catch (error) {
        console.error(error);
        return {error};
    }
}

async function create(userData){
    try {
        const newUser = await userModel.create(userData);
        // console.log("newUser", newUser);
        return {data:newUser}
    } catch (error) {
        console.error(error);
        return {error}
    }
}

async function register(user_name,password,passwordRepeat){
    try {
        if(!user_name || !password || !passwordRepeat){
            return {error:"falta usuario o contraseña"};
        }
        if(password !== passwordRepeat){
            return {error:"las contraseñas no coinciden"};
        }
        const {data:oldUser} = await getByUser(user_name);
        console.log("old user",oldUser)
        if(oldUser){
            return {error:"el usuario ya existe"};
        }
        const hash = await bcrypt.hash(password,10);
        const userData = {
            user_name,
            password:hash
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
        const isPasswordCorrect = await bcrypt.compare(password,oldUser.password);
        if(isPasswordCorrect){
            const token = jwt.sign({id:oldUser.id_user,user_name:oldUser.user_name},process.env.JWT_SECRET,{expiresIn: 60 * 60})
            return {data:"El usuario se ha logueado correctamente",token};
        }
        else{
            return {error:"la combinación de usuario y contraseña es errónea"}
        }
    } catch (error) {
        console.error(error);
        return {error:"Ha habido un error en el login"}
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