import { data } from "../data"

export const drawBox = (x, y, w, h, color = "white") => {
  console.log(data.ctx, data.ctx.fillStyle, data.ctx.fillRect)
  data.ctx.fillStyle = color
  data.ctx.fillRect(x, y, w, h)
}