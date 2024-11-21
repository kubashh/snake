export const getCanvas = () => {
  const gameCanvas = document.getElementById(`gameCanvas`)

  if(gameCanvas) {
    const ctx = gameCanvas.getContext(`2d`)

    const { width, height } = gameCanvas

    ctx.width = width
    ctx.height = height

    global.data.ctx = ctx
  } else {
    setTimeout(getCanvas, 0)
  }
}