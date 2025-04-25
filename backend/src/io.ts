import { Server } from "socket.io"
import { setSocket } from "./setSocket.js"
import { appleColor, boardSize } from "./lib/consts.js"

const staticData = { boardSize, appleColor }

export const io = (server: any) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
    },
  })

  io.on(`connection`, (socket) => {
    setSocket(socket)
    socket.emit(`static`, staticData)
  })
}
