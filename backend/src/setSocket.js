import { createSnake, dataValidation } from "./game/game.js"

export const setSocket = (socket) => {
  let snake = null

  socket.on(`newSnake`, ({ nick, color }) => {
    const data = dataValidation(nick, color)

    if(data.success) {
      snake = createSnake(nick, color, socket)
    }

    socket.emit(`newSnake`, data)
  })

  socket.on(`direction`, (direction) => {
    if(!snake) {
      return
    }

    snake.changeDirection(direction)
  })
}