import genreController from "./genreController.js";

async function getAll(req,res){
    const {error,data} = await genreController.getAll();
    res.json({error,data});
}

async function getById(req,res){
    const id = parseInt(req.params.id);
    console.log("id",id);
    const{error,data} = await genreController.getById(id)
    res.json({error,data});
}

async function create(req,res){
    // const {name,is_alive,birth_date} = req.body; 
    const {genre_name} = req.query;
    const {error,data} = await genreController.create({genre_name});
    res.json({error,data});
}

async function update(req,res){
    const id = parseInt(req.params.id);
    // const genre_name = req.body;
    const {genre_name} = req.query;
    const {error,data} = await genreController.update({genre_name});
    res.json({error,data});
}

async function remove(req,res){
    const id = parseInt(req.params.id);
    const {error,data} = await genreController.remove(id);
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