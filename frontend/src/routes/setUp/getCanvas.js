import { snake } from "../game/snake"

const getCanvas = () => {
  const gameCanvas = document.getElementById(`gameCanvas`)

  if(gameCanvas) {
    const ctx = gameCanvas.getContext(`2d`)

    global.data.ctx = ctx

    snake()
  }

  if(!global.data.ctx) {
    setTimeout(getCanvas, 100)
  }
}

getCanvas()