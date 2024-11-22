import { board, snakes, apples, generateApple, clearBoard } from "./consts.js"
import { Snake } from "./Snake.js"

const update = () => {
  clearBoard()

  // Snakes move
  for(const snake of snakes) {
    snake.move()
  }

  // Generating apple
  generateApple()

  for(const { x, y } of apples) {
    board.push(["yellow", x, y])
  }

  for(const { body, color } of snakes) {
    for(const { x, y } of body) {
      board.push([color, x, y])
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