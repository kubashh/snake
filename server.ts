import { createServer } from "http"
import next from "next"
import { Server } from "socket.io"
import { setSocket } from "./server/setSocket.js"
import { start } from "./server/game/game.js"

const hostname = `192.168.0.55`
const port = 3000

const app = next({ dev: process.env.DEV === `true`, hostname, port })
const handler = app.getRequestHandler()

app.prepare().then(() => {
  const httpServer = createServer(handler)

  const io = new Server(httpServer)

  io.on(`connection`, setSocket)

  httpServer
    .once(`error`, (err) => {
      throw Error(err.message)
    })
    .listen(port, () => console.log(`> Ready on http://${hostname}:${port}`))

  start()
})
