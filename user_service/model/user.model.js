const mongoose= require("mongoose")

const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    mobile:Number
})

module.exports=mongoose.model("user",userSchema)
// module.exports = mongoose.model("user", userSchema);
