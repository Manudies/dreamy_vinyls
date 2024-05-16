import userController from "./userController.js";

async function register(req,res) {
    const {user_name,password,passwordRepeat} = req.body;
    const {error,data} = await userController.register(user_name,password,passwordRepeat);
    if(error){
        res.status(400).json({error});
    }
    else{
        res.json({data});
    }
}

async function login(req,res) {
    const {user_name,password} = req.body;
    const {error,data} = await userController.login(user_name,password);
    if(error){
        res.status(400).json({error});
    }
    else{
        res.json({data});
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
    const {id_user, user_name, user_password, user_city, user_rol} = req.query;
    const {error,data} = await userController.create({id_user, user_name, user_password, user_city, user_rol});
    res.json({error,data});
}

async function update(req,res){
    const id = parseInt(req.params.id);
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