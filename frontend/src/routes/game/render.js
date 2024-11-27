import { data } from "../data"
import { drawBox } from "./drawBox"

const { bgColor, pixelSize } = data

export const render = (data) => {
  const { head, board, boardSize } = JSON.parse(data)
  console.log(head, board, boardSize)

  const { ctx } = data
  if(!ctx || !ctx.fillRect) {
    //alert(`Don't works!!!`)
    return
  }

  const { width, height } = ctx.canvas
  const px2 = pixelSize / 2

  // Fill bg
  drawBox(0, 0, width, height, bgColor)

  const middle = {
    x: Math.floor(width / 2 - px2),
    y: Math.floor(height / 2 + px2)
  }

  const h = {
    x: Math.floor(middle.x - head.x * pixelSize),
    y: Math.floor(height - (middle.y - head.y * pixelSize) - boardSize * pixelSize)
  }

  // Draw border bg
  drawBox(h.x, h.y, boardSize * pixelSize, boardSize * pixelSize, `#000`)

  for(let [color, i, j] of board) {
    i -= head.x
    j -= head.y
    const x = i * pixelSize + middle.x
    const y = -j * pixelSize + middle.y - 2 * pixelSize
    //if(0 < x && x < height && 0 < y && y < width) {
      drawBox(x, y, pixelSize, pixelSize, color)
    //}
  }
}