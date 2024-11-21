import { board, snakes, apples, generateApple, clearBoard } from "./consts.js"
import { Snake } from "./Snake.js"

const update = () => {
  // Update board
  console.log(``)
  clearBoard()

  for(const snake of snakes) {
    snake.move()
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

  console.time(`sendBoard`)
  for(const snake of snakes) {
    snake.sendBoard()
  }
  console.timeEnd(`sendBoard`)
}


export const dataValidation = (nick, color) => {
  return Snake.isFree(nick, color)
}

export const createSnake = (nick, color, socket) => {
  return new Snake(nick, color, socket)
}


// start
const delay = 1000 / 16

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
}