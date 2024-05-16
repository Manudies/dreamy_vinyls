import userController from "./userController.js";

/**
 * @module controllers/user/userViewControllers
 */

/**
 * Renders the user registration form.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {void}
 */
async function registerForm(req,res){
    res.render("user/register");
}

/**
 * Asynchronously registers a user with the provided user_name, password, passwordRepeat, and user_city. 
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {void}
 */
async function register(req,res) {
    const {user_name,password,passwordRepeat, user_city} = req.body;
    const {error,data} = await userController.register(user_name,password,passwordRepeat, user_city);
    if(error){
        res.render("user/register",{error});
    }
    else{
        res.redirect("/user/login");
    }
}

/**
 * Renders the user login form.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {void}
 */
async function loginForm(req,res){
    res.render("user/login");
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
        res.render("user/login",{error});
    }
    else{
        req.session.user = data;
        console.log("datos de usuario",req.session.user)
        res.redirect("/vinyl");
    }
}

/**
 * Asynchronously logs out the user by clearing the session user and redirects to the home page.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {void}
 */
async function logout(req,res){
    req.session.user = null;
    res.redirect("/home");
}

/**
 * Asynchronously retrieves all users and renders the user list.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {void}
 */
async function getAll(req,res){
    const {error,data} = await userController.getAll();
    res.render("user/list",{error,data});
}

/**
 * Asynchronously retrieves a user by ID and renders the user data on the 'user/show' page.
 *
 * @param {Object} req - The request object containing the user ID.
 * @param {Object} res - The response object to render the user data.
 * @return {void}
 */
async function getById(req,res){
    const id = parseInt(req.params.id);
    const{error,data} = await userController.getById(id)
    res.render("user/show",{error,user:data});
}

/**
 * Renders the user creation form.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {void}
 */
async function createForm(req,res){
    res.render("user/new");
}

/**
 * Asynchronously creates a user with the provided user information and redirects to the '/user' page.
 *
 * @param {Object} req - The request object containing user information.
 * @param {Object} res - The response object to redirect.
 * @return {void}
 */
async function create(req,res){
    const {id_user, user_name, user_password, user_city, user_rol} = req.body;
    const {error,data} = await userController.create({id_user, user_name, user_password, user_city, user_rol});
    res.redirect("/user");
}
/**
 * Asynchronously updates the user form with the retrieved user data based on the ID from the request parameters.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object to render the 'user/update' page.
 * @return {void}
 */
async function updateForm(req,res){
    const id = parseInt(req.params.id);
    const {error,data:user}= await userController.getById(id);
    res.render("user/update",{error,user});
}

/**
 * Asynchronously updates user information with the provided data and redirects to the '/user' page.
 *
 * @param {Object} req - The request object containing user information.
 * @param {Object} res - The response object to redirect.
 * @return {void}
 */
async function update(req,res){
    const id = parseInt(req.params.id);
    const {id_user, user_name, user_password, user_city, user_rol} = req.body;
    const {error,data} = await userController.update(id,{id_user, user_name, user_password, user_city, user_rol});
    res.redirect("/user");
}

/**
 * Asynchronously removes a user based on the ID provided in the request parameters and redirects to the '/user' page.
 *
 * @param {Object} req - The request object containing the user ID.
 * @param {Object} res - The response object to redirect.
 * @return {void}
 */
async function remove(req,res){
    const id = parseInt(req.params.id);
    const {error,data} = await userController.remove(id);
    res.redirect("/user");
}

export {
    register,
    registerForm,
    login,
    loginForm,
    logout,
    getAll,
    getById,
    create,
    createForm,
    update,
    updateForm,
    remove
}

export default {
    register,
    registerForm,
    login,
    loginForm,
    logout,
    getAll,
    getById,
    create,
    createForm,
    update,
    updateForm,
    remove
}