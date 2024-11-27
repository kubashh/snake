import { createServer } from "http"
import { io } from "./src/io.js"
import { start } from "./src/game/game.js"

const reqRes = (req, res) => {
  res.writeHead(200, {
    "Content-Type": `application/json`,
    "Access-Control-Allow-Origin": `*`,
    "Access-Control-Allow-Methods": `GET`,
    "Access-Control-Max-Age": 2592000, // 30 days
  })
  res.write(JSON.stringify({
    message: req.url
  }))
  res.end()
}

const port = 4000

const server = createServer(reqRes)

io(server)

server.listen(port, () => {
  console.log(`Snake on port ${port}...`)
})

start()