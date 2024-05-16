import genreController from "./genreController.js";

/**
 * @module controllers/genre/genreViewController
 */

/**
 * Retrieves all items and renders them in the genre list view.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object to render the list view
 * @return {void}
 */
async function getAll(req,res){
    const {error,data} = await genreController.getAll();
    res.render("genre/list",{error,data});
}

/**
 * Retrieves a specific item from the genre by ID and renders it in the show view.
 *
 * @param {Object} req - The request object containing the ID parameter
 * @param {Object} res - The response object to render the retrieved item
 * @return {void}
 */
async function getById(req,res){
    const id = parseInt(req.params.id);
    const{error,data} = await genreController.getById(id)
    res.render("genre/show",{error,genre:data});
}

/**
 * Renders the form for creating a new genre.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object to render the form
 * @return {void}
 */
async function createForm(req,res){
    res.render("genre/new");
}

/**
 * Creates a new genre.
 *
 * @param {Object} req - The request object containing the genre name
 * @param {Object} res - The response object to redirect to "/genre"
 * @return {void}
 */
async function create(req,res){
    const genre_name = req.body;
    const {error,data} = await genreController.create(genre_name);
    res.redirect("/genre");
}
/**
 * Renders the form for updating a genre item.
 *
 * @param {Object} req - The request object containing the ID parameter
 * @param {Object} res - The response object to render the updated genre item
 * @return {void}
 */
async function updateForm(req,res){
    const id = parseInt(req.params.id);
    const {error,data:genre}= await genreController.getById(id);
    res.render("genre/update",{error,genre});
}

/**
 * Updates a genre.
 *
 * @param {type} req - The request object containing the ID parameter
 * @param {type} res - The response object to redirect to "/genre"
 * @return {type} void
 */
async function update(req,res){
    const id = parseInt(req.params.id);
    const {id_genre,genre_name} = req.body;
    const {error,data} = await genreController.update(id,{id_genre,genre_name});
    res.redirect("/genre");
}

/**
 * Removes an item from the genre.
 *
 * @param {type} req - The request object containing the ID parameter
 * @param {type} res - The response object to redirect to "/genre"
 * @return {type} void
 */
async function remove(req,res){
    const id = parseInt(req.params.id);
    const {error,data} = await genreController.remove(id);
    res.redirect("/genre");
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