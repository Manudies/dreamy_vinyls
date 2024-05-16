import genreController from "./genreController.js";

/**
 * @module controllers/genre/genreApiController
 */

/**
 * Retrieves all items from the genre controller.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @return {Object} JSON response containing error and data
 */
async function getAll(req,res){
    const {error,data} = await genreController.getAll();
    res.json({error,data});
}

/**
 * Retrieves a specific item from the genre by ID.
 *
 * @param {type} req - The request object containing the ID parameter
 * @param {type} res - The response object to send the retrieved item
 * @return {type} JSON response containing error and data of the retrieved item
 */
async function getById(req,res){
    const id = parseInt(req.params.id);
    const{error,data} = await genreController.getById(id)
    res.json({error,data});
}

/**
 * Creates a new genre.
 *
 * @param {type} req - The request object containing the genre name
 * @param {type} res - The response object to send the JSON response
 * @return {type} JSON response containing error and data of the created genre
 */
async function create(req,res){ 
    const {genre_name} = req.query;
    const {error,data} = await genreController.create({genre_name});
    res.json({error,data});
}

/**
 * Updates a genre.
 *
 * @param {type} req - The request object containing the genre name
 * @return {type} JSON response containing error and data of the updated genre
 */
async function update(req,res){
    const id = parseInt(req.params.id);
    const {genre_name} = req.query;
    const {error,data} = await genreController.update({genre_name});
    res.json({error,data});
}

/**
 * Removes an item from the genre.
 *
 * @param {type} req - The request object containing the ID parameter
 * @return {type} JSON response containing error and data of the removed item
 */
async function remove(req,res){
    const id = parseInt(req.params.id);
    const {error,data} = await genreController.remove(id);
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