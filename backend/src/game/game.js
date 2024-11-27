import { apples, board, snakes } from "./data.js"
import { generateApple, clearBoard } from "./functions.js"
import { Snake } from "./Snake.js"

const update = () => {
  clearBoard()

  board.push(0)

  // Snakes move
  for(const snake of snakes) {
    snake.move()
  }

  // Generating apple
  generateApple()

  for(const { x, y } of apples) {
    board.push([x, y])
  }

  for(const { body, color } of snakes) {
    board.push(color)
    for(const { x, y } of body) {
      board.push([x, y])
    }
  }

  // Send board
  for(const snake of snakes) {
    snake.sendData()
  }
}


export const dataValidation = (nick, color) => {
  return Snake.isFree(nick, color)
}

export const createSnake = (nick, color, socket) => {
  return new Snake(nick, color, socket)
}


const fps = 1000 / 8

export const start = () => {
  setInterval(update, fps)
}


/*
// start

const now = () => {
  return Date.now()
}

let timeLast = now()

export const start = () => {
  if(now() - timeLast > delay) {
    timeLast += delay
    console.time(`all`)
    update()
    console.timeEnd(`all`)
  }

  setTimeout(start, 1)
}*/