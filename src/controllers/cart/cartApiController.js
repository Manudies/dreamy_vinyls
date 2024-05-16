import cartController from "./cartController.js";

/**
 * @module controllers/cart/cartApiController
 */

/**
 * Retrieves all items from the cart.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @return {Object} JSON response containing error and data
 */
async function getAll(req,res){
    const {error,data} = await cartController.getAll();
    res.json({error,data});
}

/**
 * Retrieves a specific item from the cart by ID.
 *
 * @param {Object} req - The request object containing the ID parameter
 * @param {Object} res - The response object to send the retrieved item
 * @return {Object} JSON response containing error and data of the retrieved item
 */
async function getById(req,res){
    const id = parseInt(req.params.id);
    const{error,data} = await cartController.getById(id)
    res.json({error,data});
}

/**
 * Creates a new item in the cart.
 *
 * @param {Object} req - The request object containing the id_cart, cart_closed, and id_user
 * @param {Object} res - The response object to send the JSON response
 * @return {Object} JSON response containing error and data of the created item
 */
async function create(req,res){
    const {id_cart,cart_closed,id_user} = req.query;
    const {error,data} = await cartController.create({id_cart,cart_closed,id_user});
    res.json({error,data});
}

/**
 * Updates an item in the cart.
 *
 * @param {Object} req - The request object containing the id, id_cart, cart_closed, and id_user
 * @param {Object} res - The response object to send the JSON response
 * @return {Object} JSON response containing error and data of the updated item
 */
async function update(req,res){
    const id = parseInt(req.params.id);
    const {id_cart,cart_closed,id_user} = req.query;
    const {error,data} = await cartController.update(id,{id_cart,cart_closed,id_user});
    res.json({error,data});
}

/**
 * Removes an item from the cart.
 *
 * @param {Object} req - The request object containing the ID parameter
 * @param {Object} res - The response object to send the removed item
 * @return {Object} JSON response containing error and data of the removed item
 */
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