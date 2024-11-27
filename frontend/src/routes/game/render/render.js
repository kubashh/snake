import { pixelSize } from "../../consts"
import { data } from "../../data"
import { drawBox } from "../drawBox"
import { drawMapBorder } from "./drawMapBorder"
import { fillBackground } from "./fillBackground"

export const render = (dataFromBackend) => {
  const [ board, head ] = JSON.parse(dataFromBackend)

  const { width, height } = data.ctx.canvas
  const px2 = pixelSize / 2

  fillBackground()

  const middle = {
    x: Math.floor(width / 2 - px2),
    y: Math.floor(height / 2 + px2)
  }

  drawMapBorder(middle, head)

  let color = ``

  for(const arr of board) {
    if(typeof(arr) == `string`) {
      color = arr
      continue
    }

    let [i, j] = arr

    i -= head.x
    j -= head.y
    const x = i * pixelSize + middle.x
    const y = -j * pixelSize + middle.y - 2 * pixelSize
    //if(0 < x && x < height && 0 < y && y < width) {
      drawBox(x, y, pixelSize, pixelSize, color)
    //}
  }
}