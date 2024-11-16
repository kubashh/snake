import { server } from "./src/app.js"
import { io } from "./src/io.js"

const port = 4000

io(server)

server.listen(port, () => {
  console.log(`Snake listening on port ${port}...`)
})