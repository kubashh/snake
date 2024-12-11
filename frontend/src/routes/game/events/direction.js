const { data } = window

let lastDirection = NaN

const changeDirection = (direction) => {
  if(lastDirection % 2 === direction % 2) {
    return
  }

  lastDirection = direction

  data.socket.emit(`direction`, direction)
}

export const setDirection = () => {
  document.addEventListener(`keydown`, ({ key }) => {
    if(!data.inGame) {
      return
    }

    switch(key.toLowerCase()) {
      case `w`:
        changeDirection(0)
        break
      case `d`:
        changeDirection(1)
        break
      case `s`:
        changeDirection(2)
        break
      case `a`:
        changeDirection(3)
        break
    }
  })
}