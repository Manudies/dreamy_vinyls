import cartModel from "../../models/cartModel.js";

/**
 * @module controllers/cart/cartController
 */

/**
 * Retrieves all items from the cart.
 *
 * @return {Object} JSON response containing error and data of all items in the cart
 */
async function getAll(id=null){
    const condition = id ? {where:{id_user:id}} : null
    try {
        const carts = await cartModel.findAll({include:["vinilos","user"], ...condition});
        return {data:carts}
    }
    catch (error) {
        console.error(error);
        return { error: error };
    }
}

/**
 * Retrieves a specific item from the cart by ID.
 *
 * @param {type} id - The ID of the item to retrieve
 * @return {Object} JSON response containing error and data of the retrieved item
 */
async function getById(id){
    try {
        const user = await cartModel.findByPk(id,{include:["vinilos","user"]});
        if (!user) {
            return { error: "El carrito no existe"};
        }
        return {data: user};
    } catch (error) {
        console.error(error);
        return {error};
    }
}

/**
 * Creates a new item in the cart.
 *
 * @param {Object} cartData - The data of the new item to be created in the cart
 * @return {Object} JSON response containing error or data of the created item
 */
async function create(cartData){
    try {
        const newcart= await cartModel.create(cartData);
        return {data:newcart}
    } catch (error) {
        console.error(error);
        return {error}
    }   
}
/**
 * Updates an item in the cart.
 *
 * @param {type} id - The ID of the item to update
 * @param {Object} cartData - The data to update the item with
 * @return {Object} JSON response containing the updated item data
 */
async function update(id,cartData){
    try {
        if(cartData.cart_id==""){
            delete cartData.cart_id
        }
        const newCart = await cartModel.update(cartData, 
            {
            where:
            {
                id_cart:id
            }
        }
    );
        return{data:newCart};

    } catch (error) {
        console.error(error);
        return {error}  
    }

}

/**
 * Removes an item from the cart.
 *
 * @param {type} id - The ID of the item to remove
 * @return {Object} JSON response containing the removed item data
 */
async function remove(id){
    try {
        const cart = await cartModel.findByPk(id);
        await cart.destroy();
        return {data:cart};
    } 
    catch (error) {
        console.error(error);
        return{error}
    }
}

export {
    getAll,
    getById,
    create,
    update,
    remove
};

export default {
    getAll,
    getById,
    create,
    update,
    remove
};