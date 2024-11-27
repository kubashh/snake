import { data } from "../data"

export const drawBox = (x, y, w, h, color = "white") => {
  data.ctx.fillStyle = color
  data.ctx.fillRect(x, y, w, h)
}