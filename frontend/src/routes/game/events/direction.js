import { data } from "../../data"

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