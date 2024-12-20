import { appleColor, apples, board, boardSize, snakes } from "./data.js"
import { freePos } from "./functions.js"
import { chance } from "./math.js"

export class Snake {
  static isFree(nick, color) {
    // Check values
    if(!nick || !color) {
      return {
        message: `Bad data`
      }
    }

    // Check nick
    if(snakes.find((snake) => snake.nick === nick)) {
      return {
        message: `Choose other nick`
      }
    }

    // Check color
    if(snakes.find((snake) => snake.color === color) || snakes.find((snake) => snake.color === appleColor)) {
      return {
        message: `Choose other color`
      }
    }

    return {
      success: true
    }
  }

  static del(snake) {
    snake.socket.emit(`endGame`)

    for(let bodyElement of snake.body) {
      if(bodyElement != snake.head() && chance(0.4)) {
        apples.push(bodyElement)
      }
    }
    snakes.splice(snakes.indexOf(snake), 1)
  }

  static get(nick) {
    for(let snake of snakes) {
      if(snake.nick === nick) {
        return snake
      }
    }
  }

  constructor(nick, color, socket) {
    this.nick = nick
    this.color = color
    this.direction = 0
    const newBodyFragment = freePos()
    this.body = [newBodyFragment, newBodyFragment, newBodyFragment]

    this.socket = socket

    snakes.push(this)
  }

  head() {
    const { x, y } = this.body[this.body.length - 1]

    return { x, y }
  }

  changeDirection(direction) {
    const { x, y } = this.head()
    const { body } = this
    const { length } = body
    const element = body[length - 2]

    const condition = (
      direction === 0 && element.y !== y + 1) || (
      direction === 1 && element.x !== x + 1) || (
      direction === 2 && element.y !== y - 1) || (
      direction === 3 && element.x !== x - 1)

    if(condition) {
      this.direction = direction
    }
  }

  collide({ x, y }) {
    if(x < 0 || x >= boardSize || y < 0 || y >= boardSize) {
      Snake.del(this)
      return true
    }

    for(const { nick, body } of snakes) {
      if(nick == this.nick) {
        continue
      }

      for(const element of body) {
        if(x == element.x && y == element.y) {
          Snake.del(this)
          return true
        }
      }
    }
  }

  move() {
    let newHead = this.head()

    switch(this.direction) {
      case 0:
        newHead.y += 1
        break
      case 1:
        newHead.x += 1
        break
      case 2:
        newHead.y -= 1
        break
      case 3:
        newHead.x -= 1
        break
    }

    if(this.collide(newHead)) {
      return
    }

    let condition = true
    for(let i = 0; i < apples.length; i++) {
      if(newHead.x === apples[i].x && newHead.y === apples[i].y) {
        apples.splice(i, 1)

        condition = false
        break
      }
    }

    if(condition) {
      this.body.shift()
    }

    this.body.push(newHead)
  }

  sendData() {
    board[0] = this.head()

    this.socket.emit(`board`, JSON.stringify(board))
  }
}