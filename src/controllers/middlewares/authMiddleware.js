import jwt from "jsonwebtoken"

function isTokenCorrect(req,res,next){
    try {
        const authorization = req.headers.authorization;
        if(!authorization){
           return res.status(401).json({error:"no hay token jwt"});
        }
        const token =authorization.split("Bearer ")[1];
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        console.log(decoded)
        next();
    } catch (error) {
        console.error(error);
        res.status(400).json({error:"error verificando token"})
    }

}

export{isTokenCorrect};

export default {isTokenCorrect};