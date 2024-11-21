const changeDirection = (direction) => {
  global.data.socket.emit(`direction`, direction)
}

export const setDirection = () => {
  document.addEventListener(`keydown`, ({ key }) => {
    if(!global.data.inGame) {
      return
    }

    if(key === `w`) {
      changeDirection(0)
    } else if(key === `d`) {
      changeDirection(1)
    } else if(key === `s`) {
      changeDirection(2)
    } else if(key === `a`) {
      changeDirection(3)
    }
  })
}