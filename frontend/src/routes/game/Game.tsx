import { data } from "../../lib/consts"

const getCanvas = () => {
  const inputs = document.getElementsByTagName(`canvas`)

  if (inputs.length > 0) {
    const gameCanvas = inputs[0]
    gameCanvas.width = window.innerWidth
    gameCanvas.height = window.innerHeight
    data.ctx = gameCanvas.getContext(`2d`)
  } else {
    setTimeout(getCanvas)
  }
}

export const Game = () => {
  getCanvas()

  return <canvas className="w-screen h-screen block" />
}
