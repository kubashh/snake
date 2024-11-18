import { emptyBoard, board, snakes, apples, generateApple } from "./consts.js"
import { Snake } from "./Snake.js"

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
}

const fps = 1000 / 8

setInterval(update, fps)


export const onBoard = () => {
  return {
    board: board,
    head: snakes[0] ? snakes[0].head() : { x: 5, y: 5 }
  }
}

export const dataValidation = (nick, color) => {
  return Snake.isFree(nick, color)
}

export const createSnake = (nick, color) => {
  return new Snake(nick, color)
}

export const changeDirection = (snake, direction) => {
  snake.changeDirection(direction)
}