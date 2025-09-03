import index from "../frontend/index.html"
import { start } from "./game/game"
import { snakes } from "./lib/consts"
import { onMessage } from "./websoket.js"

const server = Bun.serve({
  routes: {
    "/*": index,
  },

  fetch(req) {
    // upgrade the request to a WebSocket
    if (server.upgrade(req)) return

    return new Response(`Upgrade failed`, { status: 500 })
  },
  websocket: {
    message: onMessage,
    close(ws) {
      snakes.find((snake) => snake.socket === ws)?.destroy()
    },
    perMessageDeflate: {
      compress: true,
    },
  },

  development: process.env.DEV === `true` && {
    hmr: true, // hot reloading
  },
})

console.log(`> Server running at ${server.url}`)

start()
