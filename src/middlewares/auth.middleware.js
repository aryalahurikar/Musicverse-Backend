const jwt = require("jsonwebtoken")

async function authArtist(req,res,next){

    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({message:"Unauthorized"})


    }

    try{

        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        console.log("DECODED:", decoded);

        if(decoded.role !== "artist"){
            return res.status(403).json({message:"You dont have access "})
        }

        req.user = decoded;

        console.log("REQ.USER SET:", req.user);
        next()

    }catch(err){
        console.log(err)
        return res.status(401).json({message:"Unauthorized"})
    }

}

async function authUser(req,res,next){

    const token = req.cookies.token

    if(!token){
        return res.status(400).json({
            message:"Unauthorized"
        })
    }

    try{

        const decoded = jwt.verify(token,process.env.JWT_SECRET)

        if(decoded.role !== "user"){

            return res.status(400).json({
                message:"You dont have the aceess"
            })
        }

        req.user = decoded

        next()

    }catch(err){

        return res.status(400).json({
            message:"Invalid token"
        })
    }
}
module.exports = {authArtist,authUser}