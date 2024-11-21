export const getCanvas = () => {
  const gameCanvas = document.getElementById(`gameCanvas`)

  if(gameCanvas) {
    const ctx = gameCanvas.getContext(`2d`)

    global.data.gameCanvas = gameCanvas
    global.data.ctx = ctx
  } else {
    setTimeout(getCanvas, 0)
  }
}