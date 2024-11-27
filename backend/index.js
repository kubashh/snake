import { createServer } from "http"
import { io } from "./src/io.js"
import { start } from "./src/game/game.js"

const port = 4000

const server = createServer()

io(server)

server.listen(port, () => {
  console.log(`Snake on port ${port}...`)
})

start()