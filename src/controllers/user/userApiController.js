import userController from "./userController.js";

async function getAll(req,res){
    const {error,data} = await userController.getAll();
    res.json({error,data});
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
    getAll,
    getById,
    create,
    update,
    remove
}

export default {
    getAll,
    getById,
    create,
    update,
    remove
}