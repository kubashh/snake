import { createSnake } from "./game/game.js"
import { isFree } from "./game/Snake.js"

export const setSocket = (socket) => {
  let snake = null

  socket.on(`new`, ({ nick, color }) => {
    const data = isFree(nick, color)

    if (data.success) {
      snake = createSnake(nick, color, socket)
    }

    socket.emit(`new`, data)
  })

  socket.on(`direction`, (direction) => {
    if (!snake) return

    snake.changeDirection(direction)
  })
}
