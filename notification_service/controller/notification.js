const amqp=require("amqplib")

let channel, connection

async function start() {
        try{
            connection=await amqp.connect("amqp://rabbitmq:5672")
            channel=await connection.createChannel()
            await channel.assertQueue("new_task_created")
            console.log("Notification service listening to msgs");
            channel.consume("new_task_created",(msg)=>{
                const taskData=JSON.parse(msg.content.toString())
                console.log("New Task is:",taskData.title);
                console.log("New Task is:",taskData);
                channel.ack(msg)
            })
        }catch(error){
            console.log("Rabbitmq connection error:",error);
        }
    
}
module.exports={start}
