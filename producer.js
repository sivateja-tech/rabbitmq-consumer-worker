const amqp = require("amqplib");

const QUEUE = "task_queue";

async function sendMessage() {
  try {
    const connection = await amqp.connect("amqp://localhost");
    const channel = await connection.createChannel();

    await channel.assertQueue(QUEUE, { durable: true });

    const message = "Hello from RabbitMQ at " + new Date().toLocaleTimeString();

    channel.sendToQueue(QUEUE, Buffer.from(message), {
      persistent: true,
    });

    console.log("Sent:", message);

    setTimeout(() => {
      connection.close();
      process.exit(0);
    }, 500);
  } catch (error) {
    console.error(error);
  }
}

sendMessage();