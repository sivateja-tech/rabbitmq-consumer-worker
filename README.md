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

- producer.js → Sends messages to queue
- consumer.js → Consumes messages and emits via Socket.IO
- server.js → Runs Express + Socket.IO server

## ⚙️ Setup Instructions

### 1. Install dependencies
```bash
npm install
