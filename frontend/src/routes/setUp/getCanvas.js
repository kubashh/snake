const getCanvas = () => {
  const gameCanvas = document.getElementById(`gameCanvas`)

  if(gameCanvas) {
    gloobal.data.gameCanvas = gameCanvas
  }

  if(!globalThis.DataTransfer.gameCanvas) {
    setTimeout(getCanvas, 100)
  }
}

getCanvas()