export const setResize = () => {
  window.addEventListener(`resize`, () => {
    const { data } = window

    if(data.inGame) {
      data.ctx.canvas.width = window.innerWidth
      data.ctx.canvas.height = window.innerHeight
    }
  })
}