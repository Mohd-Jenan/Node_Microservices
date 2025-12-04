const express=require("express")
const { createTask, getTasks } = require("../controller/task")
const router=express.Router()

router.post("/create/task",createTask)
router.get("/getAll",getTasks)
module.exports=router