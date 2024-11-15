import express from "express"
import cors from "cors"
import { createServer } from "http"
import { Server } from "socket.io"

const port = 4000

const app = express(cors())

const server = createServer(app)

const io = new Server(server,{
  cors: {
    orygin: "https://verbose-succotash-69gq79965wq6fwgx.github.dev:4000",
    methods: ["GET", "POST"]
  }
})

io.on(`connection`, (socket) => {
  console.log(`User connected ${socket.id}`)
})

server.listen(port, () => {
  console.log(`Snake listening on port ${port}...`)
})