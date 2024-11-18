import { connect } from "socket.io-client"
import { drawBox } from "../game/drawBox"
import { address, pixelSize } from "../data"

const render = ({ head, board }) => {
  const w = window.innerWidth, h = window.innerHeight

  // Fill bg
  drawBox(0, 0, w, h, "#008")

  const xa = Math.round(-head.x * pixelSize + window.innerWidth / 2),
    ya = Math.round(-head.y * pixelSize + window.innerHeight / 2)

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

export const setUpSocket = (setState) => {
  if(global.data.setUp && global.data.socket.on) {
    return
  }

  global.data.socket = connect(address)

  global.data.socket.on(`connect`, () => {
    setState("1")
  })

  global.data.socket.on(`disconnect`, () => {
    setState("0")
  })

  global.data.socket.on(`newSnake`, ({ success, message }) => {
    if(success) {
      // Start game
      global.data.inGame = true
      setState("g")
    } else {
      alert(message)
    }
  })

  global.data.socket.on(`board`, render)
}