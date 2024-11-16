import { Server } from "socket.io"
import { setSocket } from "./setSocket"

export const io = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  })
  
  io.on(`connection`, (socket) => {
    console.log(`User connected ${socket.id}`)

    setSocket(socket)
  })
}