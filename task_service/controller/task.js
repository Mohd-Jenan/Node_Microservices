const taskModel=require("../model/task")
const {getChannel}=require("../rabbitMQ/rabbitMq.connection")

exports.createTask=async(req,res)=>{
    try{
        const {title,description,userId}=req.body
        const newTask=new taskModel({title,description,userId})

        await newTask.save()
        const message={taskId:newTask._id,userId,title}
        const channel=getChannel()
        if(!channel){
            return res.status(503).json({message:"RabbitMQ is not connected"})
        }
        channel.sendToQueue("new_task_created",Buffer.from(
            JSON.stringify(message)
        ))
        res.status(201).json(newTask)
    }
    catch(err){
        console.log("error to create the task",err);
        res.status(500).json({message:"Getting error while creating"})
    }
}
exports.getTasks=async(req,res)=>{
    try{
        const task=await taskModel.find()
        res.json(task)
    }catch(err){
        console.log("some error happening",err);
        res.status(500).json({error:"something happen with get api",err})
    }
}