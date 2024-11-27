import { data } from "../../data"
import { drawBox } from "../drawBox"

export const fillBackground = () => {
  const { bgColor } = data
  const { width, height } = data.ctx.canvas
  drawBox(0, 0, width, height, bgColor)
}