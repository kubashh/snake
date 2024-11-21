import { board, snakes, apples, generateApple, clearBoard } from "./consts.js"
import { Snake } from "./Snake.js"

const update = () => {
  console.time(`all2`)
  // Update board
  console.log(``)
  console.time(`clearBoard`)
  clearBoard()
  console.timeEnd(`clearBoard`)

  console.time(`move`)
  for(const snake of snakes) {
    snake.move()
  }
  console.timeEnd(`move`)

  console.time(`generateApple`)
  // Generating apple
  generateApple()
  console.timeEnd(`generateApple`)

  console.time(`drawApples`)
  for(let { x, y } of apples) {
    board[x][y] = "yellow"
  }
  console.timeEnd(`drawApples`)

  console.time(`drawSnakes`)
  for(let { body, color } of snakes) {
    for(let { x, y } of body) {
      board[x][y] = color
    }
  }
  console.timeEnd(`drawSnakes`)

  console.time(`sendBoard`)
  for(const snake of snakes) {
    snake.sendBoard()
  }
  console.timeEnd(`sendBoard`)
  console.time(`all2`)
}

const fps = 1000 / 1

setInterval(() => {
  console.time(`all1`)
  update()
  console.timeEnd(`all1`)
}, fps)


export const dataValidation = (nick, color) => {
  return Snake.isFree(nick, color)
}

export const createSnake = (nick, color, socket) => {
  return new Snake(nick, color, socket)
}