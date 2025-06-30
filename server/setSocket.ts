import { isNickFree, Snake } from "./game/Snake.js"

const newRes = (isValid: boolean) => (isValid ? { success: true } : { message: `Choose other nick` })

export function setSocket(socket: any) {
  let snake: Snake | null = null

  socket.on(`new`, (nick: string) => {
    const isValid = isNickFree(nick)
    if (isValid) snake = new Snake(nick, socket)

    socket.emit(`new`, newRes(isValid))
  })

  socket.on(`direction`, (direction: number) => {
    snake?.changeDirection(direction)
  })
}
