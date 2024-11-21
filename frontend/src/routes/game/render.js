import { bgColor, pixelSize } from "../data"
import { drawBox } from "./drawBox"

export const render = ({ head, board, boardSize }) => {
  const { ctx } = global.data
  if(!ctx || !ctx.fillRect) {
    //alert(`Don't works!!!`)
    return
  }

  const { width, height } = ctx.canvas

  //console.log(head, board)
  console.log(width, height)

  // Fill bg
  drawBox(0, 0, width, height, bgColor)

  const xa = Math.round(-head.x * pixelSize + width / 2)
  const ya = Math.round(-head.y * pixelSize + height / 2)

  // Draw border bg
  drawBox(100, 100, 50, 20, `#000`)
  //drawBox(width / 2, height / 2, 100, 100, `#000`)
  //drawBox(xa, ya, 100, 100, `#000`)

  /*for(let i = 0; i < boardSize; i++) {
    for(let j = 0; j < boardSize; j++) {
      const x = i * pixelSize + xa
      const y = j * pixelSize + ya
      //if(0 < x && x < height && 0 < y && y < width) {
        drawBox(x, y, pixelSize, pixelSize, board[i][j])
      //}
    }
  }*/

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