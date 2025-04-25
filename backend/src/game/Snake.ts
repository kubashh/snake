import { appleColor, apples, data, boardSize, snakes } from "../lib/consts.js"
import { freePos, chance, randInt } from "../lib/utils.js"

export const isFree = (nick: string, color: string) => {
  // Check values
  if (!nick || !color) {
    return { message: `Bad data` }
  }

  // Check nick
  if (snakes.find((snake: any) => snake.nick === nick)) {
    return { message: `Choose other nick` }
  }

  // Check color
  if (
    snakes.find((snake: any) => snake.color === color) ||
    snakes.find((snake: any) => snake.color === appleColor)
  ) {
    return { message: `Choose other color` }
  }

  return { success: true }
}

const del = (snake: any) => {
  snake.socket.emit(`end`)

  for (let bodyElement of snake.body) {
    if (bodyElement != snake.head() && chance(0.4)) {
      apples.push(bodyElement)
    }
  }
  snakes.splice(snakes.indexOf(snake), 1)
}

export class Snake {
  nick: string
  color: string
  direction: number
  body: any[]
  socket: any

  constructor(nick: string, color: string, socket: any) {
    this.nick = nick
    this.color = color
    this.direction = randInt(0, 4)
    const newBodyFragment = freePos()
    this.body = [newBodyFragment, newBodyFragment, newBodyFragment]

    this.socket = socket

    snakes.push(this)
  }

  head() {
    return { ...this.body.at(-1) }
  }

  changeDirection(direction: number) {
    const { x, y } = this.head()
    const { body } = this
    const { length } = body
    const element = body[length - 2]

    const condition =
      (direction === 0 && element.y !== y + 1) ||
      (direction === 1 && element.x !== x + 1) ||
      (direction === 2 && element.y !== y - 1) ||
      (direction === 3 && element.x !== x - 1)

    if (condition) this.direction = direction
  }

  collide({ x, y }: XY) {
    if (x < 0 || x >= boardSize || y < 0 || y >= boardSize) {
      del(this)
      return true
    }

    for (const { nick, body } of snakes) {
      if (nick == this.nick) continue

      for (const element of body) {
        if (x == element.x && y == element.y) {
          del(this)
          return true
        }
      }
    }
  }

  move() {
    const newHead = this.head()

    switch (this.direction) {
      case 0:
        newHead.y += 1
        break
      case 1:
        newHead.x += 1
        break
      case 2:
        newHead.y -= 1
        break
      default:
        newHead.x -= 1
    }

    if (this.collide(newHead)) return

    let condition = true
    for (let i = 0; i < apples.length; i++) {
      if (newHead.x === apples[i].x && newHead.y === apples[i].y) {
        apples.splice(i, 1)

        condition = false
        break
      }
    }

    if (condition) this.body.shift()

    this.body.push(newHead)
  }

  sendData() {
    const dataToSend = `[${JSON.stringify(this.head())},${data.board}`

    this.socket.emit(`board`, dataToSend)
  }
}
