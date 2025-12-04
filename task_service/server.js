const express=require("express")
require("dotenv").config()
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const app=express()
const taskRoute=require("./routes/task")
const { rabbitmqWithRetry } = require("./rabbitMQ/rabbitMq.connection")
const port=process.env.PORT || 3031

mongoose.connect(process.env.MONGO_URI,{
    
}).then(()=>{
    console.log("mongo db connected");
    
}).catch((err)=>{
    console.log("mongodb connection failed",err);
     
})

app.use(bodyParser.json())
app.use("/api",taskRoute)


app.listen(port,()=>{
    console.log("task_service is running on port",port)
    rabbitmqWithRetry()
})