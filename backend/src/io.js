import { Server } from "socket.io"

const setSocket = (socket) => {
  socket.on(`newSnake`, ({ nick, color }) => {
    console.log(nick, color)

    socket.emit(`newSnake`, { message: `message` })
  })
}

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