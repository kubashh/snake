import { apples, board, snakes } from "../lib/consts.js"
import { encode, generateApple } from "../lib/utils.js"

function snakesMove() {
  for (const snake of snakes) snake.move()
}

function genetereBoard() {
  board.value = ``
  board.value = Object.keys(apples).reduce((prev, e) => `${prev}${encode(Number(e))}`, ``)

  for (const { body, color } of snakes) {
    board.value += color
    for (const pos of body) {
      board.value += encode(pos)
    }
  }
}

function sendBoard() {
  for (const snake of snakes) snake.sendData()
}

function update() {
  snakesMove()
  generateApple()
  genetereBoard()
  sendBoard()
}

export function start() {
  setInterval(update, 125 /* 1000 / 8 */)
}
