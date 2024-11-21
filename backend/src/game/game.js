import { emptyBoard, board, snakes, apples, generateApple } from "./consts.js"
import { Snake } from "./Snake.js"

emptyBoard()

const update = () => {
  // Update board
  emptyBoard()

  for(const { move } of snakes) {
    move()
  }

  // Generating apple
  generateApple()

  for(let { x, y } of apples) {
    board[x][y] = "yellow"
  }

  for(let { body, color } of snakes) {
    for(let { x, y } of body) {
      board[x][y] = color
    }
  }

  for(const snake of snakes) {
    snake.sendBoard()
  }
}

const fps = 1000 / 8

setInterval(update, fps)


export const dataValidation = (nick, color) => {
  return Snake.isFree(nick, color)
}

export const createSnake = (nick, color, socket) => {
  return new Snake(nick, color, socket)
}