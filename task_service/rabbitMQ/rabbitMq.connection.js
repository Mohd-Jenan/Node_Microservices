const amqp=require("amqplib")

let channel, connection

async function rabbitmqWithRetry(retries=5,delay=3000) {

    while(retries){
        try{
            connection=await amqp.connect("amqp://rabbitmq:5672")
            channel=await connection.createChannel()
            await channel.assertQueue("new_task_created")
            console.log("Connect to RabbitMQ");
            return
        }catch(error){
            console.log("Rabbitmq connection error:",error);
            retries--
            console.log("retrying again",retries);
            await new Promise(res=>setTimeout(res,delay))
        }
    }
}
module.exports={rabbitmqWithRetry,getChannel:()=>channel}