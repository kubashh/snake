export const setResize = () => {
  window.addEventListener(`resize`, () => {
    global.data.ctx.canvas.width = window.innerWidth
    global.data.ctx.canvas.height = window.innerHeight
  })
}