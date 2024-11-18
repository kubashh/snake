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


export const onBoard = (nick) => {
  const snake = snakes.find((s) => {
    return s.nick == nick
  })

  const head = snake ? snake.head() : null

  return {
    board: board,
    head: head
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