import { apples, data, snakes } from "../lib/consts.js"
import { encode, generateApple } from "../lib/utils.js"

function snakesMove() {
  for (const snake of snakes) snake.move()
}

function genetereBoard() {
  data.board = ``
  data.board = Object.keys(apples).reduce((prev, e) => `${prev}${encode(Number(e))}`, ``)

  for (const { body, color } of snakes) {
    data.board += color
    for (const pos of body) {
      data.board += encode(pos)
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
