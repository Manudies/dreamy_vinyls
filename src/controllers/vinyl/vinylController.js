import vinylModel from "../../models/vinylModel.js";
import cartModel from "../../models/cartModel.js";

/**
 * @module controllers/vinyl/vinylControllers
 */

/**
 * Asynchronously retrieves all vinyl records and sends a JSON response with the list of vinyl.
 *
 * @return {Promise<void>} JSON response with the list of vinyl records.
 */
async function getAll() {
    try {
        const vinyls = await vinylModel.findAll({include:["genero"]});
        return { data: vinyls };
    }
    catch (error) {
        console.error(error);
        return { error: error };
    }
}

/**
 * Asynchronously retrieves a vinyl record by ID and includes the genre information in the response.
 *
 * @param {number} id - The ID of the vinyl record to retrieve.
 * @return {Object} An object containing the vinyl record data or an error object.
 */
async function getById(id) {
    try {
        const vinyl = await vinylModel.findByPk(id,{include:["genero"]});
        if (!vinyl) {
            return { error: "El vinilo no existe" };
        }
        return { data: vinyl };
    }
    catch (error) {
        console.error(error);
        return { error };
    }
}

/**
 * Asynchronously creates a vinyl record with the provided data.
 *
 * @param {Object} vinylData - The data for the new vinyl record.
 * @return {Promise<Object>} An object containing the created vinyl record or an error object.
 */
async function create(vinylData) {
    try {
        const newVinyl = await vinylModel.create(vinylData);
        return {data:newVinyl};
    } catch (error) {
        console.error(error);
        return {error}
    }
}

/**
 * Updates a vinyl record with the provided data.
 *
 * @param {number} id - The ID of the vinyl record to update.
 * @param {Object} vinylData - The data for the vinyl record update.
 * @return {Object} An object containing the updated vinyl record data or an error object.
 */
async function update(id, vinylData) {
    try {
        if(vinylData.album_name === ""){
            delete vinylData.album_name;
        }
        const newVinyl = await vinylModel.update(vinylData,
            {
                where: 
                {
                    id_vinyl:id
                }
            }
        );
        return {data:newVinyl};
    } catch (error) {
        console.error(error);
        return {error}
    }
}

/**
 * Asynchronously removes a vinyl record based on the ID provided, and handles errors gracefully.
 *
 * @param {number} id - The ID of the vinyl record to remove.
 * @return {Object} An object containing the removed vinyl record data or an error object.
 */
async function remove(id) {
    try {
        const result = await vinylModel.findByPk(id);
        await result.destroy();
        return {data:result};
    } catch (error) {
        console.error(error);
    }
    
}



/**
 * Adds a vinyl record to the user's cart if the user already has a cart, otherwise creates a new cart and adds the vinyl record to it.
 *
 * @param {number} userId - The ID of the user.
 * @param {number} vinylId - The ID of the vinyl record to add to the cart.
 * @return {Object} An object containing the cart data after adding the vinyl record or an error object.
 */
async function addToCart(userId,vinylId) {

    try {
        let cart = await cartModel.findOne(
            { 
                where: 
                {
                        id_user: userId ,
                        cart_closed : false
                }
                 
            }
        );
        console.log("hay un carrito",cart)
        if (!cart) {
            console.log("no hay carrito")
            cart = await cartModel.create({ id_user: userId });
        }
        await cart.addVinilo(vinylId);
        console.log("añadiendo vinilo",cart)
        return {data:cart}
    } catch (error) {
        console.error(error)
        return {error}
    }
}

export {
    getAll,
    getById,
    create,
    update,
    remove,
    addToCart
};

export default {
    getAll,
    getById,
    create,
    update,
    remove,
    addToCart
};