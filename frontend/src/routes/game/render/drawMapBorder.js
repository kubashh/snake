import { drawBox } from "../drawBox"

export const drawMapBorder = (middle, head) => {
  const { pixelSize, boardSize, ctx } = window.data

  let x = Math.floor(middle.x - head.x * pixelSize)
  let y = Math.floor(ctx.canvas.height - (middle.y - head.y * pixelSize) - boardSize * pixelSize)

  if(x < 0) {
    x = 0
  }

  //if(y < 0) {
  //  y = 0
  //}

  drawBox(x, y, boardSize * pixelSize, boardSize * pixelSize, `#000`)
}