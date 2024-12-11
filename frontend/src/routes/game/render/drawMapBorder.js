import { drawBox } from "../drawBox"

export const drawMapBorder = (middle, head) => {
  const { pixelSize, boardSize, ctx } = window.data

  const x = Math.floor(middle.x - head.x * pixelSize)
  const y = Math.floor(ctx.canvas.height - (middle.y - head.y * pixelSize) - boardSize * pixelSize)

  drawBox(x, y, boardSize * pixelSize, boardSize * pixelSize, `#000`)
}