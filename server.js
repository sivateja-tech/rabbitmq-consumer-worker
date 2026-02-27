const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const amqp = require("amqplib");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

const PORT = 5000;
const QUEUE = "task_queue";

// When client connects
io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

// Connect to RabbitMQ and consume messages
async function startConsumer() {
  try {
    const connection = await amqp.connect("amqp://localhost");
    const channel = await connection.createChannel();

    await channel.assertQueue(QUEUE, { durable: true });

    console.log("Waiting for messages in queue:", QUEUE);

    channel.consume(
      QUEUE,
      (msg) => {
        if (msg !== null) {
          const message = msg.content.toString();
          console.log("Received:", message);

          // Emit message to all connected clients
          io.emit("newMessage", message);

          channel.ack(msg);
        }
      },
      { noAck: false }
    );
  } catch (error) {
    console.error("RabbitMQ Error:", error);
  }
}

startConsumer();

app.get("/", (req, res) => {
  res.send("RabbitMQ Consumer Worker Running...");
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});