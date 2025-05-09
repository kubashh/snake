import { apples, data, snakes } from "../lib/consts.js"
import { generateApple } from "../lib/utils.js"

const update = () => {
  data.board = ``

  // Snakes move
  for (const snake of snakes) {
    snake.move()
  }

  generateApple()

  for (const { x, y } of apples) {
    data.board += `${JSON.stringify([x, y])},`
  }

  for (const { body, color } of snakes) {
    data.board += `${JSON.stringify(color)},`
    for (const { x, y } of body) {
      data.board += `${JSON.stringify([x, y])},`
    }
  }

  data.board = `${data.board.slice(0, -1)}]`

  // Send board
  for (const snake of snakes) {
    snake.sendData()
  }
}

export const start = () => {
  setInterval(update, 125 /* 1000 / 8 */)
}

// // start

// const now = () => {
//   return Date.now()
// }

// let timeLast = now()

// export const start = () => {
//   if (now() - timeLast > delay) {
//     timeLast += delay
//     console.time(`all`)
//     update()
//     console.timeEnd(`all`)
//   }

//   setTimeout(start, 1)
// }
