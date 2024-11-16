const snakes = []

class Snake {
  constructor(nick, color) {
    this.nick = nick
    this.color = color

    snakes.push(this)
  }

  static isFree(nick, color) {
    if(!nick || !color) {
      return {
        message: `Bad data`
      }
    }

    // Check nick
    if(false) {
      return {
        message: `Choose other nick`
      }
    }

    // Check color
    if(false) {
      return {
        message: `Choose other color`
      }
    }

    return {
      success: true
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