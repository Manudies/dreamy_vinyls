import vinylController from "./vinylController.js";

/**
 * @module controllers/vinyl/vinylViewControllers
 */

/**
 * Asynchronously retrieves all vinyl records and renders the vinyl list.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {void}
 */
async function getAll(req,res){
    const {error,data} = await vinylController.getAll();
    res.render("vinyl/list",{error,data});
}

/**
 * Asynchronously retrieves a vinyl record by ID and renders the vinyl data on the 'vinyl/show' page.
 *
 * @param {Object} req - The request object containing the vinyl record ID.
 * @param {Object} res - The response object to render the vinyl data.
 * @return {void}
 */
async function getById(req,res){
    const id = parseInt(req.params.id);
    const{error,data} = await vinylController.getById(id)
    res.render("vinyl/show",{error,vinyl:data});
}

/**
 * Renders the form for creating a new vinyl record.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {void}
 */
async function createForm(req,res){
    res.render("vinyl/new");
}

/**
 * Asynchronously creates a vinyl record with the provided album name, artist name, price, and release date and redirects to the vinyl page.
 *
 * @param {Object} req - The request object containing the vinyl record information.
 * @param {Object} res - The response object to redirect to the vinyl page.
 * @return {void}
 */
async function create(req,res){
    const {album_name,artist_name,price,relase_date} = req.body;
    const {error,data} = await vinylController.create({album_name,artist_name,price,relase_date});
    res.redirect("/vinyl");
}
/**
 * Asynchronously updates the vinyl form with the retrieved vinyl data based on the ID from the request parameters.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object to render the 'vinyl/update' page.
 * @return {void}
 */
async function updateForm(req,res){
    const id = parseInt(req.params.id);
    const {error,data:vinyl}= await vinylController.getById(id);
    res.render("vinyl/update",{error,vinyl});
}

/**
 * Asynchronously updates a vinyl record with the provided album name, artist name, price, and release date and redirects to the vinyl page.
 *
 * @param {Object} req - The request object containing the vinyl record information.
 * @param {Object} res - The response object to redirect to the vinyl page.
 * @return {void}
 */
async function update(req,res){
    const id = parseInt(req.params.id);
    const {album_name,artist_name,price,relase_date} = req.body;
    const {error,data} = await vinylController.update(id,{album_name,artist_name,price,relase_date});
    res.redirect("/vinyl");
}

/**
 * Asynchronously removes a vinyl record based on the ID provided in the request parameters and redirects to the vinyl page.
 *
 * @param {Object} req - The request object containing the vinyl record ID.
 * @param {Object} res - The response object to redirect to the vinyl page.
 */
async function remove(req,res){
    const id = parseInt(req.params.id);
    const {error,data} = await vinylController.remove(id);
    res.redirect("/vinyl");
}

/**
 * Asynchronously adds a vinyl record to the user's cart based on the user ID and vinyl ID, then redirects to the cart page.
 *
 * @param {Object} req - The request object containing user and vinyl information.
 * @param {Object} res - The response object to redirect to the cart page.
 * @return {void}
 */
async function addToCart(req, res) {
    const userId = req.session.user.id_user; 
    const vinylId = req.body.id_vinyl;
    const {error,data:cart} = await vinylController.addToCart(userId,vinylId);
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