import { drawBox } from "../drawBox"
import { drawMapBorder } from "./drawMapBorder"
import { fillBackground } from "./fillBackground"

export const render = ({ head, board }) => {
  const { pixelSize, appleColor, ctx } = window.data

  const { width, height } = ctx.canvas
  const px2 = pixelSize / 2

  fillBackground()

  const middle = {
    x: Math.floor(width / 2 - px2),
    y: Math.floor(height / 2 + px2)
  }

  drawMapBorder(middle, head)

  let color = appleColor

  for(const arr of board) {
    if(typeof(arr) === `string`) {
      color = arr
      continue
    }

    let [i, j] = arr

    i -= head.x
    j -= head.y
    const x = i * pixelSize + middle.x
    const y = -j * pixelSize + middle.y - 2 * pixelSize

    //if(-pixelSize < x && x < height + pixelSize && -pixelSize < y && y < width + pixelSize) {
      drawBox(x, y, pixelSize, pixelSize, color)
    //}
  }
}