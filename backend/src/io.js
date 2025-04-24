import { Server } from "socket.io"
import { setSocket } from "./setSocket.js"
import { appleColor, boardSize } from "./game/data.js"

const staticData = { boardSize, appleColor }

export const io = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000/snake2",
    },
  })

  io.on(`connection`, (socket) => {
    setSocket(socket)

    socket.emit(`staticData`, staticData)
  })
}
