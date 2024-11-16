const randInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

const boardSize = 20

const createEmptyBoard = () => {
  const array = []

  for(let i = 0; i < boardSize; i++) {
    const array2 = []
    for(let j = 0; j < boardSize; j++) {
      array2.push("#000000")
    }

    array.push(array2)
  }

  return array
}

const snakes = []
const board = createEmptyBoard()

class Snake {
  static isFree(nick, color) {
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
    if(snakes.find((snake) => snake.color === color)) {
      return {
        message: `Choose other color`
      }
    }

    return {
      success: true
    }
  }

  constructor(nick, color) {
    this.nick = nick
    this.color = color
    this.direction = 0
    const random = randInt
    this.body = [{}]

    snakes.push(this)
  }

  head() {
    return this.body[this.body.length - 1]
  }

  move() {
    let newHead = this.head()

    switch(this.direction) {
      case 0:
        newHead.x
        break
    }
  }
}

export const setSocket = (socket) => {
  socket.on(`newSnake`, ({ nick, color }) => {
    const data = Snake.isFree(nick, color)

    if(data.success) {
      new Snake(nick, color)
    }

    console.log(snakes)

    socket.emit(`newSnake`, data)
  })
}