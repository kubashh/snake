import { createServer } from "http"
import { start } from "./src/game/game"
import { Server } from "socket.io"
import { setSocket } from "./src/setSocket"
import { staticData } from "./src/lib/consts"

const port = 4000

const server = createServer()

const io = new Server(server, {
  cors: {
    origin: "https://kubashh.github.io",
  },
})

io.on(`connection`, (socket) => {
  setSocket(socket)
  socket.emit(`static`, staticData)
})

server.listen(port, () => {
  console.log(`Snake on port ${port}...`)
})

start()
