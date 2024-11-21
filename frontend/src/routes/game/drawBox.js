export const drawBox = (x, y, w, h, color = "white") => {
  if(!global.data.ctx || !global.data.ctx.fillRect) {
    alert(`Don't works!!!`)
    return
  }

  global.data.ctx.fillStyle = color
  global.data.ctx.fillRect(x, y, w, h)
}