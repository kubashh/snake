import { drawBox } from "../drawBox"

export const fillBackground = () => {
  const { width, height } = data.ctx.canvas
  drawBox(0, 0, width, height, `#008`)
}