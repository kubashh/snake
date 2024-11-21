import { connect } from "socket.io-client"
import { address } from "../data"
import { render } from "./render"
import { setDirection } from "./direction"

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

  global.data.socket.on(`endGame`, () => {
    localStorage.setItem(`data`, JSON.stringify(global.data.user))

    global.data.inGame = false

    alert(`You lose! (From endGame)`)

    setState(`e`)
  })

  setDirection()
}