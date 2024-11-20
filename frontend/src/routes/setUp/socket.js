import { connect } from "socket.io-client"
import { address } from "../data"
import { render } from "../game/render"
import { setDirection } from "../game/direction"

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

  global.data.socket.on(`newSnake`, ({ success, message }) => {
    if(success) {
      // Start game
      global.data.inGame = true
      setState("g")
    } else {
      alert(message)
    }
  })

  global.data.socket.on(`board`, render)

  setDirection()
}