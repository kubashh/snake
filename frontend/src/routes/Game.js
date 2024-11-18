export const Game = () => {
  const gameCanvas = <canvas
    style={{
      display: "block",
      height: "100%",
      width: "100%"
    }}
  />

  const ctx = gameCanvas.getContext(`2d`)

  console.log(ctx)

  return (
    gameCanvas
  )
}