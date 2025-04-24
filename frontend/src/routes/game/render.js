import { data } from "../../lib/consts"
import { drawBox, fillBackground } from "../../lib/utils"

const drawMapBorder = (middle, head) => {
  const { pixelSize, boardSize, ctx } = data

  let x = Math.floor(middle.x - head.x * pixelSize)
  let y = Math.floor(
    ctx.canvas.height - (middle.y - head.y * pixelSize) - boardSize * pixelSize
  )

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

export const render = ({ head, board }) => {
  const { pixelSize, appleColor, ctx } = data

  fillBackground()

  const middle = {
    x: Math.floor((ctx.canvas.width - pixelSize) / 2),
    y: Math.floor((ctx.canvas.height + pixelSize) / 2),
  }

  drawMapBorder(middle, head)

  let color = appleColor

  for (const arr of board) {
    if (typeof arr === `string`) {
      color = arr
      continue
    }

    let [i, j] = arr

    i -= head.x
    j -= head.y
    const x = i * pixelSize + middle.x
    const y = -j * pixelSize + middle.y - 2 * pixelSize

    drawBox(x, y, pixelSize, pixelSize, color)
  }
}
