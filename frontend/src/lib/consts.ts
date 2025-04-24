import { connect } from "socket.io-client"
import { getUser } from "./utils"

const address = `https://literate-lamp-wrgwx4wpwgx3g9gw-4000.app.github.dev`

export const data: DataType = {
  inGame: false,
  lastDirection: -1,
  refresh: null,

  user: getUser(),
  socket: connect(address),
  ctx: null,

  pixelSize: 40,
  boardSize: 0,
  appleColor: ``,
}
