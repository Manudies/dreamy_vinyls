import jwt from "jsonwebtoken";

/**
 * @module controllers/middlewares
 */

/**
 * Middleware function to check if the token in the request header is correct.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware function
 * @return {void}
 */
function isTokenCorrect(req,res,next){
    try {
        const authorization = req.headers.authorization;
        if(!authorization){
           return res.status(401).json({error:"no hay token jwt"});
        }
        const token =authorization.split("Bearer ")[1];
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded; //linea añadida en la prueba
        console.log(decoded)
        next();
    } catch (error) {
        console.error(error);
        res.status(400).json({error:"error verificando token"})
    }

}

/**
 * Middleware function to check if the user has an active session.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware function
 * @return {void}
 */
function hasSession(req,res,next){
    const user = req.session.user;
    console.log("session user",req.session);
    if(!user){
        return res.redirect("/login");
    }
    next();
}


/**
 * Middleware function to check if the user is an admin.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware function
 * @return {void}
 */
function isAdmin(req,res,next){
    const user = req.session.user;
    if(!user || user.user_rol !== "admin"){
        return res.status(403).render( "denegado",{error: "Solo administradores"});
    }
    next()
}


export{isTokenCorrect,hasSession,isAdmin};

export default {isTokenCorrect,hasSession,isAdmin};