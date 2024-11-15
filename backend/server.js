import express from "express"
import { createServer } from "http"
import { Server } from "socket.io"

const port = 4000

const app = express()

const server = createServer(app)

const io = new Server(server)

io.on(`connection`, (socket) => {
  console.log(`User connected ${socket.id}`)
})

server.listen(port, () => {
  console.log(`Snake listening on port ${port}...`)
})