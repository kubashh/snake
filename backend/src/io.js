import { Server } from "socket.io"

export const io = (server) => {
  const io = new Server(server,{
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  })
  
  io.on(`connection`, (socket) => {
    console.log(`User connected ${socket.id}`)

    socket.on(`newSnake`, ({ nick, color }) => {
      console.log(nick, color)

      socket.emit(`newSnake`, { message: `message` })
    })
  })
}