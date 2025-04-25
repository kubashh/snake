import { createSnake } from "./game/game.js"
import { isFree } from "./game/Snake.js"

export const setSocket = (socket: any) => {
  let snake: any = null

  socket.on(`new`, ({ nick, color }: NewType) => {
    const data = isFree(nick, color)
    if (data.success) {
      snake = createSnake(nick, color, socket)
    }
    socket.emit(`new`, data)
  })

  socket.on(`direction`, (direction: number) => {
    if (!snake) return

    snake.changeDirection(direction)
  })
}
