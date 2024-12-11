import { drawBox } from "../drawBox"

export const drawMapBorder = (middle, head) => {
  const { pixelSize, boardSize, ctx } = window.data

  let x = Math.floor(middle.x - head.x * pixelSize)
  let y = Math.floor(ctx.canvas.height - (middle.y - head.y * pixelSize) - boardSize * pixelSize)

  let a = boardSize * pixelSize
  let b = boardSize * pixelSize

  if(x < 0) {
    a -= x
    x = 0
  }

  //if(y < 0) {
  //  y = 0
  //}

  drawBox(x, y, a, b, `#000`)
}