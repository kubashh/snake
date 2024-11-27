import { createServer } from "http"
import { boardSize } from "./game/data"

const staticData = JSON.stringify({
  boardSize
})

const headers = {
  "Content-Type": `application/json`,
  "Access-Control-Allow-Origin": `*`,
  "Access-Control-Allow-Methods": `GET`,
  "Access-Control-Max-Age": 2592000, // 30 days
}

const reqRes = (req, res) => {
  res.writeHead(200, headers)
  res.write(staticData)
  res.end()
}

export const server = createServer(reqRes)