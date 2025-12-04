const express=require("express")
require("dotenv").config()
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const app=express()
const userRoute=require("./routes/user")
const port=process.env.PORT || 3030

mongoose.connect(process.env.MONGO_URI,{
    
}).then(()=>{
    console.log("mongo db connected");
    
}).catch((err)=>{
    console.log("mongodb connection failed",err);
     
})

app.use(bodyParser.json())
// app.get("/",(req,res)=>{
//     res.send("Hello World?")
// })
app.use("/api",userRoute)


app.listen(port,()=>{
    console.log("uase_service is running on port",port)
})