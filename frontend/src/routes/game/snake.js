const start = (ctx) => {
  
}

const snake = () => {
  const gameCanvas = global.data.gameCanvas

  if(global.data.gameCanvas) {
    const ctx = gameCanvas.getContext(`2d`)

    start(ctx)
  }
}

snake()