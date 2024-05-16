import vinylController from "./vinylController.js";

/**
 * @module controllers/vinyl/vinylApiControllers
 */

/**
 * Asynchronously retrieves all vinyl records and sends a JSON response with the list of vinyl.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Promise<void>} JSON response with the list of vinyl records.
 */
async function getAll(req,res){
    const {error,data} = await vinylController.getAll();
    res.json({error,data});
}

/**
 * Asynchronously retrieves a vinyl record by ID and sends a JSON response with the error and data.
 *
 * @param {Object} req - The request object containing the vinyl record ID.
 * @param {Object} res - The response object to send the JSON response.
 * @return {Promise<void>} JSON response with error and data.
 */
async function getById(req,res){
    const id = parseInt(req.params.id);
    const{error,data} = await vinylController.getById(id)
    res.json({error,data});
}

/**
 * Asynchronously creates a vinyl record with the provided album name, artist name, price, and release date.
 *
 * @param {Object} req - The request object containing the vinyl record information.
 * @param {Object} res - The response object to send the JSON response.
 * @return {Promise<void>} JSON response with error and data.
 */
async function create(req,res){
    const {album_name,artist_name,price,relase_date} = req.query;
    const {error,data} = await vinylController.create({album_name,artist_name,price,relase_date});
    res.json({error,data});
}

/**
 * Asynchronously updates a vinyl record with the provided data and sends a JSON response with the error and data.
 *
 * @param {Object} req - The request object containing vinyl record information.
 * @param {Object} res - The response object to send the JSON response.
 * @return {Promise<void>} JSON response with error and data.
 */
async function update(req,res){
    const id = parseInt(req.params.id);
    const {album_name,artist_name,price,relase_date} = req.query;
    const {error,data} = await vinylController.update(id,{album_name,artist_name,price,relase_date});
    res.json({error,data});
}

/**
 * Asynchronously removes a vinyl record based on the ID provided in the request parameters and sends a JSON response with the error and data.
 *
 * @param {Object} req - The request object containing the vinyl record ID.
 * @param {Object} res - The response object to send the JSON response.
 * @return {Promise<void>} JSON response with error and data.
 */
async function remove(req,res){
    const id = parseInt(req.params.id);
    const {error,data} = await vinylController.remove(id);
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