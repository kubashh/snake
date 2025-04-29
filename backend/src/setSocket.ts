import { isFree, Snake } from "./game/Snake.js"

export const setSocket = (socket: any) => {
  let snake: any = null

  socket.on(`new`, (nick: string) => {
    const data = isFree(nick)
    if (data.success) {
      snake = new Snake(nick, socket)
    }
    socket.emit(`new`, data)
  })

  socket.on(`direction`, (direction: number) => {
    if (!snake) return

    snake.changeDirection(direction)
  })
}
