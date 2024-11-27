import { data } from "../../data"
import { drawBox } from "../drawBox"

export const fillBackground = () => {
  const { width, height, bgColor } = data.ctx.canvas
  drawBox(0, 0, width, height, bgColor)
}