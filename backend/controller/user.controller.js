const userModel = require("../model/user.model")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const dotenv = require('dotenv')
dotenv.config()
const secret = process.env.JWTSecretKey





// apis

// registration

const createUser = async (req, res) => {
    const { username, password, email} = req.body
    const encodePass = await bcrypt.hash(password, 10)
    // console.log(encodePass)

    const userObj = {
        username: username,
        password: encodePass,
        email: email,
       
    }
    try {
        const emailChecking = await userModel.findOne({ email })
        // console.log(emailChecking)
        if (emailChecking === { email }) {
            return res.status(200).json({
                msg: `${email} already exist`
            })
        }
        else {
            let data = await userModel(userObj).save()
            console.log(userObj)
            return res.status(200).json({ 
                msg: `${email} is registerd successfully` 
            })
        }
    } 
    catch (error) {
        return res.status(400).json({ 
            msg: `${error}` 
        })
    }
}

// login

const setUser = (payload) => {
    return jwt.sign({ payload }, secret, {expiresIn:"12h"})
}

const dashboard = async(req,res)=>{
    try{
        res.json({msg: "hello dashboard"})
    }
    catch{
        res.json({msg:"not allowed"})
    }
}

const userLogin = async (req, res) => {
    
    const { email, password } = req.body
    // const userpass = { password }
    try {
        const data = await userModel.findOne({ email })
        // console.log(data)

        if (data) {
            if (await bcrypt.compare(password, data.password)) {

                const token = setUser(data)
                // res.cookie("uid",token)
                res.cookie('jsonwebtoken', token, {
                    expires:new Date(Date.now()+(1000)*60*60*24*30), 
                    httpOnly:true
                }) // 30 day expiry

                // res.setHeader("JWT", token)
                // console.log(getUser(token))

                return res.json({
                    
                    message: `${data.username} logged in successfully`,
                    token: token
                })
            }
            return res.json({
                message: `Incorrect password`
            })
        }
        return res.json({
            message: "User doesn't exist or Incorrect email"
        })
    }
    catch (error) {
        return res.status(400).json({ msg: `${error}` })
    }
}

const getCookie = async(req,res)=>{
    let data = req.cookies('jsonwebtoken')
    return res.json({cookie:data})
}


module.exports = { createUser,  userLogin, dashboard, getCookie}