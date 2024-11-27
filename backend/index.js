import { createServer } from "http"
import { io } from "./src/io.js"
import { start } from "./src/game/game.js"

const reqRes = (req, res) => {
  res.writeHead(200, {"Content-Type": `application/json`})
  res.write(req.url)
  res.end()
}

const port = 4000

const server = createServer(reqRes)

io(server)

server.listen(port, () => {
  console.log(`Snake on port ${port}...`)
})

start()