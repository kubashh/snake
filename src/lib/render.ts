import { appleColor, boardSize, data, pixelSize } from "./consts"
import { drawBox, fillBackground } from "./util"

const drawMapBorder = (middle: XY, head: XY) => {
  if (!data.ctx) return

  let x = Math.floor(middle.x - head.x * pixelSize)
  let y = Math.floor(data.ctx.canvas.height - (middle.y - head.y * pixelSize) - boardSize * pixelSize)

  let a = boardSize * pixelSize
  let b = boardSize * pixelSize

  if (x < 0) {
    a += x
    x = 0
  }

  if (y < 0) {
    b += y
    y = 0
  }

  drawBox(x, y, a, b, `#000`)
}

export const render = (head: XY, board: (XY | string)[]) => {
  if (!data.ctx) return

  fillBackground()

  const middle = {
    x: Math.floor((data?.ctx.canvas.width - pixelSize) / 2),
    y: Math.floor((data?.ctx.canvas.height + pixelSize) / 2),
  }

  drawMapBorder(middle, head)

  let color = appleColor

  for (const arr of board) {
    if (typeof arr === `string`) {
      color = arr
      continue
    }

    let { x: i, y: j } = arr

    i -= head.x
    j -= head.y
    const x = i * pixelSize + middle.x
    const y = -j * pixelSize + middle.y - 2 * pixelSize

    drawBox(x, y, pixelSize, pixelSize, color)
  }
}
