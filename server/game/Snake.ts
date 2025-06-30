import { apples, data, boardSize, snakes } from "../lib/consts.js"
import { freePos, chance, randInt, createColor, isFreePos, numToPos, encode } from "../lib/utils.js"

export function isNickFree(nick: string) {
  return !nick || !snakes.find((snake) => snake.nick === nick)
}

function del(snake: Snake) {
  snakes.splice(snakes.indexOf(snake), 1)

  for (const pos of snake.body) {
    if (pos != snake.head() && isFreePos(pos) && chance(0.4)) apples[pos] = true
  }

  snake.socket.emit(`end`)
}

export class Snake {
  nick
  color
  direction
  socket
  body

  constructor(nick: string, socket: any) {
    this.nick = nick
    this.color = createColor()
    this.direction = randInt(0, 4)
    this.socket = socket

    const nbf = freePos(5)
    this.body = [nbf, nbf, nbf]

    snakes.push(this)
  }

  head() {
    return this.body.at(-1)!
  }

  changeDirection(direction: number) {
    if ((this.direction - direction) % 2 !== 0) this.direction = direction
  }

  collide(pos: number) {
    const { x, y } = numToPos(pos)
    if (x < 0 || x >= boardSize || pos < 0 || y >= boardSize) {
      del(this)
      return true
    }

    for (const snake of snakes) {
      if (snake === this) continue

      for (const pos2 of snake.body) {
        if (pos2 === pos) {
          del(this)
          return true
        }
      }
    }
  }

  move() {
    let newHead = this.head()

    switch (this.direction) {
      case 0:
        newHead += 1
        break
      case 1:
        newHead += 256
        break
      case 2:
        newHead -= 1
        break
      default:
        newHead -= 256
    }

    if (this.collide(newHead)) return

    if (apples[newHead]) {
      delete apples[newHead]
    } else {
      this.body.shift()
    }

    this.body.push(newHead)
  }

  sendData() {
    const dataToSend = `${encode(this.head())}${data.board}`
    this.socket.emit(`board`, dataToSend)
  }
}
