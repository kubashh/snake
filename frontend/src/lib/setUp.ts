import { data } from "./consts"
import { render } from "./render"

// Socket

// Connect
data.socket.on(`connect`, (e: any) => {
  console.log(e)
  data.refresh?.()
})
data.socket.on(`connection`, (e: any) => {
  console.log(e)
  data.refresh?.()
})

// Disconnect
data.socket.on(`disconnect`, (e: any) => {
  console.log(e)
  data.refresh?.()
})

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
  } else alert(message)
})

// End
data.socket.on(`end`, () => {
  data.inGame = false
  data.refresh?.()
})

// Board
data.socket.on(`board`, (dataFromBackend: string) => {
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
const directions: Record<string, number> = { w: 0, d: 1, s: 2, a: 3 }

document.addEventListener(`keydown`, ({ key }) => {
  if (!data.inGame) return

  const direction = directions[key.toLowerCase()]

  if (direction === undefined) return
  if (data.lastDirection !== -1 && data.lastDirection % 2 === direction % 2)
    return

  data.lastDirection = direction

  data.socket.emit(`direction`, direction)
})

// Get Canvas
const getCanvas = () => {
  const inputs = document.getElementsByTagName(`canvas`)

  if (inputs.length > 0) {
    const gameCanvas = inputs[0]
    gameCanvas.width = window.innerWidth
    gameCanvas.height = window.innerHeight
    data.ctx = gameCanvas.getContext(`2d`)
  } else setTimeout(getCanvas)
}
getCanvas()
