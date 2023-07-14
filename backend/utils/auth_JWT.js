const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const { userLogin } = require('../controller/user.controller')
dotenv.config()
const secret = process.env.JWTSecretKey

const verifyJWT = async (req, res, next) => {

    const token = req.cookies.jsonwebtoken
    // console.log(req.cookies.jsonwebtoken)
    // const token = authHeader.split(" ")[1]

    if (!token) {
       return res.json("NO token found") 
       // return userLogin() // send to login again
    }

    const tokenVerify = jwt.verify(token, secret)
    if (tokenVerify) {
       
        return next()
    }

    else {
        return res.send("User Invalid")
    }
    
}

module.exports =  verifyJWT 