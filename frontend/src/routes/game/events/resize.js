import { data } from "../../data"

export const setResize = () => {
  window.addEventListener(`resize`, () => {
    if(data.inGame) {
      data.ctx.canvas.width = window.innerWidth
      data.ctx.canvas.height = window.innerHeight
    }
  })
}