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

  // Fill bg
  drawBox(0, 0, width, height, bgColor)

  const middle = {
    x: width / 2,
    y: height / 2
  }

  const h = {
    x: Math.round(-head.x * pixelSize + middle.x - pixelSize / 2),
    y: Math.round(-head.y * pixelSize + middle.y - pixelSize / 2)
  }

  // Draw border bg
  drawBox(h.x, h.y, boardSize * pixelSize, boardSize * pixelSize, `#000`)
  drawBox(100, 100, 200, 300, "white")
  //drawBox(middle.x - pixelSize / 2, middle.y + pixelSize / 2, pixelSize, pixelSize, `#fff`)

  /*for(let [color, i, j] of board) {
    i -= head.x
    j -= head.y
    const x = i * pixelSize + middle.y
    const y = j * pixelSize + middle.y
    //if(0 < x && x < height && 0 < y && y < width) {
      drawBox(x, y, pixelSize, pixelSize, color)
    //}
  }*/
}