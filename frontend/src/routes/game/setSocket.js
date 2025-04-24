import { render } from "./render"
import { setEvents } from "./events"
import { data } from "../../lib/consts"

export const setSocket = () => {
  // Connect
  data.socket.on(`connect`, () => data.refresh())

  // Disconnect
  data.socket.on(`disconnect`, () => data.refresh())

  // Static
  data.socket.on(`staticData`, ({ boardSize, appleColor }) => {
    data.boardSize = boardSize
    data.appleColor = appleColor
  })

  // New
  data.socket.on(`newSnake`, ({ success, message }) => {
    if (success) {
      // Start game
      data.inGame = true
      data.refresh()
    } else {
      alert(message)
    }
  })

  // End
  data.socket.on(`endGame`, () => {
    localStorage.setItem(`data`, JSON.stringify(data.user))

    data.inGame = false

    data.refresh()
  })

  // Board
  data.socket.on(`board`, (dataFromBackend) => {
    if (!data.ctx.canvas) return

    const [head, ...board] = JSON.parse(dataFromBackend)

    render({ head, board })
  })

  setEvents()
}
