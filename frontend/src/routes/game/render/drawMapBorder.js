import { data } from "../../data"
import { drawBox } from "../drawBox"

export const drawMapBorder = (middle, head) => {
  const { pixelSize, boardSize } = data
  const x = Math.floor(middle.x - head.x * pixelSize)
  const y = Math.floor(data.ctx.canvas.height - (middle.y - head.y * pixelSize) - boardSize * pixelSize)

  drawBox(x, y, boardSize * pixelSize, boardSize * pixelSize, `#000`)
  console.log(middle, head, pixelSize, boardSize, data.ctx.canvas)
}