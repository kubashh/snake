import { apples, board, boardSize, snakes } from "../lib/consts"
import { freePos, chance, randInt, createColor, isFreePos, encode } from "../lib/utils"

export function isNickFree(nick: string) {
  return !nick || !snakes.find((snake) => snake.nick === nick)
}

export class Snake {
  nick
  color
  direction
  socket
  body

  constructor(nick: string, socket: Bun.ServerWebSocket<unknown>) {
    this.nick = nick
    this.color = createColor()
    this.direction = randInt(0, 4)
    this.socket = socket

    this.body = [-1, -1, freePos(5)]

    snakes.push(this)
  }

  get head() {
    return this.body.at(-1)!
  }

  changeDirection(direction: number) {
    if ((this.direction - direction) % 2 !== 0) this.direction = direction
  }

  collide(pos: number) {
    const y = pos - Math.floor(pos / 256) * 256
    if (pos < 0 || Math.floor(pos / 256) >= boardSize || y < 0 || boardSize <= y) {
      this.destroy()
      return true
    }

    for (const snake of snakes) {
      if (snake === this) continue

      for (const pos2 of snake.body) {
        if (pos2 === pos) {
          this.destroy()
          return true
        }
      }
    }
  }

  move() {
    let newHead = this.head

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
    this.socket.send(`b${encode(this.head)}${board.value}`)
  }

  destroy() {
    snakes.splice(snakes.indexOf(this), 1)

    for (const pos of this.body) {
      if (pos != this.head && isFreePos(pos) && chance(0.4)) apples[pos] = true
    }

    this.socket.send(`e`)
  }
}
