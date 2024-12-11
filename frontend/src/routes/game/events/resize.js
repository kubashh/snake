export const setResize = () => {
  window.addEventListener(`resize`, () => {
    if(window.data.inGame) {
      window.data.ctx.canvas.width = window.innerWidth
      window.data.ctx.canvas.height = window.innerHeight
    }
  })
}