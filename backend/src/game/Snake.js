import { appleColor, apples, board, boardSize, freePos, snakes } from "./consts.js"
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
    const condition = (
      direction === 0 && this.body[this.body.length - 2].y != this.head().y - 1) || (
      direction === 1 && this.body[this.body.length - 2].x != this.head().x - 1) || (
      direction === 2 && this.body[this.body.length - 2].y != this.head().y + 1) || (
      direction === 3 && this.body[this.body.length - 2].x != this.head().x + 1)

    if(condition) {
      this.direction = direction
    }
  }

  collide({ x, y }) {
    if(x < 0 || x >= boardSize || y < 0 || y >= boardSize) {
      Snake.del(this)
      return true
    }

    for(const snake of snakes) {
      if(snake.nick == this.nick) {
        continue
      }

      for(const element of snake.body) {
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

    if(!this.collide(newHead)) {
      if(board[newHead.x][newHead.y] !== appleColor) {
        this.body.shift()
      }

      this.body.push(newHead)
    }

    console.log(this.body)
  }

  sendBoard() {
    const obj = {
      board: board,
      head: this.head()
    }

    this.socket.emit(`board`, obj)
  }
}