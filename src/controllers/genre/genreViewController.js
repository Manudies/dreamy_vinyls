import genreController from "./genreController.js";

async function getAll(req,res){
    const {error,data} = await genreController.getAll();
    res.render("genre/list",{error,data});
}

async function getById(req,res){
    const id = parseInt(req.params.id);
    const{error,data} = await genreController.getById(id)
    res.render("genre/show",{error,genre:data});
}

async function createForm(req,res){
    res.render("genre/new");
}

async function create(req,res){
    const genre_name = req.body;
    const {error,data} = await genreController.create(genre_name);
    res.redirect("/genre");
}
async function updateForm(req,res){
    const id = parseInt(req.params.id);
    const {error,data:genre}= await genreController.getById(id);
    res.render("genre/update",{error,genre});
}

async function update(req,res){
    const id = parseInt(req.params.id);
    const {id_genre,genre_name} = req.body;
    const {error,data} = await genreController.update(id,{id_genre,genre_name});
    res.redirect("/genre");
}

async function remove(req,res){
    const id = parseInt(req.params.id);
    const {error,data} = await genreController.remove(id);
    res.redirect("/genre");
}

export {
    getAll,
    getById,
    create,
    createForm,
    update,
    updateForm,
    remove
}

export default {
    getAll,
    getById,
    create,
    createForm,
    update,
    updateForm,
    remove
}