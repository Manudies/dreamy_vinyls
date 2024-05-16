import cartController from "./cartController.js";

/**
 * @module controllers/cart/cartViewController
 */

/**
 * Retrieves all items from the cart and renders them in the list view.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object to render the list view
 * @return {void}
 */
async function getAll(req,res){
    const {id_user, user_rol}=req.session.user;
    const id = user_rol == "admin" ? null:id_user;
    const {error,data} = await cartController.getAll(id);
    res.render("cart/list",{error,data});
}

/**
 * Retrieves a specific item from the cart by ID.
 *
 * @param {type} req - The request object containing the ID parameter
 * @param {type} res - The response object to send the retrieved item
 * @return {type} JSON response containing error and data of the retrieved item
 */
async function getById(req,res){
    const {id_user, user_rol}=req.session.user;
    const id = parseInt(req.params.id);
    console.log("id",id);
    const{error,data} = await cartController.getById(id)
    if(user_rol !== "admin"){
        if(id_user !== data.id_user){
            return res.redirect("/cart")
        }
    }
    console.log("carrito!!!",data)
    res.render("cart/show",{error,cart:data});
}

/**
 * Renders the form for creating a new cart.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object to render the form
 * @return {void}
 */
async function createForm(req,res){
    res.render("cart/new");
}

/**
 * Creates a new item in the cart.
 *
 * @param {Object} req - The request object containing the id_cart, id_user, and cart_closed
 * @param {Object} res - The response object to redirect to /cart
 * @return {void}
 */
async function create(req,res){
    const {id_cart,id_user,cart_closed} = req.body;
    const {error,data} = await cartController.create({id_cart,id_user,cart_closed});
    res.redirect("/cart");
}
/**
 * Renders the form for updating a cart item.
 *
 * @param {Object} req - The request object containing the ID parameter
 * @param {Object} res - The response object to render the updated cart item
 * @return {void}
 */
async function updateForm(req,res){
    const id = parseInt(req.params.id);
    const {error,data:cart}= await cartController.getById(id);
    res.render("cart/update",{error,cart});
}

/**
 * Updates an item in the cart.
 *
 * @param {Object} req - The request object containing the ID parameter
 * @param {Object} res - The response object to redirect to /cart
 * @return {void}
 */
async function update(req,res){
    const id = parseInt(req.params.id);
    const {id_cart,id_user,cart_closed} = req.body;
    const real_cart_closed = cart_closed === "on" ? 1 : 0; 
    const {error,data} = await cartController.update(id,{id_cart,id_user,cart_closed:real_cart_closed});
    res.redirect("/cart");
}

/**
 * Removes an item from the cart.
 *
 * @param {type} req - The request object containing the ID parameter
 * @param {type} res - The response object to redirect to /cart
 * @return {type} void
 */
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