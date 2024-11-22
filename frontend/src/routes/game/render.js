import { bgColor, pixelSize } from "../data"
import { drawBox } from "./drawBox"

export const render = (data) => {
  const { head, board, boardSize } = JSON.parse(data)

  const { ctx } = global.data
  if(!ctx || !ctx.fillRect) {
    //alert(`Don't works!!!`)
    return
  }

  const { width, height } = ctx.canvas
  const px2 = pixelSize / 2

  // Fill bg
  drawBox(0, 0, width, height, bgColor)

  const middle = {
    x: width / 2 - px2,
    y: height / 2 + px2
  }

  const h = {
    x: Math.round(middle.x - head.x * pixelSize),
    y: height - (Math.round(middle.y - head.y * pixelSize)) - boardSize * pixelSize + pixelSize
  }

  // Draw border bg
  drawBox(h.x, h.y, boardSize * pixelSize, boardSize * pixelSize, `#000`)

  for(let [color, i, j] of board) {
    i -= head.x
    j -= head.y
    const x = i * pixelSize + middle.x
    const y = -j * pixelSize + middle.y
    //if(0 < x && x < height && 0 < y && y < width) {
      drawBox(x, y, pixelSize, pixelSize, color)
    //}
  }
}