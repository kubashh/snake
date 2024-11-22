import { connect } from "socket.io-client"
import { address } from "../data"
import { render } from "./render"
import { setNewSnake } from "./responses/newSnake"
import { setEndGame } from "./responses/endGame"
import { setConnectAndDiconect } from "./responses/connectAndDisconnect"
import { setDirection } from "./events/direction"
import { setResize } from "./events/resize"

const setUpSocket = () => {
  if(global.data.setUp && global.data.socket.on) {
    return
  }

  global.data.socket = connect(address)

  setConnectAndDiconect()
  setNewSnake()
  setEndGame()

  global.data.socket.on(`board`, render)

  setDirection()
  setResize()
}

setUpSocket()