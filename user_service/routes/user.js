const express=require("express")
const { createUser, getUser } = require("../controller/user.controller")
const router=express.Router()

router.post("/user/create",createUser)
router.get("/user/getAll",getUser)
module.exports=router