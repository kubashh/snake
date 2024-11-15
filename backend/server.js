import express from "express"
import cors from "cors"
import { createServer } from "http"
import { Server } from "socket.io"

const port = 4000

const corsOptions = {
  origin: "https://kubashh.github.io/snake"
}

const app = express(cors(corsOptions))

const server = createServer(app)

const io = new Server(server,{
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
})

io.on(`connection`, (socket) => {
  console.log(`User connected ${socket.id}`)
})

server.listen(port, () => {
  console.log(`Snake listening on port ${port}...`)
})