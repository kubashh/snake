import index from "../frontend/app/index.html"
import { start } from "./game/game"
import { snakes } from "./lib/consts"
import { onMessage } from "./websoket.js"

const server = Bun.serve({
  routes: {
    "/": index,
    "/*": Response.redirect(`/`),
  },

  fetch(req) {
    // upgrade the request to a WebSocket
    if (this.upgrade(req)) return

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
