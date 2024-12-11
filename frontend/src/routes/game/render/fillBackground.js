import { drawBox } from "../drawBox"
const { data } = window

export const fillBackground = () => {
  const { width, height } = data.ctx.canvas
  drawBox(0, 0, width, height, `#008`)
}