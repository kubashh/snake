export const drawBox = (x, y, w, h, color = "white") => {
  global.data.ctx.fillStyle = color
  global.data.ctx.fillRect(x, y, w, h) //global.data.ctx.canvas.height - y
}