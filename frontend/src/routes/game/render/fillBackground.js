import { drawBox } from "../drawBox"

export const fillBackground = () => {
  const { width, height } = window.data.ctx.canvas
  drawBox(0, 0, width, height, `#008`)
}