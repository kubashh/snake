import { drawBox } from "../drawBox"
const { data } = window

export const drawMapBorder = (middle, head) => {
  const { pixelSize, boardSize } = data
  const x = Math.floor(middle.x - head.x * pixelSize)
  const y = Math.floor(data.ctx.canvas.height - (middle.y - head.y * pixelSize) - boardSize * pixelSize)

  drawBox(x, y, boardSize * pixelSize, boardSize * pixelSize, `#000`)
}