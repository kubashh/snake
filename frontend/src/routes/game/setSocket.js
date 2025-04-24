import { connect } from "socket.io-client"
import { render } from "./render/render"
import {
  setConnectAndDiconect,
  setEndGame,
  setNewSnake,
  setStaticData,
} from "./responses"
import { setDirection, setResize } from "./events"

export const setSocket = () => {
  const { data } = window

  if (data.socket && data.socket.on) return

  data.socket = connect(data.address)

  setConnectAndDiconect()
  setNewSnake()
  setEndGame()

  data.socket.on(`board`, (dataFromBackend) => {
    if (!data.ctx.canvas) {
      return
    }

    const [head, ...board] = JSON.parse(dataFromBackend)

    render({ head, board })
  })

  setDirection()
  setResize()
  setStaticData()
}
