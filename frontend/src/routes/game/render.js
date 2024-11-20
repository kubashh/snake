import { drawBox } from "./drawBox"

export const render = ({ head, board }) => {
  if(!head) {
    console.log(head, board)
    global.data.inGame = false

    alert(`You lose!`)

    localStorage.setItem(`data`, JSON.stringify(global.data.user))

    window.location.reload()

    return
  }

  console.log(head, board)

  const [w, h] = [window.innerWidth, window.innerHeight]

  // Fill bg
  drawBox(0, 0, w, h, "#008")

  const xa = Math.round(-head.x * pixelSize + window.innerWidth / 2)
  const ya = Math.round(-head.y * pixelSize + window.innerHeight / 2)

  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[i].length; j++) {
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