import { connect } from "socket.io-client"
import { data } from "../data"
import { render } from "./render/render"
import { setNewSnake } from "./responses/newSnake"
import { setEndGame } from "./responses/endGame"
import { setConnectAndDiconect } from "./responses/connectAndDisconnect"
import { setDirection } from "./events/direction"
import { setResize } from "./events/resize"
import { address } from "../consts"

const test = async () => {
  const res = await fetch(address)
  console.log(res)
}

export const setSocket = () => {
  if(data.setUp && data.socket.on) {
    return
  }

  data.setUp = true

  data.socket = connect(address)

  setConnectAndDiconect()
  setNewSnake()
  setEndGame()

  data.socket.on(`board`, (dataFromBackend) => {
    if(!data.ctx.canvas) {
      return
    }

    render(dataFromBackend)
  })

  setDirection()
  setResize()

  test()
}