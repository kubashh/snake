import { connect } from "socket.io-client"
import { setSocket } from "../routes/game/setSocket"
import { getUser } from "./utils"

const address = `https://literate-lamp-wrgwx4wpwgx3g9gw-4000.app.github.dev`

export const data = {
  inGame: false,
  lastDirection: null,

  user: getUser(),
  socket: connect(address),
  ctx: {},

  pixelSize: 40,
  boardSize: 0,
  appleColor: ``,
}

setSocket()
