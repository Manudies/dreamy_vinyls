import userController from "./userController.js";

/**
 * @module controllers/user/userApiControllers
 */

/**
 * Asynchronously registers a user with the provided user_name, password, and passwordRepeat.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Promise} A Promise that resolves with the registered user data or rejects with an error.
 */
async function register(req,res) {
    const {user_name,password,passwordRepeat} = req.body;
    const {error,data} = await userController.register(user_name,password,passwordRepeat);
    if(error){
        res.status(400).json({error});
    }
    else{
        res.json({data});
    }
}

/**
 * Asynchronously handles user login functionality.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Promise<void>} JSON response with error or data.
 */
async function login(req,res) {
    const {user_name,password} = req.body;
    const {error,data} = await userController.login(user_name,password);
    if(error){
        res.status(400).json({error});
    }
    else{
        res.json({data});
    }
}


/**
 * Asynchronously retrieves all users and sends a JSON response with the list of users.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Promise<void>} JSON response with the list of users.
 */
async function getAll(req,res){
    const {data:users}= await userController.getAll();
    res.json(users);
}

/**
 * Asynchronously retrieves a user by ID and sends a JSON response with the user data.
 *
 * @param {Object} req - The request object containing the user ID.
 * @param {Object} res - The response object to send the user data.
 * @return {Promise<void>} JSON response with error or user data.
 */
async function getById(req,res){
    const id = parseInt(req.params.id);
    console.log("id",id);
    const{error,data} = await userController.getById(id)
    res.json({error,data});
}

/**
 * Asynchronously creates a user with the provided user information and sends a JSON response with the error and data.
 *
 * @param {Object} req - The request object containing user information.
 * @param {Object} res - The response object to send the JSON response.
 * @return {Promise<void>} JSON response with error and data.
 */
async function create(req,res){
    const {id_user, user_name, user_password, user_city, user_rol} = req.query;
    const {error,data} = await userController.create({id_user, user_name, user_password, user_city, user_rol});
    res.json({error,data});
}

/**
 * Asynchronously updates user information with the provided data and sends a JSON response with the error and data.
 *
 * @param {Object} req - The request object containing user information.
 * @param {Object} res - The response object to send the JSON response.
 * @return {Promise<void>} JSON response with error and data.
 */
async function update(req,res){
    const id = parseInt(req.params.id);
    const {id_user, user_name, user_password, user_city, user_rol} = req.query;
    const {error,data} = await userController.update(id,{id_user, user_name, user_password, user_city, user_rol});
    res.json({error,data});
}

/**
 * Asynchronously removes a user based on the ID provided in the request parameters and sends a JSON response with the error and data.
 *
 * @param {Object} req - The request object containing the user ID.
 * @param {Object} res - The response object to send the JSON response.
 * @return {Promise<void>} JSON response with error and data.
 */
async function remove(req,res){
    const id = parseInt(req.params.id);
    const {error,data} = await userController.remove(id);
    res.json({error,data});
}

export {
    register,
    login,
    getAll,
    getById,
    create,
    update,
    remove
}

export default {
    register,
    login,
    getAll,
    getById,
    create,
    update,
    remove
}