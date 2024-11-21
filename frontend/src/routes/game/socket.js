import { connect } from "socket.io-client"
import { address } from "../data"
import { render } from "./render"
import { setDirection } from "./direction"
import { endGame } from "./responses/endGame"
import { newSnake } from "./responses/newSnake"

export const setUpSocket = (setState) => {
  if(global.data.setUp && global.data.socket.on) {
    return
  }

  global.data.socket = connect(address)

  global.data.socket.on(`connect`, () => {
    setState("1")
  })

  global.data.socket.on(`disconnect`, () => {
    setState("0")
  })

  global.data.socket.on(`newSnake`, newSnake)

  global.data.socket.on(`board`, render)

  global.data.socket.on(`endGame`, endGame)

  setDirection()
}