import { data } from "../../lib/consts"

export const setEvents = () => {
  // Resize
  window.addEventListener(`resize`, () => {
    if (data.inGame) {
      data.ctx.canvas.width = window.innerWidth
      data.ctx.canvas.height = window.innerHeight
    }
  })

  // Direscion
  document.addEventListener(`keydown`, ({ key }) => {
    if (!data.inGame) return

    const direction = { w: 0, d: 1, s: 2, a: 3 }[key.toLowerCase()]

    if (direction === undefined) return
    if (data.lastDirection && data.lastDirection % 2 === direction % 2) return

    data.lastDirection = direction

    data.socket.emit(`direction`, direction)
  })
}
