export const drawBox = (x, y, s, color = "white") => {
  global.data.ctx.fillStyle = color
  global.data.ctx.fillRect(x, y, s, s)
}