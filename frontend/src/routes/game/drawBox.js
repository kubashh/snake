export const drawBox = (x, y, w, h, color) => {
  if(color) {
    window.data.ctx.fillStyle = color
  }
  window.data.ctx.fillRect(x, y, w, h)
}