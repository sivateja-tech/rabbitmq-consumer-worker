# 📦 RabbitMQ Real-Time Notification System

This project demonstrates an asynchronous messaging system using RabbitMQ with real-time updates using Socket.IO.

## 🚀 Features

- Producer sends messages to RabbitMQ queue
- Consumer listens to queue and processes messages
- Real-time message broadcasting using Socket.IO
- Durable queues and persistent messaging
- Message acknowledgment for reliability

## 🏗️ Tech Stack

- Node.js
- Express.js
- RabbitMQ
- Socket.IO

## 📁 Project Structure

```
project-root/
│── producer.js      # Sends messages to queue
│── consumer.js      # Consumes messages and emits via Socket.IO
│── package.json
```

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/your-username/rabbitmq-project.git
cd rabbitmq-project
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start RabbitMQ (using Docker)
```bash
docker run -d --hostname rabbitmq-host --name rabbitmq \
-p 5672:5672 -p 15672:15672 rabbitmq:3-management
```

### 4. Start the Consumer (Server)
```bash
node consumer.js
```

### 5. Run the Producer
```bash
node producer.js
```

## 🌐 Access RabbitMQ Dashboard

- URL: http://localhost:15672  
- Username: guest  
- Password: guest  

## 🔄 How It Works

1. Producer sends a message to the RabbitMQ queue  
2. RabbitMQ stores the message in the queue  
3. Consumer reads the message from the queue  
4. Consumer emits the message to all connected clients using Socket.IO  
5. Clients receive real-time updates  

## 📌 Use Cases

- Real-time notification systems  
- Chat applications  
- Background job processing  
- Event-driven architectures  

## 🧠 Key Concepts Used

- Producer-Consumer Architecture  
- Message Queues (RabbitMQ)  
- Asynchronous Processing  
- WebSockets (Socket.IO)  
- Reliable Messaging (Durable Queues & Acknowledgments)  

## 📈 Future Improvements

- Add frontend UI to display real-time messages  
- Implement authentication for clients  
- Add retry mechanism for failed messages  
- Deploy using Docker Compose  

## 👨‍💻 Author

**Venkata Siva Teja**  
- GitHub: https://github.com/sivateja-tech  

