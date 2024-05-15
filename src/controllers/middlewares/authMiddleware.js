import jwt from "jsonwebtoken"

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

function hasSession(req,res,next){
    const user = req.session.user;
    console.log("session user",req.session);
    if(!user){
        return res.redirect("/login");
    }
    next();
}

//funcion para comprobar si es administrador
function isAdmin(req,res,next){
    const user = req.session.user;
    if(!user || user.user_rol !== "admin"){
        return res.status(403).render( "denegado",{error: "Solo administradores"});
    }
    next()
}


export{isTokenCorrect,hasSession,isAdmin};

export default {isTokenCorrect,hasSession,isAdmin};