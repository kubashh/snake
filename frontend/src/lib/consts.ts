import { connect } from "socket.io-client"

const address = `https://stunning-succotash-g4qjw449r59xh99wj-4000.app.github.dev`

export const data: DataType = {
  inGame: false,
  lastDirection: -1,
  refresh: null,

  nick: JSON.parse(localStorage.getItem(`nick`) || ``),
  socket: connect(address),
  ctx: null,

  pixelSize: 40,
  boardSize: 0,
  appleColor: ``,
}
