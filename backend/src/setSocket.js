import { snakes } from "./game/consts.js"
import { onBoard, changeDirection, createSnake, dataValidation, addToUpdates, removeFromUpdates } from "./game/game.js"

export const setSocket = (socket) => {
  let snake = null

  socket.on(`newSnake`, ({ nick, color }) => {
    const data = dataValidation(nick, color)

    if(data.success) {
      snake = createSnake(nick, color)
    }

    socket.emit(`newSnake`, data)

    const updateFunction = function() {
      if(snakes.find((s) => s.nick === snake.nick)) {
        removeFromUpdates(this)
      }

      socket.emit(`board`, onBoard(snake.nick))
    }

    addToUpdates(updateFunction)
  })

  socket.on(`direction`, (direction) => {
    changeDirection(snake, direction)
  })
}