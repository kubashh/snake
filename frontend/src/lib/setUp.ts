import { data } from "./consts"
import { render } from "../routes/game/render"

// Socket

// Connect
data.socket.on(`connect`, () => data.refresh?.())

// Disconnect
data.socket.on(`disconnect`, () => data.refresh?.())

// Static
data.socket.on(`static`, ({ boardSize, appleColor }: StaticType) => {
  data.boardSize = boardSize
  data.appleColor = appleColor
})

// New
data.socket.on(`new`, ({ success, message }: NewType) => {
  if (success) {
    // Start game
    data.inGame = true
    data.refresh?.()
  } else {
    alert(message)
  }
})

// End
data.socket.on(`end`, () => {
  localStorage.setItem(`data`, JSON.stringify(data.user))

  data.inGame = false

  data.refresh?.()
})

// Board
data.socket.on(`board`, (dataFromBackend: any) => {
  if (!data.ctx?.canvas) return

  const [head, ...board] = JSON.parse(dataFromBackend)

  render(head, board)
})

// Events

// Resize
window.addEventListener(`resize`, () => {
  if (data.inGame && data.ctx) {
    data.ctx.canvas.width = window.innerWidth
    data.ctx.canvas.height = window.innerHeight
  }
})

// Direscion
document.addEventListener(`keydown`, ({ key }) => {
  if (!data.inGame) return

  const direction = { w: 0, d: 1, s: 2, a: 3 }[key.toLowerCase()]

  if (direction === undefined) return
  if (data.lastDirection && data.lastDirection % 2 === direction % 2) return

  data.lastDirection = direction

  data.socket.emit(`direction`, direction)
})
