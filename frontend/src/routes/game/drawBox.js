export const drawBox = (x, y, w, h, color = "white") => {
  global.data.ctx.fillStyle = color
  global.data.ctx.fillRect(x, global.data.ctx.canvas.height - y, w, h)
}