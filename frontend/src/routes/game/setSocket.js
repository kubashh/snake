import { connect } from "socket.io-client"
import { render } from "./render/render"
import { setNewSnake } from "./responses/newSnake"
import { setEndGame } from "./responses/endGame"
import { setConnectAndDiconect } from "./responses/connectAndDisconnect"
import { setDirection } from "./events/direction"
import { setResize } from "./events/resize"
import { setStaticData } from "./responses/staticData"

export const setSocket = () => {
  const { data } = window

  if(data.socket && data.socket.on) {
    return
  }

  data.socket = connect(data.address)

  setConnectAndDiconect()
  setNewSnake()
  setEndGame()

  data.socket.on(`board`, (dataFromBackend) => {
    if(!data.ctx.canvas) {
      return
    }

    const [ head, ...board  ] = JSON.parse(dataFromBackend)

    render({ head, board })
  })

  setDirection()
  setResize()
  setStaticData()
}