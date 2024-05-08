import cartController from "./cartController.js";

async function getAll(req,res){
    const {error,data} = await cartController.getAll();
    res.json({error,data});
}

async function getById(req,res){
    const id = parseInt(req.params.id);
    console.log("id",id);
    const{error,data} = await cartController.getById(id)
    res.json({error,data});
}

async function create(req,res){
    // const {id_cart,cart_closed,id_user} = req.body;
    const {id_cart,cart_closed,id_user} = req.query;
    const {error,data} = await cartController.create({id_cart,cart_closed,id_user});
    res.json({error,data});
}

async function update(req,res){
    const id = parseInt(req.params.id);
    // const {id_cart,cart_closed,id_user} = req.body;
    const {id_cart,cart_closed,id_user} = req.query;
    const {error,data} = await cartController.update(id,{id_cart,cart_closed,id_user});
    res.json({error,data});
}

async function remove(req,res){
    const id = parseInt(req.params.id);
    const {error,data} = await cartController.remove(id);
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