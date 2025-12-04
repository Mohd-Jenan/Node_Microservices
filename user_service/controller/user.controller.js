const userModel=require("../model/user.model")

exports.createUser=async(req,res)=>{
    try{
        const{name,email,mobile}=req.body

        const newUser=new userModel({
            name,
            email,
            mobile
        })
        await newUser.save()     
        res.status(201).json(newUser)
    }
    catch(error){
        console.log("having error",error);
        res.status(500).json({error:"Internal server error"})
    }
}
exports.getUser=async(req,res)=>{
    try{
        const users=await userModel.find()
        res.json(users)
    }catch(err){
        console.log("some error happening",err);
        res.status(500).json({error:"something happen with get api",err})
    }
}