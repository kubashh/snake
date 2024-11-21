import { bgColor, pixelSize } from "../data"
import { drawBox } from "./drawBox"

export const render = ({ head, board }) => {
  console.log(head, board)

  const [w, h] = [window.innerWidth, window.innerHeight]

  const size = board.length

  // Fill bg
  drawBox(0, 0, w, h, bgColor)

  const xa = Math.round(-head.x * pixelSize + window.innerWidth / 2)
  const ya = Math.round(-head.y * pixelSize + window.innerHeight / 2)

  for(let i = 0; i < size; i++) {
    for(let j = 0; j < size; j++) {
      let x = i * pixelSize + xa, y = j * pixelSize + ya
      if(0 < x && x < h && 0 < y && y < w) {
        drawBox(x, y, pixelSize, pixelSize, board[i][j])
      }
    }
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