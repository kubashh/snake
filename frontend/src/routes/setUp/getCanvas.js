const getCanvas = () => {
  const gameCanvas = document.getElementById(`gameCanvas`)

  if(gameCanvas) {
    global.data.gameCanvas = gameCanvas
  }

  if(!global.DataTransfer.gameCanvas) {
    setTimeout(getCanvas, 100)
  }
}

getCanvas()