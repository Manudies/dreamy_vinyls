import cartController from "./cartController.js";

async function getAll(req,res){
    const {error,data} = await cartController.getAll();
    res.render("cart/list",{error,data});
}

async function getById(req,res){
    const id = parseInt(req.params.id);
    console.log("id",id);
    const{error,data} = await cartController.getById(id)
    res.render("cart/show",{error,cart:data});
}

async function createForm(req,res){
    res.render("cart/new");
}

async function create(req,res){
    const {id_cart,id_user,cart_closed} = req.body;
    //const {id_cart,cart_closed,id_user} = req.query;
    const {error,data} = await cartController.create({id_cart,id_user,cart_closed});
    //res.json({error,data});
    res.redirect("/cart");
}
async function updateForm(req,res){
    const id = parseInt(req.params.id);
    const {error,data:cart}= await cartController.getById(id);
    res.render("cart/update",{error,cart});
}



async function update(req,res){
    const id = parseInt(req.params.id);
    const {id_cart,id_user,cart_closed} = req.body;
    const real_cart_closed = cart_closed === "on" ? 1 : 0; 
    console.log("real_cart_closed = ",real_cart_closed)
    console.log("cart_closed = ",cart_closed,id)
    const {error,data} = await cartController.update(id,{id_cart,id_user,cart_closed:real_cart_closed});
    console.log("le pasamos cart_closed = ", cart_closed)
    res.redirect("/cart");
}




async function remove(req,res){
    const id = parseInt(req.params.id);
    const {error,data} = await cartController.remove(id);
    res.redirect("/cart");
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