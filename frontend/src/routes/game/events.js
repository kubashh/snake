export const setResize = () => {
  window.addEventListener(`resize`, () => {
    if (window.data.inGame) {
      window.data.ctx.canvas.width = window.innerWidth
      window.data.ctx.canvas.height = window.innerHeight
    }
  })
}


// Direction
let lastDirection = null

const changeDirection = (direction) => {
  if (lastDirection && lastDirection % 2 === direction % 2) return

  lastDirection = direction

  window.data.socket.emit(`direction`, direction)
}

export const setDirection = () => {
  document.addEventListener(`keydown`, ({ key }) => {
    if (!window.data.inGame) return

    switch (key.toLowerCase()) {
      case `w`:
        return changeDirection(0)
      case `d`:
        return changeDirection(1)
      case `s`:
        return changeDirection(2)
      case `a`:
        return changeDirection(3)
    }
  })
}
