import { getCanvas } from "./getCanvas"

export const Game = () => {
  getCanvas()

  return (
    <canvas
      id="gameCanvas"
      style={{
        display: "block",
        width: window.innerWidth,
        height: window.innerHeight
      }}
    />
  )
}