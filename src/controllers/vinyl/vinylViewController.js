import vinylController from "./vinylController.js";

async function getAll(req,res){
    const {error,data} = await vinylController.getAll();
    res.render("vinyl/list",{error,data});
}

async function getById(req,res){
    const id = parseInt(req.params.id);
    console.log("id",id);
    const{error,data} = await vinylController.getById(id)
    res.render("vinyl/show",{error,vinyl:data});
}

async function createForm(req,res){
    res.render("vinyl/new");
}

async function create(req,res){
    const {album_name,artist_name,price,relase_date} = req.body;
    //const {album_name,artist_name,price,relase_date} = req.query;
    const {error,data} = await vinylController.create({album_name,artist_name,price,relase_date});
    //res.json({error,data});
    res.redirect("/vinyl");
}
async function updateForm(req,res){
    const id = parseInt(req.params.id);
    const {error,data:vinyl}= await vinylController.getById(id);
    res.render("vinyl/update",{error,vinyl});
}

async function update(req,res){
    const id = parseInt(req.params.id);
    const {album_name,artist_name,price,relase_date} = req.body;
    const {error,data} = await vinylController.update(id,{album_name,artist_name,price,relase_date});
    res.redirect("/vinyl");
}

async function remove(req,res){
    const id = parseInt(req.params.id);
    const {error,data} = await vinylController.remove(id);
    res.redirect("/vinyl");
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