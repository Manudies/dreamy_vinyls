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
    const {error,data} = await vinylController.create({album_name,artist_name,price,relase_date});
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

async function addToCart(req, res) {
    const userId = req.session.user.id_user; 
    
    const vinylId = req.body.id_vinyl;
    const {error,data:cart} = await vinylController.addToCart(userId,vinylId);
    console.log("carrito",cart)
    res.redirect("/cart/"+cart.id_cart);
}

export {
    getAll,
    getById,
    create,
    createForm,
    update,
    updateForm,
    remove,
    addToCart
}

export default {
    getAll,
    getById,
    create,
    createForm,
    update,
    updateForm,
    remove,
    addToCart
}