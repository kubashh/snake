import { emptyBoard, board, snakes, apples, generateApple } from "./consts.js"
import { Snake } from "./Snake.js"

const updateFunctions = []

emptyBoard()

const update = () => {
  for(let snake of snakes) {
    snake.move()
  }

  // Generating apple
  generateApple()

  // Update board
  emptyBoard()

  for(let snake of snakes) {
    for(let bodyElement of snake.body) {
      board[bodyElement.x][bodyElement.y] = snake.color
    }
  }
  
  for(let apple of apples) {
    board[apple.x][apple.y] = "yellow"
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

export const createSnake = (nick, color) => {
  return new Snake(nick, color)
}

export const changeDirection = (snake, direction) => {
  snake.changeDirection(direction)
}

export const addToUpdates = (obj) => {
  updateFunctions.push(obj)
}