const express = require("express")
const Router = express.Router()
const verifyJWT = require('../utils/auth_JWT')


const {createUser,  userLogin, dashboard, getCookie
}= require("../controller/user.controller")
const { verify } = require("jsonwebtoken")

// const authMiddleware = require("../utils/auth_JWT")

// router.get("/",test)
// router.route("/dashboard").get(authMiddleware,dashboard)
Router.post("/register", createUser)
Router.post("/login",   userLogin)
Router.get("/dashboard", verifyJWT, dashboard)
// Router.get("/cookie",  verifyJWT, getCookie)

module.exports= Router