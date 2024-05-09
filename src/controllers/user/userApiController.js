import userController from "./userController.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

async function register(req,res){

    const {user_name,password,passwordRepeat} = req.body;
    try {
        if(!user_name || !password || !passwordRepeat){
            return res.status(400).json({error:"falta nombre de usuario o contraseña"});
        }
        if(password !== passwordRepeat){
            return res.status(400).json({error:"las contraseñas no coinciden"});
        }
        const {data:oldUser} = await userController.getByUser(user_name);
        console.log("old user",oldUser)
        if(oldUser){
            return res.status(400).json({error:"el usuario ya existe"});
        }
        const hash = await bcrypt.hash(password,10);
        const userData = {
            user_name,
            password:hash
        }
        const newUser = await userController.create(userData);
        res.json({data:newUser});
    } catch (error) {
        console.error(error);
        res.status(500).json({error:"ha habido un error en el registro"})
    }
}

async function login(req,res){
    const {user_name,password} = req.body;
    try {
        if(!user_name || !password){
            return res.status(400).json({error:"falta nombre de usuario o contraseña"});
    }
    const {data:oldUser} = await userController.getByUser(user_name);
        console.log("old user",oldUser)
        if(oldUser){
            return res.status(400).json({error:"la combinacion de usuario y contraseña es erronea"});
        }
    const result = await bcrypt.compare(password,oldUser.password)
    if(result){
        const token = jwt.sign({id:oldUser.id_user,user_name:oldUser.user_name},process.env.JWT_SECRET,{expiresIn: 60 * 60});
        res.json({data:"el usuario se a logeado correctamente", token});
    }
    else{
        res.status(401).json({error:"la combinacion de usuario y contraseña es erronea"})
    }
}
catch (error) {
    console.error(error);
    res.status(500).json({error:"hubo un error en el login"})

} 
}


async function getAll(req,res){
    const {data:users}= await userController.getAll();
    res.json(users);
}

async function getById(req,res){
    const id = parseInt(req.params.id);
    console.log("id",id);
    const{error,data} = await userController.getById(id)
    res.json({error,data});
}

async function create(req,res){
    // const {name,is_alive,birth_date} = req.body;
    const {id_user, user_name, user_password, user_city, user_rol} = req.query;
    const {error,data} = await userController.create({id_user, user_name, user_password, user_city, user_rol});
    res.json({error,data});
}

async function update(req,res){
    const id = parseInt(req.params.id);
    // const {name,is_alive,birth_date} = req.body;
    const {id_user, user_name, user_password, user_city, user_rol} = req.query;
    const {error,data} = await userController.update(id,{id_user, user_name, user_password, user_city, user_rol});
    res.json({error,data});
}

async function remove(req,res){
    const id = parseInt(req.params.id);
    const {error,data} = await userController.remove(id);
    res.json({error,data});
}



export {
    register,
    login,
    getAll,
    getById,
    create,
    update,
    remove
}

export default {
    register,
    login,
    getAll,
    getById,
    create,
    update,
    remove
}