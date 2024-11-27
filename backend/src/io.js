import { Server } from "socket.io"
import { setSocket } from "./setSocket.js"
import { appleColor, boardSize } from "./game/data.js"

const staticData = { boardSize, appleColor }

export const io = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  })

  io.on(`connection`, (socket) => {
    setSocket(socket)

    socket.emit(`staticData`, staticData)
  })
}