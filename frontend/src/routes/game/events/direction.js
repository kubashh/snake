let lastDirection = null

const changeDirection = (direction) => {
  if(lastDirection && lastDirection % 2 === direction % 2) {
    return
  }

  lastDirection = direction

  window.data.socket.emit(`direction`, direction)
}

export const setDirection = () => {
  document.addEventListener(`keydown`, ({ key }) => {
    if(!window.data.inGame) {
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