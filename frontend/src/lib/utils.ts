import { data } from "./consts"

export const drawBox = (
  x: number,
  y: number,
  w: number,
  h: number,
  color: string
) => {
  if (!data.ctx) return

  if (color) data.ctx.fillStyle = color

  data.ctx.fillRect(x, y, w, h)
}

export const fillBackground = () => {
  if (!data.ctx) return

  drawBox(0, 0, data.ctx.canvas.width, data.ctx.canvas.height, `#008`)
}
