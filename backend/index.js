import { server } from "./src/server.js"
import { io } from "./src/io.js"
import { start } from "./src/game/game.js"

const port = 4000

io(server)

server.listen(port, () => {
  console.log(`Snake listening on port ${port}...`)
})

start()