const jwt = require("jsonwebtoken");

const authentication = async(req,res,next)=>{
    try {
        let token = req?.headers?.authorization;

        if(!token){
            res.send({Data: "Not a authorized user !"});
        }

        token = req.headers.authorization.split(" ")[1];

        const validToken = await jwt.verify(token, process.env.KEY);

        if(!validToken){
            res.send({Data: "Not a authorized user !"})
        }

        req.body.user_id = validToken.user_id;
        next();
    } catch (error) {
        res.status(400).send(error.message);
    }
}


module.exports = authentication;
