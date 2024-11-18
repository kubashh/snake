export const Game = () => {
  const gameCanvas = document.createElement(`canvas`)

  gameCanvas.style.display = "block"
  gameCanvas.style.height = "100%"
  gameCanvas.style.width = "100%"

  const ctx = gameCanvas.getContext(`2d`)

  console.log(ctx)

  return (
    <>
      {gameCanvas}
    </>
  )
}