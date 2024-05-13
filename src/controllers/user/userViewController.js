import userController from "./userController.js";

async function registerForm(req,res){
    res.render("user/register");
}

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

async function loginForm(req,res){
    res.render("user/login");
}

async function login(req,res) {
    const {user_name,password} = req.body;
    const {error,data} = await userController.login(user_name,password);
    if(error){
        res.render("user/login",{error});
    }
    else{
        req.session.user = data;
        res.redirect("/vinyl");
    }
}

async function logout(req,res){
    req.session.user = null;
    res.redirect("/artist");
}

async function getAll(req,res){
    const {error,data} = await userController.getAll();
    res.render("user/list",{error,data});
}

async function getById(req,res){
    const id = parseInt(req.params.id);
    console.log("id",id);
    const{error,data} = await userController.getById(id)
    res.render("user/show",{error,user:data});
}

async function createForm(req,res){
    res.render("user/new");
}

async function create(req,res){
    const {id_user, user_name, user_password, user_city, user_rol} = req.body;
    //const {name,is_alive,birth_date} = req.query;
    const {error,data} = await userController.create({id_user, user_name, user_password, user_city, user_rol});
    //res.json({error,data});
    res.redirect("/user");
}
async function updateForm(req,res){
    const id = parseInt(req.params.id);
    const {error,data:user}= await userController.getById(id);
    res.render("user/update",{error,user});
}

async function update(req,res){
    const id = parseInt(req.params.id);
    const {id_user, user_name, user_password, user_city, user_rol} = req.body;
    const {error,data} = await userController.update(id,{id_user, user_name, user_password, user_city, user_rol});
    res.redirect("/user");
}

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