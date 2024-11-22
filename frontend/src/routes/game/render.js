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
    x: Math.round(-head.x * pixelSize + width / 2 - pixelSize / 2),
    y: -Math.round(-head.y * pixelSize + height / 2 - pixelSize / 2)
  }

  // Draw border bg
  drawBox(h.x, h.y, boardSize * pixelSize, boardSize * pixelSize, `#000`)
  drawBox(width / 2 - pixelSize / 2, height / 2 + pixelSize / 2, pixelSize, pixelSize, `#fff`)

  for(let [color, i, j] of board) {
    i -= head.x
    j -= head.y
    const x = i * pixelSize + middle.y
    const y = j * pixelSize + middle.y
    //if(0 < x && x < height && 0 < y && y < width) {
      drawBox(x, y, pixelSize, pixelSize, color)
    //}
  }

  /*for(let snake of data.snakes) {
    let x = xa + (snake.body[snake.body.length - 1].x - 0.5) * pixelSize,
      y = ya + (snake.body[snake.body.length - 1].y - 0.5) * pixelSize
    if(0 < x < h && 0 < y < w) {
      renderText(snake.nick, x, y)
    }
  }

  let a = 25
  let y = 10 + a
  renderText("Active players: " + data.snakesCount, 10, y, a)

  for(let top of data.topTen) {
    renderText(top.nick, w - 340, y, a, top.color)
    renderText(top.score, w - 60, y, a, top.color)
    y += a
  }*/
}