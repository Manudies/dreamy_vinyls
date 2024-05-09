
function isTokenCorrect(req,res,next){
    const authorization = req.headers.authorization;
    console.log("authorization",authorization);
    next();
}

export{isTokenCorrect};

export default {isTokenCorrect};