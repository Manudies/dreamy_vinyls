import vinylController from "./vinylController.js";

async function getAll(req,res){
    const {error,data} = await vinylController.getAll();
    res.json({error,data});
}

async function getById(req,res){
    const id = parseInt(req.params.id);
    console.log("id",id);
    const{error,data} = await vinylController.getById(id)
    res.json({error,data});
}

async function create(req,res){
    const {album_name,artist_name,price,relase_date} = req.query;
    const {error,data} = await vinylController.create({album_name,artist_name,price,relase_date});
    res.json({error,data});
}

async function update(req,res){
    const id = parseInt(req.params.id);
    const {album_name,artist_name,price,relase_date} = req.query;
    const {error,data} = await vinylController.update(id,{album_name,artist_name,price,relase_date});
    res.json({error,data});
}

async function remove(req,res){
    const id = parseInt(req.params.id);
    const {error,data} = await vinylController.remove(id);
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