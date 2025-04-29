import { apples, data, boardSize, snakes } from "../lib/consts.js"
import { freePos, chance, randInt, createColor } from "../lib/utils.js"

export const isFree = (nick: string) => {
  // Check values
  if (!nick) {
    return { message: `Bad data` }
  }

  // Check nick
  if (snakes.find((snake: any) => snake.nick === nick)) {
    return { message: `Choose other nick` }
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
  socket: any
  body: any[]

  constructor(nick: string, socket: any) {
    this.nick = nick
    this.color = createColor()
    this.direction = randInt(0, 4)
    this.socket = socket

    const nbf = freePos()
    this.body = [nbf, nbf, nbf]

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
