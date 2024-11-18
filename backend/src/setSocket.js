import { getBoard, changeDirection, createSnake, dataValidation } from "./game/game.js"


export const setSocket = (socket) => {
  let snake = null

  socket.on(`newSnake`, ({ nick, color }) => {
    const data = dataValidation(nick, color)

    if(data.success) {
      snake = createSnake(nick, color)
    }

    socket.emit(`newSnake`, data)
  })

  socket.on(`direction`, (direction) => {
    changeDirection(snake, direction)
  })

  socket.on(`board`, () => {
    console.log("Works")
    socket.emit(`board`, getBoard())
  })
}