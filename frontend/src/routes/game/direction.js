const changeDirection = (direction) => {
  global.data.socket.emit(`direction`, direction)
}

export const setDirection = () => {
  document.addEventListener(`keydown`, ({ key }) => {
    if(!global.data.inGame) {
      return
    }

    switch(key) {
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